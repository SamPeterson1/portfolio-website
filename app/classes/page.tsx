"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type Class = {
  code: string;
  name: string;
  description?: string;
};

type ClassSection = {
  title: string;
  classes: Class[];
};

const classSections: ClassSection[] = [
  {
    title: "Core Computer Science",
    classes: [
      {
        code: "CS 1331",
        name: "Object-Oriented Programming",
        description: "Covers Java programming, classes, inheritance, and object-oriented design fundamentals.",
      },
      {
        code: "CS 1332",
        name: "Data Structures & Algorithms",
        description: "Essential data structures (lists, trees, graphs) and algorithmic analysis in Java.",
      },
      {
        code: "CS 3510",
        name: "Design & Analysis of Algorithms",
        description: "Advanced study of algorithmic design paradigms and computational complexity.",
      },
      {
        code: "CS 2340",
        name: "Objects & Design",
        description: "Team-based software engineering using Python + Django with UML, agile development, and design patterns.",
      },
    ],
  },
  {
    title: "Systems & Architecture",
    classes: [
      {
        code: "CS 2200",
        name: "Systems & Networks",
        description: "Covers computer systems organization, networking, and operating systems fundamentals.",
      },
      {
        code: "CS 2110",
        name: "Computer Organization & Programming",
        description: "Introduces computer architecture, C programming, assembly, and low-level systems programming concepts.",
      },
    ],
  },
  {
    title: "Information Systems",
    classes: [
      {
        code: "CS 4400",
        name: "Database Systems",
        description: "Covers relational database concepts, schema design, SQL, and database applications.",
      },
    ],
  },
  {
    title: "Mathematics & Statistics",
    classes: [
      {
        code: "MATH 1554",
        name: "Linear Algebra",
        description: "Matrix operations, vector spaces, linear transformations, and eigenvalues.",
      },
      {
        code: "MATH 2551",
        name: "Multivariable Calculus",
        description: "Covers partial derivatives, multiple integrals, and vector calculus.",
      },
      {
        code: "CS 2050",
        name: "Discrete Mathematics",
        description: "Logic, proofs, combinatorics, set theory, and graph theory for CS applications.",
      },
      {
        code: "ISYE 3770",
        name: "Statistics & Applications",
        description: "Covers probability, random variables, hypothesis testing, and regression.",
      },
    ],
  },
];


function ClassCard({
  course,
  onClick,
  expanded,
}: {
  course: Class;
  onClick: () => void;
  expanded: boolean;
}) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    if (contentRef.current) {
      setHeight(expanded ? `${contentRef.current.scrollHeight}px` : "0px");
    }
  }, [expanded]);

  return (
    <div
      className="self-start bg-white/5 backdrop-blur-md p-4 rounded-xl border border-purple-800/40 hover:border-purple-600/60 transition-all w-full sm:w-[48%] lg:w-[31%] cursor-pointer"
      onClick={onClick}
    >
      <h3 className="text-sm md:text-base font-semibold text-purple-200 leading-snug">
        {course.name}
      </h3>
      {course.description && (
        <div
          ref={contentRef}
          style={{ height }}
          className="overflow-hidden transition-[height] duration-300 ease-out mt-1"
        >
          <p className="text-purple-400 font-semibold text-xs">{course.code}</p>
          <p className="text-gray-300 text-sm">{course.description}</p>
        </div>
      )}
    </div>
  );
}

export default function ClassesPage() {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>(
    {}
  );

  const toggleSection = (title: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <main className="min-h-screen w-full px-2 sm:px-4 md:px-6 py-6 flex flex-col gap-8">
      {/* Header */}
      <section className="flex flex-col items-center text-center gap-4">
        <h1 className="text-5xl md:text-6xl font-bold text-purple-400">Classes</h1>
        <p className="text-gray-300 max-w-3xl text-lg md:text-xl">
          A list of some key classes I've taken so far. You may also download my unofficial transcript below.
        </p>

        {/* Download Button (now triggers download) */}
        <a
          href="/unofficial_transcript.pdf"
          download="Sam_Peterson_Transcript.pdf"
          className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-bold transition-colors mt-2"
        >
          Download Unofficial Transcript
        </a>
      </section>

      {/* Sections */}
      <section className="flex flex-col gap-10 items-center w-full">
        {classSections.map((section) => {
          const isExpanded = !!expandedSections[section.title];
          const handleClick = () => toggleSection(section.title);

          return (
            <div key={section.title} className="w-full max-w-7xl">
              {/* Section Header */}
              <div
                className="flex justify-between items-center cursor-pointer mb-2 border-b border-purple-700 pb-1"
                onClick={handleClick}
              >
                <h2 className="text-2xl font-semibold text-purple-300">
                  {section.title}
                </h2>
                {isExpanded ? (
                  <ChevronUp size={20} className="text-purple-400" />
                ) : (
                  <ChevronDown size={20} className="text-purple-400" />
                )}
              </div>

              {/* Class Cards */}
              <div className="flex flex-wrap items-start justify-start gap-4">
                {section.classes.map((course) => (
                  <ClassCard
                    key={course.code}
                    course={course}
                    onClick={handleClick} // click any card toggles the section
                    expanded={isExpanded}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </section>
    </main>
  );
}
