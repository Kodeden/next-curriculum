import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KodeDen Curriculum",
  description:
    "HTML, CSS, JS, React, TS, Next, Node, Express, MongoDB and beyond",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} prose mx-auto my-8`}>
        {children}
      </body>
    </html>
  );
}
