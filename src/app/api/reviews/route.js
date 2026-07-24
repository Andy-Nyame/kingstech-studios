import { createPendingReview, getSupabaseEnvStatus } from "@/lib/reviews";

export const dynamic = "force-dynamic";

function validateReview(values) {
  const errors = {};
  const rating = Number(values.rating);

  if (!values.full_name?.trim()) {
    errors.full_name = "Full name is required.";
  }

  if (!Number.isInteger(rating) || rating < 1 || rating > 5) {
    errors.rating = "A rating from 1 to 5 is required.";
  }

  if (!values.message?.trim()) {
    errors.message = "Testimonial message is required.";
  }

  if (values.permission !== true) {
    errors.permission = "Permission confirmation is required.";
  }

  return errors;
}

export async function POST(request) {
  console.info("[reviews] POST /api/reviews hit");
  console.info("[reviews] Supabase env status", getSupabaseEnvStatus());

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  const payload = {
    full_name: body.full_name?.trim() || "",
    business_name: body.business_name?.trim() || "",
    project_type: body.project_type?.trim() || "",
    rating: Number(body.rating),
    message: body.message?.trim() || "",
    permission: body.permission === true,
  };

  const validationErrors = validateReview(payload);

  if (Object.keys(validationErrors).length > 0) {
    return Response.json(
      {
        error: "Please check the testimonial form and try again.",
        fields: validationErrors,
      },
      { status: 400 },
    );
  }

  const result = await createPendingReview(payload);

  console.info("[reviews] Supabase insert status", result.status);

  if (!result.ok) {
    console.error("[reviews] Supabase insert failed", {
      body: result.data,
      status: result.status,
    });

    return Response.json(
      {
        error:
          "Something went wrong while submitting your testimonial. Please try again.",
      },
      { status: 500 },
    );
  }

  return Response.json(
    {
      review: Array.isArray(result.data) ? result.data[0] || null : result.data,
    },
    { status: 201 },
  );
}
