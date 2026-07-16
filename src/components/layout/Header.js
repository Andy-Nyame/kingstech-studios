"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { siteConfig } from "@/constants/site";
import styles from "./Header.module.css";

export default function Header() {
  const pathname = usePathname();
  const [openMenuPathname, setOpenMenuPathname] = useState(null);
  const isMenuOpen = openMenuPathname === pathname;
  const menuButtonRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    if (!isMenuOpen) {
      return undefined;
    }

    const previousOverflow = document.body.style.overflow;
    const desktopQuery = window.matchMedia("(min-width: 56.25rem)");
    const focusableElements = mobileMenuRef.current?.querySelectorAll(
      'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
    );
    const firstFocusable = focusableElements?.[0];
    const lastFocusable = focusableElements?.[focusableElements.length - 1];
    const focusFrame = window.requestAnimationFrame(() => firstFocusable?.focus());

    document.body.style.overflow = "hidden";

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setOpenMenuPathname(null);
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
        setOpenMenuPathname(null);
      }
    }

    function handleOutsidePointer(event) {
      const clickedMenu = mobileMenuRef.current?.contains(event.target);
      const clickedButton = menuButtonRef.current?.contains(event.target);

      if (!clickedMenu && !clickedButton) {
        setOpenMenuPathname(null);
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("pointerdown", handleOutsidePointer);
    desktopQuery.addEventListener("change", handleDesktopChange);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("pointerdown", handleOutsidePointer);
      desktopQuery.removeEventListener("change", handleDesktopChange);
    };
  }, [isMenuOpen]);

  function closeMenu() {
    setOpenMenuPathname(null);
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
        <Link
          href="/"
          className={styles.logoLink}
          aria-label={`${siteConfig.name} home`}
        >
          <Image
            src="/logos/favicon2.png"
            alt=""
            width={1267}
            height={202}
            sizes="(max-width: 48rem) 276px, (max-width: 64rem) 326px, 376px"
            className={styles.logo}
            priority
          />
        </Link>

        <nav className={styles.desktopNav} aria-label="Primary navigation">
          {siteConfig.navigation.map((link) => renderNavigationLink(link))}
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
          data-open={isMenuOpen}
          onClick={() =>
            setOpenMenuPathname((current) => (current === pathname ? null : pathname))
          }
        >
          <span className={styles.menuIcon} data-open={isMenuOpen} aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
        </button>
      </div>

      {isMenuOpen ? (
        <div className={styles.mobilePanel} data-open={isMenuOpen}>
          <nav
            id="mobile-navigation"
            ref={mobileMenuRef}
            className={styles.mobileNav}
            aria-label="Mobile navigation"
          >
            {siteConfig.navigation.map((link) => renderNavigationLink(link, true))}
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
