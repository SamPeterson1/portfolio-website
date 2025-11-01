"use client";
import Link from "next/link";
import { Clock } from "lucide-react";

export default function ActivTracker() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-purple-950 to-purple-900 text-gray-100 p-8 text-center">
      {/* Icon */}
      <div className="flex items-center justify-center bg-purple-800/30 rounded-full p-4 mb-6 border border-purple-700/50">
        <Clock size={48} className="text-purple-300" />
      </div>

      {/* Headline */}
      <h1 className="text-4xl md:text-5xl font-bold text-purple-300 mb-4">
        ActivTracker
      </h1>

      {/* Subtext */}
      <p className="text-gray-300 max-w-2xl text-lg mb-6">
        This project page is currently under development. Check back soon for more information!
      </p>

      {/* Status Badge */}
      <span className="bg-purple-800/60 text-purple-200 text-sm px-4 py-2 rounded-full font-semibold tracking-wide">
        🚀 In Progress — Coming Soon
      </span>

      {/* Back Link */}
      <Link
        href="/projects"
        className="mt-8 text-purple-400 underline hover:text-purple-200 transition-colors"
      >
        ← Back to all projects
      </Link>
    </main>
  );
}
