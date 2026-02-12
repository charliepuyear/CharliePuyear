import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NEXXUS eSports | Competitive Sim Racing",
  description:
    "NEXXUS eSports - Elite competitive sim racing team pushing the limits of virtual motorsport.",
  keywords: ["esports", "sim racing", "competitive gaming", "nexxus", "racing team"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
