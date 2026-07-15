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
        <div className={styles.brandColumn}>
          <Link href="/" className={styles.brand} aria-label="KINGSTECH STUDIOS home">
            <Image
              src="/logos/kingstech-crown.png"
              alt=""
              width={1023}
              height={1021}
              sizes="(max-width: 45rem) 144px, 176px"
              className={styles.brandImage}
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
