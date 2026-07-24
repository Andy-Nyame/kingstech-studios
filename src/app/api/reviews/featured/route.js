import { getFeaturedReview, setFeaturedReview } from "@/lib/reviews";

export const dynamic = "force-dynamic";

function isAuthorized(request) {
  const adminToken = process.env.REVIEW_ADMIN_KEY;

  if (!adminToken) {
    return true;
  }

  const authorization = request.headers.get("authorization") || "";
  const bearerToken = authorization.startsWith("Bearer ")
    ? authorization.slice("Bearer ".length)
    : "";
  const headerToken = request.headers.get("x-admin-token") || "";

  return bearerToken === adminToken || headerToken === adminToken;
}

export async function GET() {
  const review = await getFeaturedReview();

  return Response.json({
    review,
  });
}

export async function PATCH(request) {
  if (!isAuthorized(request)) {
    return Response.json(
      { error: "Unauthorized featured review update." },
      { status: 401 },
    );
  }

  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Invalid JSON body." },
      { status: 400 },
    );
  }

  if (!body?.id) {
    return Response.json(
      { error: "A review id is required." },
      { status: 400 },
    );
  }

  const result = await setFeaturedReview(body.id);

  if (!result.ok) {
    return Response.json(
      { error: result.error || "Unable to set featured review." },
      { status: result.status || 500 },
    );
  }

  return Response.json({
    review: result.data,
  });
}
