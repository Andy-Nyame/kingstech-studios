import Link from "next/link";
import { siteConfig } from "@/constants/site";
import styles from "./about.module.css";

export const metadata = {
  title: "About | KINGSTECH STUDIOS",
  description:
    "Learn about KINGSTECH STUDIOS, a digital studio helping businesses build modern websites and professional online experiences.",
};

const values = [
  {
    title: "Clarity",
    description: "We design websites that are easy to understand and easy to use.",
  },
  {
    title: "Trust",
    description: "We help businesses look professional and credible online.",
  },
  {
    title: "Creativity",
    description:
      "We combine design and technology to create modern digital experiences.",
  },
  {
    title: "Growth",
    description:
      "We build with the business goal in mind, not just appearance.",
  },
];

const approachPoints = [
  "Understand the business first",
  "Design with the customer in mind",
  "Build clean and responsive websites",
  "Launch with care and improve over time",
];

export default function AboutPage() {
  return (
    <main className={styles.aboutPage}>
      <section className={styles.hero} aria-labelledby="about-hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">About KINGSTECH STUDIOS</p>
            <h1 id="about-hero-title">
              A digital studio built to help businesses <span>grow online</span>
            </h1>
            <p>
              KINGSTECH STUDIOS designs and builds modern websites and digital
              systems for businesses that want to look professional,
              communicate clearly, and become easier for customers to reach
              online.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="button button-primary">
                Start a Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/services" className="button button-secondary">
                View Our Services
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.visualPanel}>
              <span className={styles.visualMark}>KS</span>
              <span>{siteConfig.name}</span>
              <strong>{siteConfig.tagline}</strong>
            </div>
            <div className={styles.orbitCard}>
              <span>Design</span>
              <span>Development</span>
              <span>Digital Systems</span>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.story} aria-labelledby="studio-story-title">
        <div className={`container ${styles.storyGrid}`}>
          <div>
            <p className="eyebrow">Studio Story</p>
            <h2 id="studio-story-title">
              Built with purpose, creativity, and technology
            </h2>
          </div>
          <div className={styles.storyCopy}>
            <p>
              KINGSTECH STUDIOS was created to help businesses move from only
              being known offline to having a professional digital presence. The
              studio focuses on clean design, strong structure, mobile-first
              development, and practical solutions that help real businesses
              connect with customers.
            </p>
            <div className={styles.storyNote}>
              <span>Focus</span>
              <strong>Professional digital foundations for growing businesses.</strong>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.founder} aria-labelledby="founder-title">
        <div className={`container ${styles.founderGrid}`}>
          <div className={styles.founderCard} aria-hidden="true">
            <div className={styles.initials}>AN</div>
            <div>
              <span>Founder</span>
              <strong>Andy Nyame</strong>
            </div>
          </div>
          <div className={styles.founderCopy}>
            <p className="eyebrow">Leadership</p>
            <h2 id="founder-title">Led by Andy Nyame</h2>
            <p>
              Andy Nyame is the founder of KINGSTECH STUDIOS. His focus is on
              building clean, modern, and business-focused websites that help
              brands appear more trusted and accessible online.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.missionVision} aria-labelledby="mission-title">
        <div className="container">
          <div className={styles.missionGrid}>
            <article className={styles.missionPrimary}>
              <p className="eyebrow">Mission</p>
              <h2 id="mission-title">To help businesses build trust online</h2>
              <p>
                To help businesses build a trusted and professional online
                presence through modern websites and digital systems.
              </p>
            </article>
            <article className={styles.visionCard}>
              <p className="eyebrow">Vision</p>
              <h3>Practical digital solutions for growing businesses</h3>
              <p>
                To become a trusted digital studio known for clean design,
                reliable development, and practical online solutions for growing
                businesses.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className={styles.values} aria-labelledby="values-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Values</p>
            <h2 id="values-title">What guides the work</h2>
          </div>

          <div className={styles.valueGrid}>
            {values.map((value, index) => (
              <article key={value.title} className={styles.valueCard}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.approach} aria-labelledby="approach-title">
        <div className={`container ${styles.approachGrid}`}>
          <div className={styles.approachVisual} aria-hidden="true">
            <div className={styles.browserCard}>
              <span />
              <span />
              <span />
              <div />
            </div>
          </div>

          <div className={styles.approachCopy}>
            <p className="eyebrow">How We Think</p>
            <h2 id="approach-title">Our approach is simple</h2>
            <ol className={styles.approachList}>
              {approachPoints.map((point, index) => (
                <li key={point}>
                  <span>{index + 1}</span>
                  <p>{point}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="about-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="about-cta-title">
            Let&apos;s build something professional for your business
          </h2>
          <p>
            Whether you need a business website, portfolio, booking system, or
            custom web solution, KINGSTECH STUDIOS can help you create a strong
            digital presence.
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
