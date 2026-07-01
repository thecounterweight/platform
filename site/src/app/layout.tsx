import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#09090b",
};

export const metadata: Metadata = {
  title: "The Counterweight",
  description:
    "An open-source platform and movement where communities invest together, build businesses, and govern themselves. One person, one voice.",
  manifest: "/manifest.json",
  openGraph: {
    title: "The Counterweight",
    description:
      "Communities investing together. Businesses built by the people they serve. A platform owned by its users.",
    type: "website",
    url: "https://thecounterweight.org",
    siteName: "The Counterweight",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Counterweight",
    description:
      "Communities investing together. A platform owned by its users.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "The Counterweight",
              url: "https://thecounterweight.org",
              description:
                "An open-source platform where communities invest together, build businesses, and govern themselves.",
              sameAs: [
                "https://github.com/thecounterweight/platform",
                "https://reddit.com/r/TheCounterweight",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
