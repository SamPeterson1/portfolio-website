"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen w-full px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
      {/* Header */}
      <section className="text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-400 mb-3">
          Projects
        </h1>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A collection of personal projects showcasing my work in
          systems programming, embedded development, and software engineering.
        </p>
      </section>

      {/* Projects Grid */}
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="bg-white/5 backdrop-blur-md border border-purple-800/40 hover:border-purple-600/60 rounded-xl shadow-lg hover:scale-[1.03] transition-transform overflow-hidden"
          >
            <Link href={`/projects/${project.slug}`} className="block p-4">
              {project.thumbnail && (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4 object-cover"
                />
              )}
              <h2 className="text-xl font-semibold text-purple-300 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-300 mb-3">{project.description}</p>

              {/* 🔹 Technologies Badges */}
              {project.skills && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-purple-800/70 px-2 py-1 rounded-full text-xs text-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
