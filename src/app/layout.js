import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { siteConfig } from "@/constants/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: false,
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
  preload: false,
});

export const metadata = {
  title: siteConfig.name,
  description:
    "Premium web design, UI/UX, and web development for modern businesses.",
  icons: {
    icon: "/favicon.ico",
  },
};

const themeInitScript = `
(() => {
  try {
    const storedTheme = localStorage.getItem("kingstech-theme");
    const theme = storedTheme === "dark" ? "dark" : "light";
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  } catch {
    document.documentElement.dataset.theme = "light";
    document.documentElement.style.colorScheme = "light";
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable}`}
      suppressHydrationWarning
    >
      <body>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <div className="site-shell">
          <Header />
          <div className="site-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
