import Link from "next/link";
import styles from "./pricing.module.css";

export const metadata = {
  title: "Pricing | KINGSTECH STUDIOS",
  description:
    "View KINGSTECH STUDIOS website pricing packages for business websites, custom web solutions, and digital services.",
};

const packages = [
  {
    name: "Starter Website",
    price: "From $250",
    bestFor: "Small businesses that need a clean online presence.",
    cta: "Get Started",
    features: [
      "1–3 page website",
      "Mobile responsive design",
      "Basic business information sections",
      "Contact and WhatsApp link",
      "Basic SEO setup",
      "Deployment support",
    ],
  },
  {
    name: "Business Website",
    price: "From $400",
    bestFor:
      "Growing businesses that need a stronger and more complete website.",
    cta: "Choose Business",
    badge: "Recommended",
    features: [
      "4–7 page website",
      "Custom homepage and inner pages",
      "Service or product showcase",
      "Contact form or enquiry flow",
      "WhatsApp/call integration",
      "Google Maps integration",
      "Basic SEO setup",
      "Mobile and desktop optimization",
    ],
  },
  {
    name: "Custom Web Solution",
    price: "From $650",
    bestFor:
      "Businesses that need booking systems, dashboards, admin tools, or advanced website features.",
    cta: "Discuss Project",
    features: [
      "Custom website or web app structure",
      "Booking or enquiry system",
      "Admin/dashboard interface where needed",
      "Custom forms and workflows",
      "Responsive frontend development",
      "Testing and deployment",
      "Project-based planning",
    ],
  },
];

const addOns = [
  "Custom domain setup",
  "Hosting setup/support",
  "Extra website pages",
  "Logo or brand asset setup",
  "Maintenance and updates",
  "Website content support",
  "Advanced forms",
  "Booking flow",
  "Admin dashboard",
  "Business email setup",
];

const priceFactors = [
  "Number of pages",
  "Design complexity",
  "Booking or custom features",
  "Content and image preparation",
  "Domain and hosting needs",
  "Timeline and support level",
];

export default function PricingPage() {
  return (
    <main className={styles.pricingPage}>
      <section className={styles.hero} aria-labelledby="pricing-hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Pricing</p>
            <h1 id="pricing-hero-title">
              Simple pricing for <span>professional websites</span>
            </h1>
            <p>
              Choose a starting package that matches your current business
              needs. Every project can be adjusted based on the number of pages,
              features, content, and level of support required.
            </p>
            <div className={styles.heroActions}>
              <Link href="/contact" className="button button-primary">
                Start a Project
                <span aria-hidden="true">→</span>
              </Link>
              <Link href="/process" className="button button-secondary">
                View Our Process
              </Link>
            </div>
          </div>

          <aside className={styles.pricingNote} aria-label="Pricing note">
            <span aria-hidden="true">i</span>
            <p>
              Pricing is presented as a starting point. Final cost depends on
              project scope, pages, features, content, domain, hosting, and
              support needs.
            </p>
          </aside>
        </div>
      </section>

      <section className={styles.packages} aria-labelledby="packages-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Website Packages</p>
            <h2 id="packages-title">Starting points for different business needs</h2>
          </div>

          <div className={styles.packageGrid}>
            {packages.map((pricingPackage) => (
              <article
                key={pricingPackage.name}
                className={`${styles.packageCard} ${
                  pricingPackage.badge ? styles.recommended : ""
                }`}
              >
                {pricingPackage.badge ? (
                  <span className={styles.packageBadge}>{pricingPackage.badge}</span>
                ) : null}
                <div className={styles.packageHeader}>
                  <p>{pricingPackage.name}</p>
                  <h3>{pricingPackage.price}</h3>
                  <p>{pricingPackage.bestFor}</p>
                </div>

                <ul className={styles.featureList} role="list">
                  {pricingPackage.features.map((feature) => (
                    <li key={feature}>
                      <span aria-hidden="true">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className={styles.packageAction}>
                  <Link href="/contact" className={`button ${styles.packageButton}`}>
                    {pricingPackage.cta}
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <p className={styles.currencyNote}>
            Payment can be made in GHS equivalent based on the agreed project
            quote.
          </p>
        </div>
      </section>

      <section className={styles.addOns} aria-labelledby="addons-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Flexible Extras</p>
            <h2 id="addons-title">Optional add-ons</h2>
          </div>

          <div className={styles.addOnGrid}>
            {addOns.map((addOn) => (
              <article key={addOn} className={styles.addOnCard}>
                <h3>{addOn}</h3>
                <p>Available on request</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.factors} aria-labelledby="factors-title">
        <div className={`container ${styles.factorGrid}`}>
          <div>
            <p className="eyebrow">Scope Guide</p>
            <h2 id="factors-title">What affects the final price?</h2>
            <p>
              Each project is shaped around the actual work required, so the
              final quote reflects the structure, features, and support your
              business needs.
            </p>
          </div>

          <ul className={styles.factorList} role="list">
            {priceFactors.map((factor) => (
              <li key={factor}>
                <span aria-hidden="true">✓</span>
                {factor}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.payment} aria-labelledby="payment-title">
        <div className={`container ${styles.paymentPanel}`}>
          <p className="eyebrow">Payment Note</p>
          <h2 id="payment-title">How payment works</h2>
          <p>
            Before work begins, we agree on the scope, timeline, and total
            project cost. A deposit may be required to start the project, and
            the remaining balance is completed before final launch or handover.
          </p>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="pricing-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="pricing-cta-title">Not sure which package fits?</h2>
          <p>
            Tell us about your business and we&apos;ll recommend the right website
            package based on your goals, features, and budget.
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
