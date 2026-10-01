import type { Metadata } from "next";
import { Cairo, Inter, Fira_Code } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";
import { PwaRegister } from "@/components/providers/PwaRegister";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  variable: "--font-cairo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira",
  display: "swap",
});

export const metadata: Metadata = {
  title: "منهج البرمجة والذكاء الاصطناعي ثانيه بكالوريا — الصف الثاني الثانوي | م/ عمر محمود",
  description: "منصة تعليمية وتفاعلية متكاملة لمنهج البرمجة والذكاء الاصطناعي للصف الثاني الثانوي - الوحدة الأولى (تكنولوجيا المعلومات والمجتمع) إشراف م/ عمر محمود 01012306019",
  manifest: "/manifest.json",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      suppressHydrationWarning
      className={`${cairo.variable} ${inter.variable} ${firaCode.variable} light h-full antialiased`}
    >
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0f172a" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="stylesheet" href="/fontawesome/css/all.min.css" />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased select-none">
        <AppProviders>
          {children}
          <PwaRegister />
        </AppProviders>
        <Analytics />
      </body>
    </html>
  );
}

