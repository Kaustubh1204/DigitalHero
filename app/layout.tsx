import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Usualdev — Digital Product Studio | Design, Development & Growth",
  description:
    "Usualdev is a full-service digital product studio specialising in scalable web design, full-stack development, mobile applications, and growth strategy for bold brands.",
  keywords: [
    "digital product studio",
    "web design",
    "full-stack development",
    "mobile apps",
    "growth strategy",
    "Usualdev",
  ],
  openGraph: {
    title: "Usualdev — Digital Product Studio",
    description:
      "Scalable digital products for bold brands. Design · Development · Growth.",
    url: "https://usualdev.online",
    siteName: "Usualdev",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8f9f4" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
