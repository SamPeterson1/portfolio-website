"use client";
import Link from "next/link";

const skillsData = {
  "Frontend": ["React", "Next.js", "Tailwind CSS", "HTML", "CSS", "TypeScript"],
  "Backend": ["Node.js", "Express", "GraphQL", "Prisma"],
  "Tools & Others": ["Git", "Docker", "Figma", "Vercel"],
};

export default function HomePage() {
  return (
    <main className="h-full w-full p-8 flex flex-col gap-6">
      
      {/* Hero + Navbar Buttons */}
      <section className="flex flex-col items-center text-center gap-4 flex-none">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-400">
          Sam Peterson
        </h1>
        <p className="text-gray-300 max-w-2xl text-lg md:text-xl">
          I build modern web applications with React & Next.js, focusing on clean UI, smooth interactions, and purple aesthetics.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link
            href="/resume.pdf"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-bold transition-colors"
          >
            Download Resume
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-semibold transition-colors"
          >
            View Projects
          </Link>
  
        </div>
      </section>

      {/* Two-column layout */}
      <section className="flex flex-1 w-full gap-12">
        {/* Skills Column */}
        <div className="flex-1 flex flex-col items-center pr-4 justify-between">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center flex-none">Skills</h2>
          <div className="flex-1 w-full flex flex-col gap-4 items-center justify-center">
            {Object.entries(skillsData).map(([section, skills], index) => (
              <div key={section} className="w-full max-w-lg">
                <h3 className="text-purple-200 font-semibold mb-2 text-center">{section}</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="bg-purple-800 px-3 py-1 rounded-full text-sm text-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                {index < Object.entries(skillsData).length - 1 && (
                  <hr className="border-t border-purple-700 my-2 opacity-50" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Work Experience Column */}
        <div className="flex-1 flex flex-col items-center pl-4 justify-between">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center flex-none">Work Experience</h2>
          <div className="flex-1 w-full flex flex-col gap-4 items-center justify-center">
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl w-full max-w-lg border-l border-t border-purple-800">
              <h3 className="text-xl font-semibold text-purple-200">
                Frontend Developer @ ExampleCorp
              </h3>
              <p className="text-gray-400 text-sm mb-2">Jan 2023 – Present</p>
              <p className="text-gray-300">
                Building responsive, performant web apps using Next.js, React, and TypeScript.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-md p-4 rounded-xl w-full max-w-lg border-l border-t border-purple-800">
              <h3 className="text-xl font-semibold text-purple-200">
                UI Developer @ StartupX
              </h3>
              <p className="text-gray-400 text-sm mb-2">Jun 2021 – Dec 2022</p>
              <p className="text-gray-300">
                Designed and implemented modern interfaces with Tailwind CSS and React.
              </p>
            </div>
          </div>
        </div>
      </section>
{/* Academic Info Footer (Clickable Card) */}
<Link
  href="/classes"
  className="group mt-8 w-full flex justify-center items-center"
>
  <div className="bg-white/5 hover:bg-white/10 transition-colors backdrop-blur-md p-5 rounded-xl flex flex-wrap justify-center items-center gap-3 max-w-5xl text-center cursor-pointer border border-purple-800/30 hover:border-purple-500/50">
    <p className="text-purple-200 font-bold text-lg">
      🎓 Georgia Institute of Technology
    </p>
    <span className="text-gray-400">|</span>
    <p className="text-gray-300 text-lg">
      <span className="font-semibold text-purple-300">B.Sc. Computer Science</span>
    </p>
    <span className="text-gray-400">|</span>
    <p className="text-gray-300 text-lg">
      Concentrations:{" "}
      <span className="text-purple-300 font-semibold">
        Systems & Architecture, Information Internetworks
      </span>
    </p>
    <span className="text-gray-400">|</span>
    <p className="text-gray-300 text-lg">
      Graduation: <span className="text-purple-300 font-semibold">May 2027</span>
    </p>
    <span className="text-gray-400">|</span>
    <p className="text-gray-300 text-lg">
      GPA: <span className="text-purple-300 font-semibold">4.0</span>
    </p>
  </div>
</Link>



    </main>
  );
}
