const iconPaths = {
  phone: (
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.68 2.8a2 2 0 0 1-.45 2.11L8.07 9.9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.32 1.84.55 2.8.68A2 2 0 0 1 22 16.92Z" />
  ),
  whatsapp: (
    <>
      <path d="M20.5 11.6a8.5 8.5 0 0 1-12.6 7.45L3 20.5l1.42-4.72A8.5 8.5 0 1 1 20.5 11.6Z" />
      <path d="M8.3 7.8c.25-.55.5-.56.75-.57h.64c.2 0 .43.08.54.38l.78 1.88c.1.27.05.48-.12.7l-.61.7c-.2.2-.16.4-.02.62a7.4 7.4 0 0 0 3.27 2.85c.3.14.48.13.66-.08l.86-1.06c.2-.23.4-.18.66-.09l1.8.85c.28.14.47.2.54.33.07.12.07.72-.18 1.4-.25.68-1.47 1.3-2.03 1.38-.52.08-1.18.12-1.9-.1-.44-.14-1-.33-1.73-.65-3.04-1.32-5.03-4.4-5.18-4.61-.15-.2-1.24-1.65-1.24-3.15 0-.8.42-1.18.57-1.34.15-.16.33-.2.44-.2" />
    </>
  ),
  email: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </>
  ),
  github: (
    <>
      <path d="M15 21v-3.6a3.3 3.3 0 0 0-.9-2.55c3-.34 6.15-1.47 6.15-6.7a5.2 5.2 0 0 0-1.4-3.65 4.9 4.9 0 0 0-.13-3.6s-1.1-.36-3.72 1.4a12.7 12.7 0 0 0-6 0C6.38.54 5.27.9 5.27.9a4.9 4.9 0 0 0-.13 3.6 5.2 5.2 0 0 0-1.39 3.65c0 5.22 3.15 6.36 6.15 6.7A3.3 3.3 0 0 0 9 17.4V21" />
      <path d="M9 18.5c-3 .9-3-1.5-4.2-2" />
    </>
  ),
  youtube: (
    <>
      <rect x="2.5" y="6" width="19" height="12" rx="4" />
      <path d="m10 9 5 3-5 3V9Z" fill="currentColor" stroke="none" />
    </>
  ),
};

export default function Icon({ name, size = 20, className = "" }) {
  const paths = iconPaths[name];

  if (!paths) {
    return null;
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {paths}
    </svg>
  );
}
