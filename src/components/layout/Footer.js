import Image from "next/image";
import Link from "next/link";
import styles from "./Footer.module.css";

const footerLinks = [
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logoColumn}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label="KINGSTECH STUDIOS home"
          >
            <Image
              src="/logos/favicon1.png"
              alt=""
              width={1267}
              height={202}
              sizes="(max-width: 48rem) 351px, (max-width: 64rem) 426px, 502px"
              className={styles.logo}
            />
          </Link>
          <p className={styles.tagline}>Building the Future, Digitally.</p>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          <p className={styles.navigationTitle}>Navigate</p>
          <div className={styles.linkGrid}>
            {footerLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
          </div>
        </nav>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>© {currentYear} KINGSTECH STUDIOS. All rights reserved.</p>
      </div>
    </footer>
  );
}
