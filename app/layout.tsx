import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";
import Analytics from "../components/Analytics";

export const metadata = {
  title: "Sam Peterson",
  description: "Personal portfolio website built with Next.js",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-X1952M7X12"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-X1952M7X12', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
      </head>
      <body className="bg-gradient-to-b from-purplebrand-800 via-purplebrand-900 to-black text-gray-100 min-h-screen">
        <Analytics /> {/* Client component handles SPA page view tracking */}
        {/* Animated Navbar */}
        <Navbar />

        {/* Page content: add top padding equal to navbar height */}
        <main className="pt-24 p-6">{children}</main>
      </body>
    </html>
  );
}
