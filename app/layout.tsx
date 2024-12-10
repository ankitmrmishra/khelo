import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

import { ClerkProvider } from "@clerk/nextjs";
import { dark, neobrutalism } from "@clerk/themes";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Khelo - Predict and Play",
  description:
    "Khelo is a leading prediction market app where users can make predictions, earn rewards, and join a vibrant community.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kheloyaha.vercel.app/",
    title: "Khelo - Predict and Play",
    description:
      "Khelo is a leading prediction market app where users can make predictions, earn rewards, and join a vibrant community.",
    images: [
      {
        url: "hhttps://kheloyaha.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Khelo - Predict and Play",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Khelo - Predict and Play",
    description:
      "Khelo is a leading prediction market app where users can make predictions, earn rewards, and join a vibrant community.",
    images: ["https://kheloyaha.vercel.app/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark, neobrutalism],
      }}
    >
      <html lang="en">
        <head></head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background dark flex justify-center align-middle items-center flex-col`}
        >
          <Navbar />

          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
