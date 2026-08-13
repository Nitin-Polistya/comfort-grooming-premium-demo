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
  title: "Comfort Grooming | Premium Pet Grooming in Pinson, AL",
  description:
    "Dedicated one-on-one pet grooming in Pinson, Alabama. Low-stress, calm care for dogs of all sizes. Call (205) 623-7991 to schedule.",
  keywords: [
    "Comfort Grooming",
    "dog grooming Pinson AL",
    "pet groomer Pinson Alabama",
    "Pinson dog salon",
    "one on one dog grooming",
  ],
  openGraph: {
    title: "Comfort Grooming | Dedicated Pet Care in Pinson, AL",
    description: "One-on-one pet grooming in a calm, low-stress environment. Call (205) 623-7991.",
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
    "image": "https://comfort-grooming-premium-demo.vercel.app/og-image.jpg",
    "telephone": "+12056237991",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "4289 Main St",
      "addressLocality": "Pinson",
      "addressRegion": "AL",
      "postalCode": "35126",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 33.6865,
      "longitude": -86.6828
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Tuesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "15:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Wednesday",
        "opens": "08:00",
        "closes": "14:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ]
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
