import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "rsuite/dist/rsuite.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "XTraveller",
  description: "Book your vacation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
