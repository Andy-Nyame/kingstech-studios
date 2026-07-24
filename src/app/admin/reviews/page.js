import AdminReviewsClient from "./AdminReviewsClient";
import { getAdminReviews } from "@/lib/reviews";
import styles from "./admin-reviews.module.css";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "Admin Reviews | KINGSTECH STUDIOS",
  description: "Hidden review moderation area for KINGSTECH STUDIOS.",
};

export default async function AdminReviewsPage() {
  const { error, reviews } = await getAdminReviews();

  return (
    <main className={styles.adminPage}>
      <section className={styles.hero} aria-labelledby="admin-reviews-title">
        <div className="container">
          <p className="eyebrow">Hidden Admin</p>
          <h1 id="admin-reviews-title">Reviews moderation</h1>
          <p>
            Manage featured testimonials. Only approved reviews can be featured
            on the Home page.
          </p>
        </div>
      </section>

      <section className={styles.reviewSection} aria-label="Review list">
        <div className="container">
          {error ? (
            <div className={styles.notice} role="status">
              {error}
            </div>
          ) : null}

          <AdminReviewsClient initialReviews={reviews} />
        </div>
      </section>
    </main>
  );
}
