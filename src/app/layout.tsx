import type { Metadata } from "next";
import { Geist, Geist_Mono, Noto_Sans_KR } from "next/font/google";
import "./globals.css";
import AnimatedBackground from "./components/AnimatedBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const notoKR = Noto_Sans_KR({
  subsets: ["latin"],
  variable: "--font-kr",
  weight: ["300", "400", "500", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Taero | Portfolio",
  description: "Frontend developer portfolio built with Next.js",
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Taero | Portfolio",
    description: "Frontend developer portfolio built with Next.js",
    url: "/",
    siteName: "Taero Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Taero Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Taero | Portfolio",
    description: "Frontend developer portfolio built with Next.js",
    images: ["/og.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${notoKR.variable} antialiased`}
      >
        <AnimatedBackground />
        {children}
      </body>
    </html>
  );
}
