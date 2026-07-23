"use client";

import { useId, useState } from "react";
import Icon from "@/components/ui/Icon";
import { siteConfig } from "@/constants/site";
import styles from "./contact.module.css";

const initialFormValues = {
  fullName: "",
  businessName: "",
  email: "",
  phone: "",
  projectType: "",
  budgetRange: "",
  message: "",
};

const projectTypes = [
  "Business Website",
  "Portfolio Website",
  "E-Commerce Website",
  "Booking Website",
  "Custom Web Application",
  "Website Redesign",
  "Other",
];

const budgetRanges = [
  "Under $250",
  "$250 – $400",
  "$400 – $650",
  "$650+",
  "Not sure yet",
];

const contactOptions = [
  {
    title: "WhatsApp",
    description: "Chat directly with KINGSTECH STUDIOS about your project.",
    buttonLabel: "Open WhatsApp",
    href: siteConfig.whatsapp.href,
    icon: "whatsapp",
    external: true,
  },
  {
    title: "Phone",
    description:
      "Call during working hours to discuss your website or digital project.",
    buttonLabel: "Call Now",
    href: siteConfig.phone.href,
    icon: "phone",
  },
  {
    title: "Email",
    description: "Send project details, ideas, or questions by email.",
    buttonLabel: "Send Email",
    href: siteConfig.email.href,
    icon: "email",
  },
];

const socialLinks = siteConfig.socialLinks.filter(({ label }) =>
  ["GitHub", "YouTube"].includes(label),
);

const socialIcons = {
  GitHub: "github",
  YouTube: "youtube",
};

function buildMailtoLink(values) {
  const subject = `Project enquiry from ${values.fullName.trim()}`;
  const body = [
    "Hello KINGSTECH STUDIOS,",
    "",
    "I would like to discuss a project.",
    "",
    `Full name: ${values.fullName.trim()}`,
    `Business / brand name: ${values.businessName.trim() || "Not provided"}`,
    `Email address: ${values.email.trim() || "Not provided"}`,
    `Phone / WhatsApp number: ${values.phone.trim() || "Not provided"}`,
    `Project type: ${values.projectType}`,
    `Budget range: ${values.budgetRange || "Not sure yet"}`,
    "",
    "Message / project details:",
    values.message.trim(),
  ].join("\n");

  return `${siteConfig.email.href}?subject=${encodeURIComponent(
    subject,
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactPageClient() {
  const [formValues, setFormValues] = useState(initialFormValues);
  const [errors, setErrors] = useState({});
  const [statusMessage, setStatusMessage] = useState("");
  const formId = useId();

  function updateField(name, value) {
    setFormValues((currentValues) => ({
      ...currentValues,
      [name]: value,
    }));

    setErrors((currentErrors) => {
      if (!currentErrors[name] && !currentErrors.contact) {
        return currentErrors;
      }

      const nextErrors = { ...currentErrors };
      delete nextErrors[name];

      if (name === "email" || name === "phone") {
        delete nextErrors.contact;
      }

      return nextErrors;
    });
  }

  function validateForm() {
    const nextErrors = {};
    const email = formValues.email.trim();
    const phone = formValues.phone.trim();

    if (!formValues.fullName.trim()) {
      nextErrors.fullName = "Please enter your full name.";
    }

    if (!email && !phone) {
      nextErrors.contact =
        "Please enter either an email address or phone / WhatsApp number.";
    }

    if (email && !email.includes("@")) {
      nextErrors.email = "Please enter a valid email address.";
    }

    if (!formValues.projectType) {
      nextErrors.projectType = "Please select a project type.";
    }

    if (!formValues.message.trim()) {
      nextErrors.message = "Please enter your project details.";
    }

    return nextErrors;
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      setStatusMessage("");
      return;
    }

    window.location.href = buildMailtoLink(formValues);
    setStatusMessage(
      "Your email app should open with your project details ready to send.",
    );
  }

  return (
    <main className={styles.contactPage}>
      <section className={styles.hero} aria-labelledby="contact-hero-title">
        <div className={`container ${styles.heroGrid}`}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Contact</p>
            <h1 id="contact-hero-title">
              Let&apos;s talk about <span>your project</span>
            </h1>
            <p>
              Have a website, portfolio, booking system, or digital idea in
              mind? Contact KINGSTECH STUDIOS and let&apos;s discuss the best
              way to bring it online.
            </p>
            <div className={styles.heroActions}>
              <a href="#project-enquiry" className="button button-primary">
                Send a Message
                <span aria-hidden="true">→</span>
              </a>
              <a
                href={siteConfig.whatsapp.href}
                className="button button-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          <aside className={styles.heroCard} aria-label="Contact summary">
            <span aria-hidden="true">
              <Icon name="email" size={22} />
            </span>
            <p>Project enquiries</p>
            <strong>{siteConfig.email.value}</strong>
            <small>{siteConfig.workingHoursNote}</small>
          </aside>
        </div>
      </section>

      <section className={styles.options} aria-labelledby="contact-options-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Contact Options</p>
            <h2 id="contact-options-title">Choose the easiest way to reach us</h2>
          </div>

          <div className={styles.optionGrid}>
            {contactOptions.map((option) => (
              <article key={option.title} className={styles.optionCard}>
                <span className={styles.optionIcon} aria-hidden="true">
                  <Icon name={option.icon} size={22} />
                </span>
                <h3>{option.title}</h3>
                <p>{option.description}</p>
                <a
                  href={option.href}
                  className={`button ${styles.optionButton}`}
                  {...(option.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {option.buttonLabel}
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="project-enquiry"
        className={styles.formSection}
        aria-labelledby="contact-form-title"
      >
        <div className={`container ${styles.formGrid}`}>
          <div className={styles.formIntro}>
            <p className="eyebrow">Project Enquiry</p>
            <h2 id="contact-form-title">Send your project details</h2>
            <p>
              Share a few details about what you want to build. This helps us
              understand your business and recommend the right direction.
            </p>
            <p className={styles.formNote}>
              This form opens your email app with the project details ready to
              send.
            </p>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit} noValidate>
            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-full-name`}>Full name</label>
                <input
                  id={`${formId}-full-name`}
                  name="fullName"
                  type="text"
                  value={formValues.fullName}
                  onChange={(event) =>
                    updateField("fullName", event.target.value)
                  }
                  aria-invalid={errors.fullName ? "true" : "false"}
                  aria-describedby={
                    errors.fullName ? `${formId}-full-name-error` : undefined
                  }
                />
                {errors.fullName ? (
                  <p id={`${formId}-full-name-error`} className={styles.errorText}>
                    {errors.fullName}
                  </p>
                ) : null}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-business-name`}>
                  Business / brand name
                </label>
                <input
                  id={`${formId}-business-name`}
                  name="businessName"
                  type="text"
                  value={formValues.businessName}
                  onChange={(event) =>
                    updateField("businessName", event.target.value)
                  }
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-email`}>Email address</label>
                <input
                  id={`${formId}-email`}
                  name="email"
                  type="email"
                  value={formValues.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  aria-invalid={errors.email || errors.contact ? "true" : "false"}
                  aria-describedby={
                    errors.email
                      ? `${formId}-email-error`
                      : errors.contact
                        ? `${formId}-contact-error`
                        : undefined
                  }
                />
                {errors.email ? (
                  <p id={`${formId}-email-error`} className={styles.errorText}>
                    {errors.email}
                  </p>
                ) : null}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-phone`}>
                  Phone / WhatsApp number
                </label>
                <input
                  id={`${formId}-phone`}
                  name="phone"
                  type="tel"
                  value={formValues.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  aria-invalid={errors.contact ? "true" : "false"}
                  aria-describedby={
                    errors.contact ? `${formId}-contact-error` : undefined
                  }
                />
              </div>
            </div>
            {errors.contact ? (
              <p id={`${formId}-contact-error`} className={styles.errorText}>
                {errors.contact}
              </p>
            ) : null}

            <div className={styles.formRow}>
              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-project-type`}>Project type</label>
                <select
                  id={`${formId}-project-type`}
                  name="projectType"
                  value={formValues.projectType}
                  onChange={(event) =>
                    updateField("projectType", event.target.value)
                  }
                  aria-invalid={errors.projectType ? "true" : "false"}
                  aria-describedby={
                    errors.projectType
                      ? `${formId}-project-type-error`
                      : undefined
                  }
                >
                  <option value="">Select a project type</option>
                  {projectTypes.map((projectType) => (
                    <option key={projectType} value={projectType}>
                      {projectType}
                    </option>
                  ))}
                </select>
                {errors.projectType ? (
                  <p
                    id={`${formId}-project-type-error`}
                    className={styles.errorText}
                  >
                    {errors.projectType}
                  </p>
                ) : null}
              </div>

              <div className={styles.fieldGroup}>
                <label htmlFor={`${formId}-budget-range`}>Budget range</label>
                <select
                  id={`${formId}-budget-range`}
                  name="budgetRange"
                  value={formValues.budgetRange}
                  onChange={(event) =>
                    updateField("budgetRange", event.target.value)
                  }
                >
                  <option value="">Select a budget range</option>
                  {budgetRanges.map((budgetRange) => (
                    <option key={budgetRange} value={budgetRange}>
                      {budgetRange}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor={`${formId}-message`}>
                Message / project details
              </label>
              <textarea
                id={`${formId}-message`}
                name="message"
                rows="6"
                value={formValues.message}
                onChange={(event) => updateField("message", event.target.value)}
                aria-invalid={errors.message ? "true" : "false"}
                aria-describedby={
                  errors.message ? `${formId}-message-error` : undefined
                }
              />
              {errors.message ? (
                <p id={`${formId}-message-error`} className={styles.errorText}>
                  {errors.message}
                </p>
              ) : null}
            </div>

            {statusMessage ? (
              <p className={styles.statusMessage} role="status">
                {statusMessage}
              </p>
            ) : null}

            <button type="submit" className={`button ${styles.submitButton}`}>
              Send Project Enquiry
            </button>
          </form>
        </div>
      </section>

      <section className={styles.hours} aria-labelledby="working-hours-title">
        <div className={`container ${styles.hoursGrid}`}>
          <div>
            <p className="eyebrow">Availability</p>
            <h2 id="working-hours-title">Working hours</h2>
            <p>{siteConfig.workingHoursNote}</p>
          </div>

          <dl className={styles.hoursList}>
            {siteConfig.workingHours.map(({ days, hours }) => (
              <div key={days}>
                <dt>
                  <Icon name="clock" size={18} />
                  {days}
                </dt>
                <dd>{hours}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className={styles.online} aria-labelledby="online-title">
        <div className="container">
          <div className={styles.sectionHeader}>
            <p className="eyebrow">Online</p>
            <h2 id="online-title">Find KINGSTECH online</h2>
          </div>

          <div className={styles.onlineGrid}>
            {socialLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={styles.onlineCard}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden="true">
                  <Icon name={socialIcons[label]} size={22} />
                </span>
                <h3>{label}</h3>
                <p>Open {label}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta} aria-labelledby="contact-cta-title">
        <div className={`container ${styles.ctaPanel}`}>
          <p className={styles.ctaEyebrow}>Start a conversation</p>
          <h2 id="contact-cta-title">Ready to build your digital presence?</h2>
          <p>
            Let&apos;s create a professional website or digital system that
            helps your business look trusted and easier to reach online.
          </p>
          <a
            href={siteConfig.whatsapp.href}
            className={`button ${styles.ctaButton}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            Start the Conversation
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </section>
    </main>
  );
}
