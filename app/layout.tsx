import type { Metadata } from "next";
import { Cairo, Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { AppProviders } from "@/components/providers/AppProviders";

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
      className={`${cairo.variable} ${inter.variable} ${firaCode.variable} dark h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col antialiased select-none">
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
