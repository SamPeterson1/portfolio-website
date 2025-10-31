import Link from "next/link";
import EcommerceDemo from "@/components/EcommerceDemo";

export default function EcommercePage() {
  return (
    <div className="min-h-screen bg-purplebrand-900 text-gray-100 p-10">
      <EcommerceDemo />
      <p className="mt-6 text-gray-300">
        Full-stack e-commerce platform with Stripe integration.
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
