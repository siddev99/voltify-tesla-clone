import type { Metadata } from "next";
import "./globals.css";
import { myFont } from "./_data/font/defaultfont";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Electric Cars, Solar & Clean Energy | Tesla",
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Tesla is accelerating the world's transition to sustainable energy with electric cars, solar and integrated renewable energy solutions for homes and businesses.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={myFont.variable}>{children}</body>
    </html>
  );
}
