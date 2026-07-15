"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import styles from "./Header.module.css";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const desktopQuery = window.matchMedia("(min-width: 56.25rem)");
    const focusableElements = mobileMenuRef.current?.querySelectorAll("a[href]");
    const firstFocusable = focusableElements?.[0];
    const lastFocusable = focusableElements?.[focusableElements.length - 1];

    document.body.style.overflow = "hidden";
    firstFocusable?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !firstFocusable || !lastFocusable) {
        return;
      }

      if (event.shiftKey && document.activeElement === firstFocusable) {
        event.preventDefault();
        lastFocusable.focus();
      } else if (!event.shiftKey && document.activeElement === lastFocusable) {
        event.preventDefault();
        firstFocusable.focus();
      }
    }

    function handleDesktopChange(event) {
      if (event.matches) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setIsMenuOpen(false);
  }

  function renderNavigationLink({ label, href }, mobile = false) {
    const isActive = pathname === href;

    return (
      <Link
        key={href}
        href={href}
        className={`${styles.navLink} ${mobile ? styles.mobileNavLink : ""} ${
          isActive ? styles.active : ""
        }`}
        aria-current={isActive ? "page" : undefined}
        onClick={mobile ? closeMenu : undefined}
      >
        {label}
      </Link>
    );
  }

  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="KINGSTECH STUDIOS home">
          <Image
            src="/logos/kingstech-crown.png"
            alt=""
            width={1023}
            height={1021}
            sizes="(max-width: 26rem) 80px, (max-width: 56.249rem) 84px, 100px"
            className={styles.brandImage}
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {navigationLinks.map((link) => renderNavigationLink(link))}
        </nav>

        <Link href="/contact" className={`button button-primary ${styles.desktopCta}`}>
          Get Started
        </Link>

        <button
          ref={menuButtonRef}
          type="button"
          className={styles.menuButton}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className={styles.menuIcon} data-open={isMenuOpen} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className={styles.mobilePanel}>
          <nav
            id="mobile-navigation"
            ref={mobileMenuRef}
            className={styles.mobileNav}
            aria-label="Mobile navigation"
          >
            {navigationLinks.map((link) => renderNavigationLink(link, true))}
            <Link
              href="/contact"
              className={`button button-primary ${styles.mobileCta}`}
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
