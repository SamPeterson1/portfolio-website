import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "My Portfolio",
  description: "Personal portfolio website built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gradient-to-b from-purplebrand-800 via-purplebrand-900 to-black text-gray-100 min-h-screen">
        {/* Animated Navbar */}
        <Navbar />

        {/* Page content: add top padding equal to navbar height */}
        <main className="pt-24 p-6">{children}</main>
      </body>
    </html>
  );
}
