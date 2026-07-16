import Image from "next/image";
import Link from "next/link";
import Icon from "@/components/ui/Icon";
import { siteConfig } from "@/constants/site";
import styles from "./Footer.module.css";

const contactIcons = {
  Phone: "phone",
  WhatsApp: "whatsapp",
  Email: "email",
};

const socialIcons = {
  GitHub: "github",
  YouTube: "youtube",
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.logoColumn}>
          <Link
            href="/"
            className={styles.logoLink}
            aria-label={`${siteConfig.name} home`}
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
          <p className={styles.tagline}>{siteConfig.tagline}</p>
        </div>

        <nav className={styles.navigation} aria-label="Footer navigation">
          <p className={styles.navigationTitle}>Navigate</p>
          <div className={styles.linkGrid}>
            {siteConfig.footerLinks.map(({ label, href }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
          </div>
        </nav>

        <div className={styles.information}>
          <section aria-labelledby="footer-contact-title">
            <p id="footer-contact-title" className={styles.navigationTitle}>
              Contact
            </p>
            <ul className={styles.contactList} role="list">
              {[siteConfig.phone, siteConfig.whatsapp, siteConfig.email].map(
                ({ label, value, href }) => (
                  <li key={label}>
                    <Icon
                      name={contactIcons[label]}
                      size={18}
                      className={styles.detailIcon}
                    />
                    <div className={styles.detailText}>
                      <span>{label}</span>
                      <a
                        href={href}
                        className={styles.informationLink}
                        aria-label={`${label}: ${value}`}
                        {...(label === "WhatsApp"
                          ? { target: "_blank", rel: "noopener noreferrer" }
                          : {})}
                      >
                        {value}
                      </a>
                    </div>
                  </li>
                ),
              )}
            </ul>
          </section>

          <section aria-labelledby="footer-hours-title">
            <p id="footer-hours-title" className={styles.navigationTitle}>
              Working Hours
            </p>
            <dl className={styles.hoursList}>
              {siteConfig.workingHours.map(({ days, hours }) => (
                <div key={days}>
                  <dt>
                    <Icon name="clock" size={18} className={styles.detailIcon} />
                    <span>{days}</span>
                  </dt>
                  <dd>{hours}</dd>
                </div>
              ))}
            </dl>
            <p className={styles.hoursNote}>{siteConfig.workingHoursNote}</p>
          </section>

          <section aria-labelledby="footer-social-title">
            <p id="footer-social-title" className={styles.navigationTitle}>
              Follow
            </p>
            <div className={styles.socialLinks}>
              {siteConfig.socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className={`${styles.informationLink} ${styles.socialLink}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon
                    name={socialIcons[label]}
                    size={18}
                    className={styles.detailIcon}
                  />
                  {label}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      <div className={`container ${styles.bottomBar}`}>
        <p>
          © {currentYear} {siteConfig.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
