import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { BottomNavigation } from "@/components/BottomNavigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Accessibility Twin",
  description: "Making Cities Navigable for Everyone",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50 text-slate-900 antialiased`}>
        <div className="max-w-6xl mx-auto min-h-screen bg-white shadow-sm relative pb-20 overflow-x-hidden md:border-x md:border-slate-200">
          {children}
          <BottomNavigation />
        </div>
      </body>
    </html>
  );
}
