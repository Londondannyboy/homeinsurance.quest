import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Home Insurance - Compare Home Insurance Quotes Online",
  description: "Find the best home insurance deals for buildings and contents cover. Compare quotes from top UK insurers and protect your home.",
  keywords: ["home insurance", "buildings insurance", "contents insurance", "home insurance quotes", "UK home insurance"],
  openGraph: {
    title: "Home Insurance - Compare Home Insurance Quotes Online",
    description: "Find the best home insurance deals for buildings and contents cover. Compare quotes from top UK insurers and protect your home.",
    url: "https://homeinsurance.quest",
    siteName: "Home Insurance",
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Insurance - Compare Home Insurance Quotes Online",
    description: "Find the best home insurance deals for buildings and contents cover. Compare quotes from top UK insurers and protect your home.",
  },
  alternates: { canonical: "https://homeinsurance.quest" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Home Insurance",
              url: "https://homeinsurance.quest",
              description: "Find the best home insurance deals for buildings and contents cover. Compare quotes from top UK insurers and protect your home.",
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
