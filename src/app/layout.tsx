import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Outfit } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const displayFont = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Comfort Grooming | Pet Grooming in Pinson, AL",
  description:
    "Attentive pet grooming in Pinson, Alabama. Located at 4298 Main St. Call +1 (205) 623-7991 to discuss the right grooming option for your dog.",
  keywords: [
    "Comfort Grooming",
    "dog grooming Pinson AL",
    "pet groomer Pinson Alabama",
    "4298 Main St Pinson",
  ],
  openGraph: {
    title: "Comfort Grooming | Pet Grooming in Pinson, AL",
    description: "Attentive pet grooming located at 4298 Main St, Pinson, AL 35126. Call (205) 623-7991.",
    url: "https://comfort-grooming-premium-demo.vercel.app",
    siteName: "Comfort Grooming",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GroomingSalon",
    "name": "Comfort Grooming",
    "telephone": "+12056237991",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4298 Main St",
      "addressLocality": "Pinson",
      "addressRegion": "AL",
      "postalCode": "35126",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6865,
      "longitude": -86.6828
    }
  };

  return (
    <html lang="en" className={`${sansFont.variable} ${displayFont.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-warm-ivory text-stone-900 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
