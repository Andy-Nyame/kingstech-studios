import Image from "next/image";
import Link from "next/link";
import styles from "./services.module.css";

export const metadata = {
  title: "Services | KINGSTECH STUDIOS",
  description:
    "Explore web design, web development, e-commerce, and custom web application services from KINGSTECH STUDIOS.",
};

const services = [
  {
    label: "Design",
    title: "Website Design & UI/UX",
    description:
      "Modern, brand-focused interfaces shaped around clarity, usability, and the way real customers move through a website.",
    features: [
      "Modern layouts",
      "Clean user experience",
      "Mobile-friendly interface",
      "Brand-focused visual design",
    ],
    image: {
      src: "/images/services/website-design-uiux.webp",
      alt: "Website design and UI/UX interface preview",
      width: 1448,
      height: 1086,
    },
  },
  {
    label: "Development",
    title: "Website Development",
    description:
      "Responsive business websites built with clean structure, reliable frontend development, and deployment-ready foundations.",
    features: [
      "Fast business websites",
      "Responsive frontend development",
      "Clean code structure",
      "Deployment-ready builds",
    ],
    image: {
      src: "/images/services/website-development.webp",
      alt: "Website development workspace and responsive website interface",
      width: 1536,
      height: 1024,
    },
  },
  {
    label: "Commerce",
    title: "E-Commerce Solutions",
    description:
      "Customer-friendly online experiences that help businesses present products or services clearly and guide people toward enquiry or purchase.",
    features: [
      "Online product/service showcase",
      "Enquiry or order flow",
      "WhatsApp/contact integration",
      "Customer-friendly shopping experience",
    ],
    image: {
      src: "/images/services/ecommerce-solutions.webp",
      alt: "Responsive e-commerce website and online shopping interface",
      width: 1536,
      height: 1024,
    },
  },
  {
    label: "Applications",
    title: "Custom Web Applications",
    description:
      "Purpose-built digital systems for teams that need practical tools, structured workflows, and maintainable web interfaces.",
    features: [
      "Dashboards",
      "Booking systems",
      "Admin panels",
      "Business workflow tools",
    ],
    image: {
      src: "/images/services/custom-web-applications.webp",
      alt: "Custom web application dashboard and business workflow interface",
      width: 1536,
      height: 1024,
    },
  },
];

const processSteps = [
  "Understand your business",
  "Plan the website structure",
  "Design the interface",
  "Build and test",
  "Launch and support",
];

const reasons = [
  "Modern design approach",
  "Mobile-first development",
  "Clear communication",
  "Business-focused websites",
  "Clean and scalable structure",
];

export default function ServicesPage() {
  return (
    <main className={styles.servicesPage}>
      <section className={styles.hero} aria-labelledby="services-hero-title">
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">Our Services</p>
          <h1 id="services-hero-title">
            Digital services built for <span>growing businesses</span>
          </h1>
          <p>
            KINGSTECH STUDIOS designs and builds modern websites and digital
            systems that help businesses look professional, communicate clearly,
            and become easier to reach online.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="button button-primary">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/portfolio" className="button button-secondary">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.overview} aria-labelledby="services-overview-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Capabilities</p>
            <h2 id="services-overview-title">Services shaped around real business needs</h2>
          </div>

          <div className={styles.serviceGrid}>
            {services.map((service) => (
              <article key={service.title} className={styles.serviceCard}>
                <div className={styles.serviceMedia}>
                  <Image
                    src={service.image.src}
                    alt={service.image.alt}
                    width={service.image.width}
                    height={service.image.height}
                    sizes="(max-width: 40rem) calc(100vw - 80px), (max-width: 64rem) 38vw, 320px"
                    className={styles.serviceImage}
                  />
                </div>
                <div className={styles.serviceContent}>
                  <p>{service.label}</p>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <ul role="list">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <span aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.process} aria-labelledby="services-process-title">
        <div className="container">
          <div className={styles.processHeader}>
            <p className="eyebrow">Process</p>
            <h2 id="services-process-title">How we work</h2>
          </div>

          <ol className={styles.processList}>
            {processSteps.map((step, index) => (
              <li key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.whyChoose} aria-labelledby="services-why-title">
        <div className={`container ${styles.whyGrid}`}>
          <div>
            <p className="eyebrow">Why Choose KINGSTECH</p>
            <h2 id="services-why-title">Built with clarity, care, and purpose</h2>
            <p>
              Every service is focused on helping your business present itself
              better online through thoughtful design, clean development, and
              practical digital structure.
            </p>
          </div>

          <ul className={styles.reasonList} role="list">
            {reasons.map((reason) => (
              <li key={reason}>
                <span aria-hidden="true">✓</span>
                {reason}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="services-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="services-cta-title">Ready to build your digital presence?</h2>
          <p>
            Let&apos;s create a website that helps your business look professional
            and easier to reach online.
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
