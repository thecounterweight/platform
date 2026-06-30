import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Counterweight",
  description:
    "An open-source platform and movement where communities invest together, build businesses, and govern themselves. One person, one voice.",
  openGraph: {
    title: "The Counterweight",
    description:
      "Communities investing together. Businesses built by the people they serve. A platform owned by its users.",
    type: "website",
    url: "https://thecounterweight.org",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.className} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-100">
        {children}
      </body>
    </html>
  );
}
