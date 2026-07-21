import Image from "next/image";
import Link from "next/link";
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
  { title: "Responsive website layout", icon: "devices" },
  { title: "Clear food business presentation", icon: "menu" },
  { title: "WhatsApp/contact focused flow", icon: "chat" },
  { title: "Simple navigation", icon: "navigation" },
  { title: "Mobile-first customer experience", icon: "phone" },
  { title: "Modern visual direction", icon: "sparkle" },
];

function HighlightIcon({ name }) {
  const icons = {
    devices: (
      <>
        <rect x="3" y="5" width="13" height="10" rx="1.6" />
        <path d="M8 19h3" />
        <path d="M9.5 15v4" />
        <rect x="17" y="9" width="4" height="9" rx="1.2" />
      </>
    ),
    menu: (
      <>
        <rect x="5" y="4" width="14" height="16" rx="2" />
        <path d="M8 8h8" />
        <path d="M8 12h8" />
        <path d="M8 16h5" />
      </>
    ),
    chat: (
      <>
        <path d="M5 18.5 6.2 15A7.5 7.5 0 1 1 9 17.8L5 18.5Z" />
        <path d="M9 10.5h6" />
        <path d="M9 13.5h4" />
      </>
    ),
    navigation: (
      <>
        <path d="M5 12h13" />
        <path d="m14 8 4 4-4 4" />
        <path d="M6 6h8" />
        <path d="M6 18h8" />
      </>
    ),
    phone: (
      <>
        <rect x="7" y="3" width="10" height="18" rx="2" />
        <path d="M10.5 6h3" />
        <path d="M11.5 18h1" />
      </>
    ),
    sparkle: (
      <>
        <path d="M12 3.5 13.7 9l5.3 1.7-5.3 1.7L12 18l-1.7-5.6L5 10.7 10.3 9 12 3.5Z" />
        <path d="M18.5 4.5v3" />
        <path d="M20 6h-3" />
        <path d="M5.5 16.5v2.5" />
        <path d="M6.75 17.75h-2.5" />
      </>
    ),
  };

  return (
    <span className={styles.highlightIcon} aria-hidden="true">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        focusable="false"
      >
        {icons[name]}
      </svg>
    </span>
  );
}

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
              <article key={highlight.title} className={styles.highlightCard}>
                <HighlightIcon name={highlight.icon} />
                <h3>{highlight.title}</h3>
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
