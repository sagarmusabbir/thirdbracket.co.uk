import "./globals.css";
import localFont from "next/font/local";
import { ThemeScript } from "@thirdbracket/bracketui";
import Header from "../../components/Header";
import SiteFooter from "../../components/Footer";
import { Settings } from "../../lib/meta";
import { Metadata } from "next";
import { WebPage, WithContext } from "schema-dts";
import Script from "next/script";

const roboto = localFont({
  src: [
    {
      path: "./Roboto-Thin.ttf",
      weight: "100",
      style: "normal",
    },
    {
      path: "./Roboto-ExtraLight.ttf",
      weight: "200",
      style: "normal",
    },
    {
      path: "./Roboto-Light.ttf",
      weight: "300",
      style: "normal",
    },
    {
      path: "./Roboto-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Roboto-Medium.ttf",
      weight: "500",
      style: "italic",
    },
    {
      path: "./Roboto-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "./Roboto-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "./Roboto-ExtraBold.ttf",
      weight: "800",
      style: "normal",
    },
    {
      path: "./Roboto-Black.ttf",
      weight: "900",
      style: "normal",
    },
  ],
});

// import Header from "..npm run dev
// /../components/Header";

export const jsonLd: WithContext<WebPage> = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Third Bracket",

  url: "https://www.thirdbracket.co.uk/",
  description:
    "Step into Third Bracket Solutions, a UK-based modern web infrastructure development service born from the collective efforts of a group of nomads who conquered platforms like Upwork and Fiverr",

  isPartOf: {
    "@type": "WebSite",
    name: "Third Bracket Solutions",
    url: "https://www.thirdbracket.co.uk/",
  },
  publisher: {
    "@type": "Organization",
    name: "Third Bracket Solution",
    url: "https://www.thirdbracket.co.uk/",
    legalName: "Third Bracket Solution",
    sameAs: ["https://www.facebook.com/thirdbracket.co.uk"],
  },
};

const baseUrl = Settings.metadataBase;

export const metadata: Metadata = {
  title: Settings.title,
  metadataBase: new URL(baseUrl),
  description: Settings.description,
  keywords: Settings.keywords,
  openGraph: {
    type: Settings.openGraph.type,
    url: baseUrl,
    title: Settings.openGraph.title,
    description: Settings.openGraph.description,
    siteName: Settings.openGraph.siteName,
    images: Settings.openGraph.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  twitter: {
    card: Settings.twitter.card,
    title: Settings.twitter.title,
    description: Settings.twitter.description,
    site: Settings.twitter.site,
    images: Settings.twitter.images.map((image) => ({
      ...image,
      url: `${baseUrl}${image.url}`,
    })),
  },
  // verification: {
  //   google: Settings.verification.google,
  // },

  alternates: {
    canonical: baseUrl,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${roboto.className} antialiased dark:bg-primary-950 dark:text-white`}
      suppressHydrationWarning
    >
      <head>
        {/* Google Tag Manager - Head */}
        <Script
          id="gtm-head"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-5LLRMTFW');
            `,
          }}
        />
        <meta name="msvalidate.01" content="46803F5EEF01F535EF3999B5E1F48682" />
        <ThemeScript />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <meta
          name="facebook-domain-verification"
          content="jvzc8wivgbd7yp2malwzexmw1rj7rh"
        />
      </head>
      <body suppressHydrationWarning>
        {/* <MegaHeader /> */}
        {/* Google Tag Manager - Body */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5LLRMTFW"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        <main className="min-h-screen py-8 sm:py-12 md:py-16  bg-white dark:bg-black">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
