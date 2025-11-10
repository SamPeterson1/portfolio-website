"use client";
import Link from "next/link";

const skillsData = {
  "Programming Languages": ["C/C++", "Rust", "Java", "SQL", "Python", "HTML", "CSS", "JS", "Verilog"],
  "Dev Tools & Frameworks": ["Git", "Jira", "Confluence", "GDB", "OpenOCD", "Visual Studio", "Eclipse", "Node.js", "GNU", "Linux", "OpenGL"],
  "Embedded Systems": ["STM32 HAL", "SPI", "I2C", "UART", "PWM", "DMA", "JTAG", "Device Drivers", "FreeRTOS", "ARM"],
  "Other": ["HTTP", "TCP/IP", "UDP", "RESTfulAPI", "Machine Learning", "Computer Architecture", "FPGA"],
};

// 🔹 Unified Experience Data (includes skills)
const experienceData = [
  {
    title: "Lead GNC SWE @ Ramblin' Rocket Club",
    date: "Aug 2024 – Present",
    desc: "Developed bare-metal flight software and device drivers using FreeRTOS and the STM32 HAL on a custom avionics stack.",
    skills: ["C/C++", "STM32 HAL", "FreeRTOS", "Device Drivers", "SPI", "I2C", "UART", "PWM", "DMA", "ARM", "JTAG", "Git", "GDB", "OpenOCD", "Visual Studio"],
  },
  {
    title: "Warehouse Management System (WMS) Developer @ Quality Bicycle Products",
    date: "May 2025 – Present",
    desc: "Led redesign of external integrations (SAP, labor management, cartonization, etc.) and implemented REST API integrations for cartonization and paid labor incentives",
    skills: ["SQL", "HTML", "CSS", "JS", "RESTful API", "HTTP", "TCP/IP", "Git", "Agile/Scrum", "Jira", "Confluence", ],
  },
  {
    title: "Data Scientist @ Quality Bicycle Products",
    date: "Jun 2024 – Aug 2024",
    desc: "Trained an XGBoost machine learning model to forecast daily warehouse shipments up to 12 weeks ahead with an average of 5% error, replacing legacy forecasting methods and improving employee scheduling efficiency.",
    skills: ["Python", "Machine Learning", "XGBoost", "SQL", "Pandas", "Scikit-Learn"],
  },
];

export default function HomePage() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      {/* Hero + Buttons */}
      <section className="flex flex-col items-center text-center gap-4 w-full max-w-4xl mt-10">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-400">Sam Peterson</h1>
        <p className="text-gray-300 max-w-3xl text-lg md:text-xl">
          I am a student with a passion for low-level systems programming and software engineering.
        </p>
        <div className="flex flex-row sm:flex-row gap-4 mt-2">
          <Link
            href="/resume"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-bold transition-colors"
          >
            Resume
          </Link>
          <Link
            href="/projects"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-semibold transition-colors"
          >
            Projects
          </Link>
          <Link
            href="https://www.github.com/sampeterson1"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-semibold transition-colors"
          >
            GitHub
          </Link>
          <Link
            href="https://www.linkedin.com/in/samgatech"
            className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-semibold transition-colors"
          >
            LinkedIn
          </Link>
        </div>
      </section>

      {/* Skills + Work Experience */}
      <section className="flex flex-col lg:flex-row w-full max-w-7xl mt-12 gap-12">
        {/* Skills Column */}
        <div className="flex-1 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center">Skills</h2>
          <div className="flex flex-col gap-4 w-full max-w-lg">
            {Object.entries(skillsData).map(([section, skills], index) => (
              <div key={section} className="w-full">
                <h3 className="text-purple-200 font-semibold mb-2">{section}</h3>
                <div className="flex flex-wrap justify-start gap-2">
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
        <div className="flex-1 flex flex-col items-center gap-4">
          <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center">Experience</h2>
          <div className="flex flex-col gap-4 w-full max-w-lg">
            {experienceData.map(({ title, date, desc, skills }) => (
              <div
                key={title}
                className="bg-white/5 backdrop-blur-md p-4 rounded-xl border-l border-t border-purple-800"
              >
                <h3 className="text-xl font-semibold text-purple-200">{title}</h3>
                <p className="text-gray-400 text-sm mb-2">{date}</p>
                <p className="text-gray-300 mb-3">{desc}</p>

                {/* Skill badges under each job */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map(skill => (
                    <span
                      key={skill}
                      className="bg-purple-800/70 px-2 py-1 rounded-full text-xs text-gray-100"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Info Footer (Clickable Card) */}
      <Link
        href="/classes"
        className="group mt-12 w-full flex justify-center items-center"
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