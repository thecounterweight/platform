import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Nav } from "@/components/Nav";
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
    "A review and discussion platform where every participant is a verified real person. Structurally protected from sale or capture. Trusted reviews, democratic governance, generous builder compensation.",
  manifest: "/manifest.json",
  openGraph: {
    title: "The Counterweight",
    description:
      "Every review you read might be fake. Every platform you join will eventually be sold. We're building the alternative.",
    type: "website",
    url: "https://thecounterweight.org",
    siteName: "The Counterweight",
  },
  twitter: {
    card: "summary_large_image",
    title: "The Counterweight",
    description:
      "Every review might be fake. Every platform gets sold. We're building the alternative.",
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
                "A review and discussion platform where every participant is a verified real person. Structurally protected from sale. Open-source.",
              sameAs: [
                "https://github.com/thecounterweight/platform",
                "https://reddit.com/r/TheCounterweight",
              ],
            }),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        <Nav />
        {children}
      </body>
    </html>
  );
}
