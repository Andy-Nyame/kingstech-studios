"use client";

import { useState } from "react";
import styles from "./admin-reviews.module.css";

function formatDate(value) {
  if (!value) {
    return "Date unavailable";
  }

  return new Intl.DateTimeFormat("en", {
    dateStyle: "medium",
  }).format(new Date(value));
}

function Stars({ rating }) {
  return (
    <span className={styles.stars} aria-label={`${rating} out of 5 stars`}>
      {"★".repeat(rating)}
      <span aria-hidden="true">{"☆".repeat(Math.max(0, 5 - rating))}</span>
    </span>
  );
}

export default function AdminReviewsClient({ initialReviews }) {
  const [reviews, setReviews] = useState(initialReviews);
  const [statusMessage, setStatusMessage] = useState("");
  const [activeReviewId, setActiveReviewId] = useState("");

  async function setAsFeatured(reviewId, token) {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["x-admin-token"] = token;
    }

    return fetch("/api/reviews/featured", {
      method: "PATCH",
      headers,
      body: JSON.stringify({ id: reviewId }),
    });
  }

  async function handleFeaturedClick(reviewId) {
    setActiveReviewId(reviewId);
    setStatusMessage("");

    try {
      let response = await setAsFeatured(reviewId);

      if (response.status === 401) {
        const token = window.prompt("Enter the reviews admin token.");

        if (!token) {
          setStatusMessage("Featured review update cancelled.");
          return;
        }

        response = await setAsFeatured(reviewId, token);
      }

      const result = await response.json();

      if (!response.ok) {
        setStatusMessage(result.error || "Unable to set featured review.");
        return;
      }

      setReviews((currentReviews) =>
        currentReviews.map((review) => ({
          ...review,
          is_featured: review.id === result.review.id,
        })),
      );
      setStatusMessage("Featured review updated.");
    } catch {
      setStatusMessage("Unable to update the featured review right now.");
    } finally {
      setActiveReviewId("");
    }
  }

  if (!reviews.length) {
    return (
      <div className={styles.emptyState}>
        No reviews are available yet.
      </div>
    );
  }

  return (
    <div className={styles.reviewStack}>
      {statusMessage ? (
        <p className={styles.statusMessage} role="status">
          {statusMessage}
        </p>
      ) : null}

      {reviews.map((review) => {
        const isApproved = review.status === "approved";

        return (
          <article key={review.id} className={styles.reviewCard}>
            <div className={styles.cardHeader}>
              <div>
                <p className={styles.reviewMeta}>
                  {review.project_type || "Project type unavailable"} ·{" "}
                  {formatDate(review.created_at)}
                </p>
                <h2>{review.full_name}</h2>
                {review.business_name ? <p>{review.business_name}</p> : null}
              </div>

              <div className={styles.badges}>
                <span className={styles.statusBadge} data-status={review.status}>
                  {review.status}
                </span>
                {review.is_featured ? (
                  <span className={styles.featuredBadge}>Featured</span>
                ) : null}
              </div>
            </div>

            <Stars rating={review.rating || 0} />
            <blockquote>{review.message}</blockquote>

            {isApproved ? (
              <button
                type="button"
                className={styles.featureButton}
                disabled={review.is_featured || activeReviewId === review.id}
                onClick={() => handleFeaturedClick(review.id)}
              >
                {review.is_featured
                  ? "Currently Featured"
                  : activeReviewId === review.id
                    ? "Updating..."
                    : "Set as Featured"}
              </button>
            ) : (
              <p className={styles.notEligible}>
                Only approved reviews can be featured.
              </p>
            )}
          </article>
        );
      })}
    </div>
  );
}
