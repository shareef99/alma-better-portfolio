import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shareef Portfolio",
  description: "A portfolio website for Nadeem Shareef",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} container`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
