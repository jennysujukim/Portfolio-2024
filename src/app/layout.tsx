import type { Metadata } from "next";
import localFont from "next/font/local";
// styles
import "./globals.scss";
import styles from "./rootLayout.module.scss";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeue-Light.woff2",
  display: 'swap',
  variable: '--font-helveticaNeue',
  weight: "300 400 600 800",
})

export const metadata: Metadata = {
  title: "Jenny Kim - UIUX Engineer",
  description: "Jenny Kim is a UIUX Engineer based in Vancouver.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable}`}>
        <main className={styles.main}>
          {children}
        </main>
        <footer className={styles.footer}>
          <div className={styles.footer_texts}>
            <p>Currently in Vancouver, BC | 15 September 2024 | 6:53PM</p>
            <p>&copy;JENNY KIM 2024</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
