"use client";

import { useId, useState } from "react";
import Link from "next/link";
import styles from "./reviews.module.css";

const initialFormValues = {
  fullName: "",
  businessName: "",
  projectType: "",
  rating: 0,
  message: "",
  permission: false,
};

const projectTypes = [
  "Business Website",
  "Portfolio Website",
  "E-Commerce Website",
  "Custom Web Solution",
  "Website Update",
  "Other",
];

const guidelines = [
  "Testimonials are reviewed before publishing.",
  "Only feedback from real completed projects will be displayed.",
  "We may contact the client to confirm details.",
  "Testimonials should be respectful and related to the project experience.",
];

const helpfulLinks = [
  {
    title: "Services",
    description: "See what KINGSTECH STUDIOS can build.",
    href: "/services",
  },
  {
    title: "Pricing",
    description: "View starting website packages.",
    href: "/pricing",
  },
  {
    title: "Process",
    description: "Understand how projects are handled from idea to launch.",
    href: "/process",
  },
];

function StarIcon({ filled }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={styles.starIcon}
      focusable="false"
    >
      <path
        d="m12 2.75 2.76 5.6 6.18.9-4.47 4.36 1.06 6.16L12 16.85l-5.53 2.92 1.06-6.16-4.47-4.36 6.18-.9L12 2.75Z"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}

export default function ReviewsPageClient() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const formId = useId();

  function updateField(name, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name]) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];
      return nextErrors;
    });
  }

  function validateForm() {
    const nextErrors = {};

    if (!formValues.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!formValues.rating) {
      nextErrors.rating = "Please select a star rating.";
    }

    if (!formValues.message.trim()) {
      nextErrors.message = "Please enter your testimonial message.";
    }

    if (!formValues.permission) {
      nextErrors.permission =
        "Please confirm KINGSTECH STUDIOS can display this testimonial after review.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setSuccessMessage("");
      return;
    }

    setSuccessMessage(
      "Thank you. Your testimonial has been received for review before publishing.",
    );
    setFormValues(initialFormValues);
  }

  return (
    <main className={styles.reviewsPage}>
      <section className={styles.hero} aria-labelledby="reviews-hero-title">
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">Reviews</p>
          <h1 id="reviews-hero-title">
            Client feedback helps us <span>grow</span>
          </h1>
          <p>
            KINGSTECH STUDIOS values honest feedback from clients. Testimonials
            and ratings from completed projects will appear here after review
            and approval.
          </p>
          <div className={styles.heroActions}>
            <a href="#share-testimonial" className="button button-primary">
              Share a Testimonial
              <span aria-hidden="true">→</span>
            </a>
            <Link href="/contact" className="button button-secondary">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.summary} aria-labelledby="summary-title">
        <div className={`container ${styles.summaryGrid}`}>
          <div className={styles.summaryCard}>
            <p className="eyebrow">Honest Feedback</p>
            <h2 id="summary-title">Testimonials coming soon</h2>
            <p>
              Client testimonials and ratings from completed KINGSTECH STUDIOS
              projects will appear here after they have been reviewed and
              approved.
            </p>
          </div>

          <aside className={styles.ratingCard} aria-label="Rating display note">
            <div className={styles.emptyStars} aria-hidden="true">
              ★★★★★
            </div>
            <p>Public rating preview</p>
            <span>
              No public rating is displayed until approved testimonials are
              available.
            </span>
          </aside>
        </div>
      </section>

      <section
        id="share-testimonial"
        className={styles.formSection}
        aria-labelledby="testimonial-form-title"
      >
        <div className={`container ${styles.formGrid}`}>
          <div className={styles.formIntro}>
            <p className="eyebrow">Submit Testimonial</p>
            <h2 id="testimonial-form-title">Share your experience</h2>
            <p>
              If you have worked with KINGSTECH STUDIOS, you can submit your
              testimonial for review. Approved testimonials may be displayed
              publicly.
            </p>
          </div>

          <form className={styles.reviewForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-full-name`}>Full name</label>
                <input
                  id={`${formId}-full-name`}
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={
                    errors.fullName ? `${formId}-full-name-error` : undefined
                  }
                />
                {errors.fullName ? (
                  <p id={`${formId}-full-name-error`} className={styles.errorText}>
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-business-name`}>
                  Business / brand name
                </label>
                <input
                  id={`${formId}-business-name`}
                  name="businessName"
                  type="text"
                  value={formValues.businessName}
                  onChange={(event) =>
                    updateField("businessName", event.target.value)
                  }
                />
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-project-type`}>Project type</label>
              <select
                id={`${formId}-project-type`}
                name="projectType"
                value={formValues.projectType}
                onChange={(event) =>
                  updateField("projectType", event.target.value)
                }
              >
                <option value="">Select a project type</option>
                {projectTypes.map((projectType) => (
                  <option key={projectType} value={projectType}>
                    {projectType}
                  </option>
                ))}
              </select>
            </div>

            <fieldset className={styles.ratingField}>
              <legend>Star rating</legend>
              <div
                className={styles.starButtons}
                role="radiogroup"
                aria-describedby={
                  errors.rating ? `${formId}-rating-error` : undefined
                }
              >
                {[1, 2, 3, 4, 5].map((rating) => (
                  <button
                    key={rating}
                    type="button"
                    className={styles.starButton}
                    aria-label={`Select ${rating} star${rating > 1 ? "s" : ""}`}
                    aria-checked={formValues.rating === rating}
                    role="radio"
                    data-selected={rating <= formValues.rating}
                    onClick={() => updateField("rating", rating)}
                  >
                    <StarIcon filled={rating <= formValues.rating} />
                  </button>
                ))}
              </div>
              {errors.rating ? (
                <p id={`${formId}-rating-error`} className={styles.errorText}>
                  {errors.rating}
                </p>
              ) : null}
            </fieldset>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-message`}>Testimonial message</label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows="6"
                value={formValues.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? `${formId}-message-error` : undefined
                }
              />
              {errors.message ? (
                <p id={`${formId}-message-error`} className={styles.errorText}>
                  {errors.message}
                </p>
              ) : null}
            </div>

            <div className={styles.permissionGroup}>
              <input
                id={`${formId}-permission`}
                name="permission"
                type="checkbox"
                checked={formValues.permission}
                onChange={(event) =>
                  updateField("permission", event.target.checked)
                }
                aria-invalid={errors.permission ? "true" : "false"}
                aria-describedby={
                  errors.permission ? `${formId}-permission-error` : undefined
                }
              />
              <label htmlFor={`${formId}-permission`}>
                I allow KINGSTECH STUDIOS to display this testimonial publicly
                after review.
              </label>
            </div>
            {errors.permission ? (
              <p id={`${formId}-permission-error`} className={styles.errorText}>
                {errors.permission}
              </p>
            ) : null}

            {successMessage ? (
              <p className={styles.successMessage} role="status">
                {successMessage}
              </p>
            ) : null}

            <button type="submit" className={`button ${styles.submitButton}`}>
              Submit Testimonial
            </button>
          </form>
        </div>
      </section>

      <section className={styles.guidelines} aria-labelledby="guidelines-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Review Guidelines</p>
            <h2 id="guidelines-title">Before testimonials are published</h2>
          </div>

          <div className={styles.guidelineGrid}>
            {guidelines.map((guideline, index) => (
              <article key={guideline} className={styles.guidelineCard}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{guideline}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.helpfulLinks} aria-labelledby="helpful-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Want to learn more first?</p>
            <h2 id="helpful-title">Helpful pages to visit next</h2>
          </div>

          <div className={styles.linkGrid}>
            {helpfulLinks.map((item) => (
              <Link key={item.title} href={item.href} className={styles.linkCard}>
                <span aria-hidden="true">↗</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="reviews-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="reviews-cta-title">
            Ready to work with KINGSTECH STUDIOS?
          </h2>
          <p>
            Let&apos;s discuss your business and plan a professional website or
            digital solution that helps you look trusted and easier to reach
            online.
          </p>
          <Link href="/contact" className={`button ${styles.ctaButton}`}>
            Contact KINGSTECH STUDIOS
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
