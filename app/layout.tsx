import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter_Tight } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar/NavBar";
import Footer from "@/components/Footer/Footer";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument",
  display: "swap",
});

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://digitalheroesco.com"),
  title: {
    default: "Digital Heroes — Digital Product Studio",
    template: "%s | Digital Heroes",
  },
  description:
    "Digital Heroes is a full-service digital product studio specialising in scalable web design, full-stack development, mobile applications, and growth strategy for bold brands.",
  keywords: [
    "digital product studio",
    "web design",
    "full-stack development",
    "mobile apps",
    "growth strategy",
    "Digital Heroes",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "Digital Heroes — Digital Product Studio",
    description:
      "Scalable digital products for bold brands. Design · Development · Growth.",
    url: "https://digitalheroesco.com",
    siteName: "Digital Heroes",
    images: [
      {
        url: "/img/d26f95bf357fef198856c5dcb053b30e.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Heroes Studio Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Heroes — Digital Product Studio",
    description:
      "Scalable digital products for bold brands. Design · Development · Growth.",
    images: ["/img/d26f95bf357fef198856c5dcb053b30e.jpg"],
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
    <html lang="en" className="scroll-smooth">
      <body className={`${interTight.variable} ${instrumentSerif.variable} flex flex-col min-h-screen antialiased`}>
        {/* Skip to main content for keyboard accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[999] focus:px-6 focus:py-3 focus:bg-[var(--text)] focus:text-[var(--bg)] focus:rounded-full focus:font-bold focus:uppercase focus:tracking-widest focus:text-xs focus:no-underline focus:ring-2 focus:ring-offset-2 focus:ring-[var(--text)]"
        >
          Skip to content
        </a>
        
        <NavBar />
        
        <main id="main-content" className="flex-grow">
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}

