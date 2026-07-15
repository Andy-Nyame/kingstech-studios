import "./globals.css";

export const metadata = {
  title: "KINGSTECH STUDIOS",
  description: "Building the Future, Digitally.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
