import { Inter, Space_Grotesk } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

export const metadata = {
  title: "KINGSTECH STUDIOS",
  description:
    "Premium web design, UI/UX, and web development for modern businesses.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body>
        <div className="site-shell">
          <Header />
          <div className="site-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
