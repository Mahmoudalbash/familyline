import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/components/LanguageContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Family Line | فاميلي لاين - إكسسوارات ومكياج بالجملة",
  description: "الوجهة الأولى للإكسسوارات، المكياج، الهدايا، العطورات والأكواب بالجملة في السوق السوري. جودة عالية وأسعار منافسة.",
  keywords: ["جملة", "إكسسوارات", "مكياج", "هدايا", "عطورات", "أكواب", "سوريا", "دمشق", "Family Line", "Wholesale", "Accessories"],
  authors: [{ name: "Family Line" }],
  openGraph: {
    title: "Family Line | فاميلي لاين - التميز في عالم الجمال",
    description: "أفضل خيارات الجملة من المكياج، والإكسسوارات، والهدايا في سوريا بتصاميم عصرية وأسعار منافسة.",
    type: "website",
    locale: "ar_SY",
    url: "https://familyline.site",
    siteName: "Family Line",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Family Line Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Family Line | فاميلي لاين",
    description: "الوجهة الأولى للإكسسوارات والمكياج والهدايا بالجملة في السوق السوري.",
    images: ["/logo.png"],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-brand min-h-screen flex flex-col font-sans overflow-x-hidden`}
      >
        <LanguageProvider>
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
          <FloatingWhatsApp />
        </LanguageProvider>
      </body>
    </html>
  );
}
