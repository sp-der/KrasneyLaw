import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Krasney Law | California Personal Injury Attorneys",
  description:
    "Premium website concept for Krasney Law, a California personal injury firm serving clients from San Bernardino and Rancho Cucamonga.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
