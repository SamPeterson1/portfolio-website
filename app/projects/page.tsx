import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="h-full w-full p-8 flex flex-col gap-6">
      <h1 className="text-3xl font-bold mb-6 text-purple-300">Projects</h1>

      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <li
            key={project.slug}
            className="bg-white/10 backdrop-blur-md p-4 rounded-xl shadow hover:scale-105 transition-transform"
          >
            <Link href={`/projects/${project.slug}`} className="block">
              {project.thumbnail && (
                <Image
                  src={project.thumbnail}
                  alt={project.title}
                  width={400}
                  height={200}
                  className="rounded-lg mb-4"
                />
              )}
              <h2 className="text-purple-300 font-semibold text-xl">
                {project.title}
              </h2>
              <p className="text-gray-300">{project.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
