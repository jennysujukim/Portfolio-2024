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
  title: "Jenny Kim - UIUX Engineer",
  description: "Jenny Kim is a UIUX Engineer based in Vancouver.",
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
