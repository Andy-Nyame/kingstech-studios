import Link from "next/link";
import styles from "./faqs.module.css";

export const metadata = {
  title: "FAQs | KINGSTECH STUDIOS",
  description:
    "Find answers to common questions about KINGSTECH STUDIOS website design, pricing, process, timelines, and digital services.",
};

const faqs = [
  {
    question: "What does KINGSTECH STUDIOS do?",
    answer:
      "KINGSTECH STUDIOS designs and builds modern websites, digital experiences, and web-based systems for businesses that want to look professional and become easier to reach online.",
  },
  {
    question: "What type of businesses do you work with?",
    answer:
      "We work with small businesses, growing brands, service providers, food vendors, shops, and businesses that need a professional online presence or a custom digital solution.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our website packages start from the prices shown on the Pricing page. The final cost depends on the number of pages, features, design complexity, content, domain, hosting, and support needs.",
  },
  {
    question: "Can payment be made in Ghana cedis?",
    answer:
      "Yes. Prices may be shown in USD for global understanding, but payment can be made in GHS equivalent based on the agreed project quote.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on the project size and how quickly content and feedback are provided. A simple website may take less time, while larger or custom projects may require more planning and development.",
  },
  {
    question: "What do I need before starting?",
    answer:
      "You should provide your business name, services, contact details, logo if available, brand colors if available, text content, images, and any examples or ideas you want us to consider.",
  },
  {
    question: "Can you help if I do not have all my content ready?",
    answer:
      "Yes. We can help organize your information and guide you on the type of content needed for each page. Content support can also be discussed based on the project scope.",
  },
  {
    question: "Will my website work on phones?",
    answer:
      "Yes. Every website we build is designed to work properly on mobile, tablet, and desktop screens.",
  },
  {
    question: "Can customers contact me through the website?",
    answer:
      "Yes. We can add contact forms, WhatsApp links, call buttons, Google Maps, and enquiry flows depending on what your business needs.",
  },
  {
    question: "Do you build booking systems or dashboards?",
    answer:
      "Yes. We can build custom web solutions such as booking systems, admin panels, dashboards, and business workflow tools depending on the project requirements.",
  },
  {
    question: "Do you provide domain and hosting support?",
    answer:
      "Yes. We can help with domain setup, hosting setup, deployment, and basic technical support based on the agreed project scope.",
  },
  {
    question: "What happens after the website is launched?",
    answer:
      "After launch, we make sure the website is working properly and provide support based on the project agreement. Ongoing maintenance can also be discussed separately.",
  },
  {
    question: "Can I request changes during the project?",
    answer:
      "Yes. Review and feedback are part of the process. We agree on the project scope first, then handle changes carefully so the final website matches your business needs.",
  },
  {
    question: "How do I start a project?",
    answer:
      "You can contact KINGSTECH STUDIOS, share your business details, and explain what you want to build. We will review your needs and recommend the right direction.",
  },
];

const helpfulLinks = [
  {
    title: "Services",
    description: "Learn what we can build for your business.",
    href: "/services",
  },
  {
    title: "Process",
    description: "Understand how we work from idea to launch.",
    href: "/process",
  },
  {
    title: "Pricing",
    description: "View starting website packages.",
    href: "/pricing",
  },
];

export default function FAQsPage() {
  return (
    <main className={styles.faqsPage}>
      <section className={styles.hero} aria-labelledby="faqs-hero-title">
        <div className={`container ${styles.heroInner}`}>
          <p className="eyebrow">FAQs</p>
          <h1 id="faqs-hero-title">
            Questions clients usually <span>ask</span>
          </h1>
          <p>
            Find clear answers about our website process, pricing, timelines,
            project requirements, and how to start working with KINGSTECH
            STUDIOS.
          </p>
          <div className={styles.heroActions}>
            <Link href="/contact" className="button button-primary">
              Start a Project
              <span aria-hidden="true">→</span>
            </Link>
            <Link href="/pricing" className="button button-secondary">
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.faqSection} aria-labelledby="faq-list-title">
        <div className={`container ${styles.faqGrid}`}>
          <div className={styles.faqIntro}>
            <p className="eyebrow">Answers</p>
            <h2 id="faq-list-title">Before you start</h2>
            <p>
              These answers explain the common things clients ask before a
              website or digital solution begins.
            </p>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, index) => (
              <details key={faq.question} className={styles.faqItem}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{faq.question}</h3>
                  <span className={styles.faqIcon} aria-hidden="true">
                    +
                  </span>
                </summary>
                <div className={styles.faqAnswer}>
                  <p>{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.helpfulLinks} aria-labelledby="helpful-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Still exploring?</p>
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

      <section className={styles.cta} aria-labelledby="faqs-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Need clarity?</p>
          <h2 id="faqs-cta-title">Still have a question?</h2>
          <p>
            Send us a message and we&apos;ll help you understand the best option
            for your business website or digital solution.
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
