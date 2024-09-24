import type { Metadata } from "next";
import { Figtree, Inconsolata } from 'next/font/google';
// components
import Footer from "./components/Footer";
// styles
import "./globals.scss";
import styles from "./rootLayout.module.scss";

const figtree = Figtree({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-figtree',
})

const inconsolata = Inconsolata({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inconsolata',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.seojeongkim.com'),
  title: "Jenny Kim — UIUX Engineer",
  description: "Jenny Kim, based in Vancouver, is a UI/UX Engineer specializing in crafting interactive web experiences, built on a strong foundation of design principles.",
  keywords: 'Vancouver UIUX Engineer, Vancouver Frontend Developer, Vancouver UIUX Designer, Vancouver Web Developer, Vancouver Web Designer, Vancouver Web Development, Vancouver Web Design, BCIT Web Developer, BCIT Web Designer, BCIT UIUX Designer, BCIT Web Design, BCIT Web Development, Vancouver Freelance Web Developer, Vancouver Freelance Web Designer, Vancouver Freelance Designer',
  openGraph: {
    title: 'Jenny Kim - UIUX Engineer',
    description: 'Jenny Kim, based in Vancouver, is a UI/UX Engineer specializing in crafting interactive web experiences, built on a strong foundation of design principles.',
    images: '/og-image.png',
    url: 'https://www.seojeongkim.com/',
    type: 'website',
    locale: 'en'
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${inconsolata.variable}`}>
        <main className={styles.main}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
