import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme_provider";
import Header from "@/components/header";
import { SITE } from "@/lib/site";
import StructuredData from "@/components/structured-data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.title}`,
  },
  description: SITE.description,
  authors: [{ name: SITE.author, url: SITE.url }],
  openGraph: {
    type: "website",
    title: SITE.title,
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.title,
    images: [{ url: new URL(SITE.defaultImage, SITE.url).toString() }],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE.title,
    description: SITE.description,
    images: [new URL(SITE.defaultImage, SITE.url).toString()],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <StructuredData
          data={{
            "@context": "https://schema.org",
            "@type": "Person",
            name: SITE.author,
            url: SITE.url,
          }}
        />
        <main className="max-w-7xl px-10 md:px-20 lg:px-32">
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </main>
      </body>
    </html>
  );
}
