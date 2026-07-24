const REVIEWS_TABLE = "reviews";

const PUBLIC_REVIEW_FIELDS = [
  "id",
  "full_name",
  "business_name",
  "project_type",
  "rating",
  "message",
  "created_at",
];

const ADMIN_REVIEW_FIELDS = [
  ...PUBLIC_REVIEW_FIELDS,
  "status",
  "is_featured",
];

function getSupabaseConfig() {
  const url =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const key =
    process.env.SUPABASE_SERVICE_ROLE_KEY ||
    process.env.SUPABASE_SERVICE_KEY ||
    process.env.SUPABASE_ANON_KEY ||
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
    "";

  return {
    configured: Boolean(url && key),
    key,
    url: url.replace(/\/$/, ""),
  };
}

function createSupabaseUrl(path, params = {}) {
  const { url } = getSupabaseConfig();
  const requestUrl = new URL(`${url}/rest/v1/${path}`);

  Object.entries(params).forEach(([key, value]) => {
    requestUrl.searchParams.set(key, value);
  });

  return requestUrl;
}

function createHeaders({ prefer } = {}) {
  const { key } = getSupabaseConfig();
  const headers = {
    apikey: key,
    Authorization: `Bearer ${key}`,
    "Content-Type": "application/json",
  };

  if (prefer) {
    headers.Prefer = prefer;
  }

  return headers;
}

async function requestSupabase(path, options = {}) {
  const config = getSupabaseConfig();

  if (!config.configured) {
    return {
      data: null,
      error:
        "Supabase is not configured. Add SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY.",
      ok: false,
      status: 503,
    };
  }

  const requestUrl = createSupabaseUrl(path, options.params);
  const response = await fetch(requestUrl, {
    method: options.method || "GET",
    headers: createHeaders({ prefer: options.prefer }),
    body: options.body ? JSON.stringify(options.body) : undefined,
    cache: "no-store",
  });

  let data = null;
  const responseText = await response.text();

  if (responseText) {
    try {
      data = JSON.parse(responseText);
    } catch {
      data = responseText;
    }
  }

  if (!response.ok) {
    const message =
      typeof data === "object" && data && "message" in data
        ? data.message
        : "Supabase request failed.";

    return {
      data,
      error: message,
      ok: false,
      status: response.status,
    };
  }

  return {
    data,
    error: null,
    ok: true,
    status: response.status,
  };
}

export async function getFeaturedReview() {
  const response = await requestSupabase(REVIEWS_TABLE, {
    params: {
      select: PUBLIC_REVIEW_FIELDS.join(","),
      status: "eq.approved",
      is_featured: "eq.true",
      order: "created_at.desc",
      limit: "1",
    },
  });

  if (!response.ok) {
    return null;
  }

  return Array.isArray(response.data) ? response.data[0] || null : null;
}

export async function getAdminReviews() {
  const response = await requestSupabase(REVIEWS_TABLE, {
    params: {
      select: ADMIN_REVIEW_FIELDS.join(","),
      order: "created_at.desc",
    },
  });

  if (!response.ok) {
    return {
      error: response.error,
      reviews: [],
    };
  }

  return {
    error: null,
    reviews: Array.isArray(response.data) ? response.data : [],
  };
}

export async function setFeaturedReview(reviewId) {
  const targetResponse = await requestSupabase(REVIEWS_TABLE, {
    params: {
      select: "id,status",
      id: `eq.${reviewId}`,
      limit: "1",
    },
  });

  if (!targetResponse.ok) {
    return targetResponse;
  }

  const targetReview = Array.isArray(targetResponse.data)
    ? targetResponse.data[0] || null
    : null;

  if (!targetReview || targetReview.status !== "approved") {
    return {
      data: null,
      error: "Only approved reviews can be featured.",
      ok: false,
      status: 400,
    };
  }

  const unsetResponse = await requestSupabase(REVIEWS_TABLE, {
    method: "PATCH",
    params: {
      id: `neq.${reviewId}`,
      is_featured: "eq.true",
    },
    body: {
      is_featured: false,
    },
    prefer: "return=minimal",
  });

  if (!unsetResponse.ok) {
    return unsetResponse;
  }

  const setResponse = await requestSupabase(REVIEWS_TABLE, {
    method: "PATCH",
    params: {
      id: `eq.${reviewId}`,
      status: "eq.approved",
      select: ADMIN_REVIEW_FIELDS.join(","),
    },
    body: {
      is_featured: true,
    },
    prefer: "return=representation",
  });

  if (!setResponse.ok) {
    return setResponse;
  }

  const updatedReview = Array.isArray(setResponse.data)
    ? setResponse.data[0] || null
    : null;

  if (!updatedReview) {
    return {
      data: null,
      error: "Only approved reviews can be featured.",
      ok: false,
      status: 400,
    };
  }

  return {
    data: updatedReview,
    error: null,
    ok: true,
    status: 200,
  };
}
