import Image from "next/image";
import Link from "next/link";
import MediaPlaceholder from "@/components/ui/MediaPlaceholder";
import styles from "./portfolio.module.css";

export const metadata = {
  title: "Work | KINGSTECH STUDIOS",
  description:
    "Explore KINGSTECH STUDIOS website projects, digital experiences, and business-focused web design work.",
};

const projectDetails = [
  { label: "Industry", value: "Food & Restaurant" },
  { label: "Type", value: "Business Website" },
  {
    label: "Focus",
    value: "Menu showcase, mobile experience, contact flow",
  },
  { label: "Status", value: "Website project" },
];

const highlights = [
  "Responsive website layout",
  "Clear food business presentation",
  "WhatsApp/contact focused flow",
  "Simple navigation",
  "Mobile-first customer experience",
  "Modern visual direction",
];

const upcomingProjects = [
  {
    title: "Car Rental Website",
    status: "Concept",
    description:
      "A professional booking-focused website concept for a car rental business.",
  },
  {
    title: "Business Website",
    status: "Coming Soon",
    description:
      "Clean websites for local businesses that need a stronger online presence.",
  },
  {
    title: "Custom Dashboard",
    status: "In Planning",
    description:
      "Web app interfaces for managing bookings, orders, customers, or business data.",
  },
];

export default function PortfolioPage() {
  return (
    <main className={styles.portfolioPage}>
      <section className={styles.hero} aria-labelledby="portfolio-hero-title">
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">Our Work</p>
          <h1 id="portfolio-hero-title">
            Digital projects built with <span>care and purpose</span>
          </h1>
          <p>
            Showcase KINGSTECH STUDIOS projects, website concepts, and digital
            experiences created to help businesses look professional and connect
            with customers online.
          </p>
          <div className={styles.heroActions}>
            <Link href="#featured-project" className="button button-primary">
              View Featured Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/contact" className="button button-secondary">
              Start a Project
            </Link>
          </div>
        </div>
      </section>

      <section
        id="featured-project"
        className={styles.featuredProject}
        aria-labelledby="featured-project-title"
      >
        <div className="container">
          <div className={styles.featuredHeader}>
            <div>
              <p className="eyebrow">Featured Project</p>
              <h2 id="featured-project-title">Kobby&apos;s Kitchen Website</h2>
            </div>
            <ul className={styles.projectTags} role="list" aria-label="Project categories">
              <li>Food & Restaurant</li>
              <li>Business Website</li>
              <li>Mobile Experience</li>
            </ul>
          </div>

          <div className={styles.featuredGrid}>
            <div className={styles.projectMedia}>
              <div className={styles.deviceShowcase}>
                <div className={styles.desktopFrame}>
                  <Image
                    src="/images/portfolio/kobbys-kitchen-desktop.webp"
                    alt="Kobby's Kitchen website displayed on a laptop"
                    width={1536}
                    height={1024}
                    sizes="(max-width: 40rem) 68vw, (max-width: 64rem) calc(100vw - 80px), (max-width: 75rem) 58vw, 720px"
                    className={styles.desktopImage}
                    priority
                  />
                </div>
                <div className={styles.mobileFrame}>
                  <Image
                    src="/images/portfolio/kobbys-kitchen-mobile.webp"
                    alt="Kobby's Kitchen responsive website displayed on a smartphone"
                    width={1024}
                    height={1536}
                    sizes="(max-width: 40rem) 26vw, (max-width: 64rem) 220px, 230px"
                    className={styles.mobileImage}
                  />
                </div>
              </div>
            </div>

            <aside className={styles.projectSummary} aria-label="Project summary">
              <p>
                A modern food vendor website designed to help Kobby&apos;s Kitchen
                present its meals, share business information, and make it easier
                for customers to contact or order.
              </p>
              <dl className={styles.detailList}>
                {projectDetails.map(({ label, value }) => (
                  <div key={label}>
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
            </aside>
          </div>
        </div>
      </section>

      <section className={styles.highlights} aria-labelledby="project-highlights-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Project Highlights</p>
            <h2 id="project-highlights-title">Built around clarity and customer access</h2>
          </div>

          <div className={styles.highlightGrid}>
            {highlights.map((highlight) => (
              <article key={highlight} className={styles.highlightCard}>
                <span aria-hidden="true" />
                <h3>{highlight}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.upcoming} aria-labelledby="upcoming-projects-title">
        <div className="container">
          <div className={styles.upcomingHeader}>
            <div>
              <p className="eyebrow">Pipeline</p>
              <h2 id="upcoming-projects-title">More projects coming soon</h2>
            </div>
            <p>
              These are planned directions and concept areas for future KINGSTECH
              STUDIOS work. They are not presented as completed client projects.
            </p>
          </div>

          <div className={styles.upcomingGrid}>
            {upcomingProjects.map((project) => (
              <article key={project.title} className={styles.upcomingCard}>
                <MediaPlaceholder
                  label={project.status}
                  className={styles.projectPlaceholder}
                  aspectRatio="4 / 3"
                />
                <div className={styles.upcomingContent}>
                  <p>{project.status}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="portfolio-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="portfolio-cta-title">Have a project in mind?</h2>
          <p>
            Let&apos;s build a professional website that helps your business look
            trusted and easier to reach online.
          </p>
          <Link href="/contact" className={`button ${styles.ctaButton}`}>
            Start a Project
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
