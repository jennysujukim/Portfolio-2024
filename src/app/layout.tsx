import type { Metadata } from "next";
import localFont from "next/font/local";
// components
import Sidebar from "./components/Sidebar";
// styles
import "./globals.scss";

const helveticaNeue = localFont({
  src: "./fonts/HelveticaNeue-Light.woff2",
  display: 'swap',
  variable: '--font-helveticaNeue',
  weight: "300 400 600",
})

export const metadata: Metadata = {
  title: "Jenny Kim - UIUX Engineer",
  description: "Jenny Kim is a UIUX Engineer based in Vancouver.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${helveticaNeue.variable}`}>
        <Sidebar />
        {children}
      </body>
    </html>
  );
}
