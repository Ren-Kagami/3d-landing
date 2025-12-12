import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "cyrillic"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://3dprintfarm.ru'),
  title: {
    default: "3D Print Farm - Профессиональная 3D-печать на заказ | PETG, PLA, ABS, Carbon",
    template: "%s | 3D Print Farm"
  },
  description: "Высокоточная 3D-печать из PETG, PLA, ABS и Carbon на современных FLSUN и FLASHFORGE. Быстрое изготовление прототипов и готовых изделий. Профессиональное качество, доступные цены. Нижегородская область, Арзамас.",
  keywords: [
    "3D печать на заказ",
    "3D принтер услуги",
    "печать PETG",
    "печать PLA", 
    "печать ABS",
    "печать Carbon",
    "FLSUN принтер",
    "FLASHFORGE",
    "3D прототипирование",
    "серийная 3D печать",
    "изготовление деталей",
    "3D моделирование",
    "3D печать Арзамас",
    "3D печать Нижегородская область"
  ],
  authors: [{ name: "3D Print Farm" }],
  creator: "3D Print Farm",
  publisher: "3D Print Farm",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://3dprintfarm.ru",
    siteName: "3D Print Farm",
    title: "3D Print Farm - Профессиональная 3D-печать на заказ",
    description: "Печатаем идеи в реальность с высочайшей точностью. Современное оборудование FLSUN и FLASHFORGE для качественной 3D-печати из PETG, PLA, ABS и Carbon.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3D Print Farm - Профессиональная 3D-печать",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Print Farm - Профессиональная 3D-печать",
    description: "Высокоточная 3D-печать на современном оборудовании FLSUN и FLASHFORGE",
    images: ["/twitter-image.jpg"],
  },
  alternates: {
    canonical: "https://3dprintfarm.ru",
  },
  category: "technology",
  other: {
    'format-detection': 'telephone=no',
  },
};

// Structured Data for Local Business
const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "3D Print Farm",
  "description": "Профессиональная 3D-печать на заказ из различных материалов: PETG, PLA, ABS, Carbon",
  "url": "https://3dprintfarm.ru",
  "telephone": "+7-910-006-16-71",
  "email": "vidiarz@mail.ru",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "улица Луначарского, 31",
    "addressLocality": "Арзамас",
    "addressRegion": "Нижегородская область",
    "addressCountry": "RU"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "55.3867",
    "longitude": "43.8150"
  },
  "openingHours": "Mo-Su 09:00-21:00",
  "serviceArea": {
    "@type": "Country",
    "name": "Russia"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "3D Печать услуги",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "3D печать из PETG",
          "description": "Высокопрочная печать из PETG пластика, устойчивая к влаге и химическим воздействиям"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "3D печать из PLA",
          "description": "Экологичная печать из PLA пластика, идеально подходит для макетов и декоративных изделий"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "3D печать из ABS", 
          "description": "Прочная печать из ABS пластика с высокой термостойкостью"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "3D печать из Carbon",
          "description": "Сверхпрочная печать с углеволокном для инженерных проектов"
        }
      }
    ]
  },
  "areaServed": {
    "@type": "City",
    "name": "Арзамас"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <head>
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#659497" />
        <meta name="msapplication-TileColor" content="#659497" />
        
        {/* Favicons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
