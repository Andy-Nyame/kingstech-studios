import Link from "next/link";
import styles from "./process.module.css";

export const metadata = {
  title: "Process | KINGSTECH STUDIOS",
  description:
    "See the KINGSTECH STUDIOS process for planning, designing, building, testing, and launching professional websites and digital systems.",
};

const processSteps = [
  {
    title: "Understand the Business",
    description:
      "We begin by learning about your business, your goals, your customers, and what you want the website or digital system to achieve.",
  },
  {
    title: "Plan the Structure",
    description:
      "We organize the website pages, sections, content flow, and important features so the project has a clear direction before design begins.",
  },
  {
    title: "Design the Experience",
    description:
      "We create a clean and modern interface focused on clarity, brand trust, mobile usability, and customer action.",
  },
  {
    title: "Build the Website",
    description:
      "We turn the approved design into a responsive website using clean structure, reliable code, and performance-focused development.",
  },
  {
    title: "Test and Refine",
    description:
      "We check the website across screen sizes, fix layout issues, improve spacing, and make sure the experience feels smooth.",
  },
  {
    title: "Launch and Support",
    description:
      "After approval, we deploy the website and provide support to make sure everything works properly after launch.",
  },
];

const collaborationItems = [
  {
    title: "Business information",
    description:
      "Basic details about your business, services, contact information, and goals.",
  },
  {
    title: "Content and images",
    description:
      "Text, photos, logos, brand colors, or any existing materials you want included.",
  },
  {
    title: "Feedback",
    description:
      "Clear feedback during review stages so the final website matches your needs.",
  },
  {
    title: "Approval",
    description:
      "Final confirmation before launch to make sure everything is correct.",
  },
];

const processReasons = [
  "Clear communication from the beginning",
  "Structure before design",
  "Mobile-first thinking",
  "Review before launch",
  "Clean handover after completion",
];

function ProcessCard({ step, index }) {
  return (
    <article className={styles.timelineCard}>
      <p>Step {String(index + 1).padStart(2, "0")}</p>
      <h3>{step.title}</h3>
      <p>{step.description}</p>
    </article>
  );
}

export default function ProcessPage() {
  return (
    <main className={styles.processPage}>
      <section className={styles.hero} aria-labelledby="process-hero-title">
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">Our Process</p>
          <h1 id="process-hero-title">
            A clear process from idea to <span>launch</span>
          </h1>
          <p>
            Every successful website starts with understanding the business.
            KINGSTECH STUDIOS follows a simple and structured process to plan,
            design, build, and launch digital experiences that are clean,
            professional, and useful.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="button button-primary">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/services" className="button button-secondary">
              View Services
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.timelineSection} aria-labelledby="timeline-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Project Workflow</p>
            <h2 id="timeline-title">How we bring your project to life</h2>
          </div>

          <ol className={styles.timelineList}>
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <li key={step.title} className={styles.timelineItem}>
                  {isEven ? (
                    <ProcessCard step={step} index={index} />
                  ) : (
                    <span className={styles.timelineSpacer} aria-hidden="true" />
                  )}

                  <span className={styles.timelineNode} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {isEven ? (
                    <span className={styles.timelineSpacer} aria-hidden="true" />
                  ) : (
                    <ProcessCard step={step} index={index} />
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className={styles.collaboration} aria-labelledby="collaboration-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Client Collaboration</p>
            <h2 id="collaboration-title">What we need from you</h2>
          </div>

          <div className={styles.collaborationGrid}>
            {collaborationItems.map((item, index) => (
              <article key={item.title} className={styles.collaborationCard}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.whyProcess} aria-labelledby="why-process-title">
        <div className={`container ${styles.whyGrid}`}>
          <div>
            <p className="eyebrow">Why This Process Works</p>
            <h2 id="why-process-title">Built to avoid confusion</h2>
            <p>
              A clear workflow keeps the project focused from the first
              conversation to the final handover, so every decision has a
              practical purpose.
            </p>
          </div>

          <ul className={styles.reasonList} role="list">
            {processReasons.map((reason) => (
              <li key={reason}>
                <span aria-hidden="true">✓</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="process-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="process-cta-title">Ready to start your project?</h2>
          <p>
            Let&apos;s discuss your business and create a clear plan for building
            your website or digital system.
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
