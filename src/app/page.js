import Image from "next/image";
import Link from "next/link";
import styles from "./home.module.css";

const capabilities = [
  "Responsive Design",
  "Modern Technology",
  "SEO-Ready Structure",
  "Fast Performance",
  "Accessible Experiences",
  "Secure Foundations",
];

const studioPoints = [
  "Clear and intuitive user experiences",
  "Responsive layouts across modern devices",
  "Performance-conscious development",
  "Accessible and maintainable code",
];

const services = [
  {
    category: "Design",
    title: "Website Design & UI/UX",
    description:
      "Clear, modern interfaces designed around usability, brand identity, and business goals.",
  },
  {
    category: "Development",
    title: "Website Development",
    description:
      "Responsive and maintainable websites built with modern web technologies.",
  },
  {
    category: "Commerce",
    title: "E-Commerce Experiences",
    description:
      "Structured online shopping experiences designed for clarity, trust, and conversion.",
  },
  {
    category: "Applications",
    title: "Custom Web Applications",
    description:
      "Purpose-built digital tools and applications tailored to specific business needs.",
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "Understand the business, audience, goals, and project requirements.",
  },
  {
    number: "02",
    title: "Planning",
    description:
      "Define the site structure, content direction, features, and technical approach.",
  },
  {
    number: "03",
    title: "UI/UX Design",
    description:
      "Create a clear visual system and responsive user experience.",
  },
  {
    number: "04",
    title: "Development",
    description: "Build the approved design using clean, maintainable code.",
  },
  {
    number: "05",
    title: "Testing & Launch",
    description:
      "Review responsiveness, accessibility, performance, and deployment readiness.",
  },
];

export default function Home() {
  return (
    <main className={styles.home}>
      <section className={styles.hero} aria-labelledby="home-hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={`${styles.heroCopy} animate-slide-up`}>
            <p className="eyebrow">Digital Excellence</p>
            <h1 id="home-hero-title" className={styles.heroTitle}>
              Premium Websites Built for <span>Modern Businesses</span>
            </h1>
            <p className={styles.heroBody}>
              KINGSTECH STUDIOS designs and develops modern websites and digital
              experiences that combine clear strategy, refined UI/UX, responsive
              performance, and reliable technology.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="button button-primary">
                Start Your Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/portfolio" className="button button-secondary">
                View Portfolio
              </Link>
            </div>
          </div>

          <div className={`${styles.heroMedia} animate-fade-in`}>
            <Image
              src="/images/backgrounds/hero-illustration.webp"
              alt="Modern digital interface and web development workspace"
              width={1672}
              height={941}
              sizes="(max-width: 52rem) calc(100vw - 40px), (max-width: 75rem) 45vw, 540px"
              className={styles.heroImage}
              priority
            />
            <span className={styles.mediaBadge} aria-hidden="true">
              <span>Refined UI/UX</span>
              <strong>Built with purpose</strong>
            </span>
          </div>
        </div>
      </section>

      <section className={styles.capabilityStrip} aria-labelledby="capabilities-title">
        <h2 id="capabilities-title" className="visually-hidden">
          Core capabilities
        </h2>
        <ul className={`container ${styles.capabilityList}`} role="list">
          {capabilities.map((capability) => (
            <li key={capability}>
              <span className={styles.capabilityMark} aria-hidden="true" />
              {capability}
            </li>
          ))}
        </ul>
      </section>

      <section className={styles.studio} aria-labelledby="studio-title">
        <div className={`container ${styles.studioGrid}`}>
          <div className={styles.studioMedia}>
            <Image
              src="/images/ui/studio-interface-preview.webp"
              alt="KINGSTECH STUDIOS UI and web design workspace"
              width={1536}
              height={1024}
              sizes="(max-width: 52rem) calc(100vw - 40px), (max-width: 75rem) 48vw, 600px"
              className={styles.studioImage}
            />
            <span className={styles.studioNote} aria-hidden="true">
              <small>Our approach</small>
              <strong>Thoughtful by design</strong>
            </span>
          </div>

          <div className={styles.studioCopy}>
            <p className="eyebrow">Our Studio</p>
            <h2 id="studio-title" className={styles.sectionTitle}>
              Designing Digital Experiences with Purpose
            </h2>
            <p className={styles.sectionBody}>
              KINGSTECH STUDIOS helps businesses build strong online foundations
              through thoughtful design, clean development, and user-focused digital
              experiences.
            </p>
            <ul className={styles.pointList} role="list">
              {studioPoints.map((point) => (
                <li key={point}>
                  <span aria-hidden="true">✓</span>
                  {point}
                </li>
              ))}
            </ul>
            <Link href="/process" className={styles.textLink}>
              Explore Our Process
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.services} aria-labelledby="services-title">
        <div className="container">
          <div className={styles.sectionHeading}>
            <p className="eyebrow">Capabilities</p>
            <h2 id="services-title" className={styles.sectionTitle}>
              Specialized Digital Services
            </h2>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service, index) => (
              <article
                key={service.title}
                className={`${styles.serviceCard} ${
                  index === 0 || index === 3 ? styles.serviceWide : ""
                }`}
              >
                {service.category === "Commerce" ? (
                  <div className={styles.serviceImageFrame}>
                    <Image
                      src="/images/services/ecommerce-solutions.webp"
                      alt="Responsive e-commerce website and online shopping interface"
                      width={1536}
                      height={1024}
                      sizes="(max-width: 40rem) calc(100vw - 80px), (max-width: 52rem) 44vw, 300px"
                      className={styles.serviceImage}
                    />
                  </div>
                ) : (
                  <div className={styles.serviceIcon} aria-hidden="true">
                    <span />
                  </div>
                )}
                <div>
                  <p className={styles.serviceCategory}>{service.category}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>

          <div className={styles.centeredAction}>
            <Link href="/services" className="button button-secondary">
              Explore Services
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.project} aria-labelledby="project-title">
        <div className={`container ${styles.projectGrid}`}>
          <div className={styles.projectMedia}>
            <div className={styles.projectDesktopFrame}>
              <Image
                src="/images/portfolio/kobbys-kitchen-desktop.webp"
                alt="Kobby’s Kitchen website displayed on a laptop"
                width={1536}
                height={1024}
                sizes="(max-width: 52rem) calc(100vw - 40px), (max-width: 75rem) 52vw, 650px"
                className={styles.projectDesktopImage}
              />
            </div>
            <div className={styles.projectMobileFrame}>
              <Image
                src="/images/portfolio/kobbys-kitchen-mobile.webp"
                alt="Kobby’s Kitchen responsive website displayed on a smartphone"
                width={1024}
                height={1536}
                sizes="(max-width: 40rem) 68vw, (max-width: 52rem) 240px, 210px"
                className={styles.projectMobileImage}
              />
            </div>
          </div>

          <div className={styles.projectCopy}>
            <p className="eyebrow">Featured Project</p>
            <h2 id="project-title" className={styles.sectionTitle}>
              Kobby’s Kitchen
            </h2>
            <ul className={styles.categoryList} role="list" aria-label="Project services">
              <li>Restaurant Website</li>
              <li>UI/UX Design</li>
              <li>Web Development</li>
            </ul>
            <p className={styles.sectionBody}>
              A modern restaurant website created to present the business clearly,
              showcase its menu and services, and make it easier for customers to find
              essential information and get in touch.
            </p>
            <Link href="/portfolio" className="button button-primary">
              View Case Study
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="process-title">
        <div className="container">
          <div className={styles.processHeading}>
            <h2 id="process-title">A Clear Process from Idea to Launch</h2>
            <p>
              Every project follows a structured workflow so design, content,
              development, testing, and launch remain focused and transparent.
            </p>
          </div>

          <ol className={styles.processGrid}>
            {processSteps.map((step) => (
              <li key={step.number}>
                <span className={styles.stepNumber}>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </li>
            ))}
          </ol>

          <Link href="/process" className={`button button-secondary ${styles.darkButton}`}>
            View Our Process
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className={styles.finalCta} aria-labelledby="final-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="final-cta-title">Let’s Build Your Digital Presence</h2>
          <p>
            Tell us what you want to create, and we’ll help shape it into a clear,
            modern, and effective web experience.
          </p>
          <Link href="/contact" className={`button ${styles.ctaButton}`}>
            Request a Consultation
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
