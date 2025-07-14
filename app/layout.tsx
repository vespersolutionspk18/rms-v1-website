import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "RMS Technologies",
  description: "A leading provider of innovative solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased tracking-tight leading-tight`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
