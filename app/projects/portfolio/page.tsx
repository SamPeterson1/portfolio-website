import Link from "next/link";
import PortfolioHero from "@/components/PortfolioHero";
import PortfolioGallery from "@/components/PortfolioGallery";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-purplebrand-900 text-gray-100 p-10">
      <PortfolioHero />
      <PortfolioGallery />

      <p className="mt-6 text-gray-300">
        This project showcases my personal portfolio with a custom layout and
        interactive components.
      </p>

      <Link
        href="/projects"
        className="block mt-8 text-purple-400 underline hover:text-purple-200"
      >
        ← Back to all projects
      </Link>
    </div>
  );
}
