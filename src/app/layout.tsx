import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import Header from "@/components/Header";
import ConsentBanner from "@/components/ConsentBanner";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import WhatsAppButton from "@/components/WhatsAppButton";
import { site } from "@/content/site";
import { businessSchema } from "@/lib/schema";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const display = Space_Grotesk({
  variable: "--font-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.homeTitle, template: `%s | ${site.shortName}` },
  description: site.description,
  openGraph: {
    siteName: site.name,
    locale: "de_DE",
    type: "website",
    images: [{ url: "/images/jan-bruchwalski.webp", width: 1920, height: 1440 }],
  },
  // Nach Einrichtung der Google Search Console / Bing Webmaster Tools den Code hier eintragen:
  // verification: { google: "…", other: { "msvalidate.01": "…" } },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="de" className={`${geistSans.variable} ${display.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <JsonLd data={businessSchema} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <WhatsAppButton />
        <ConsentBanner />
      </body>
    </html>
  );
}
