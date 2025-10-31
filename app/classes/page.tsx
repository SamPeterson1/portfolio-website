"use client";
import { useState, useRef, useEffect } from "react";
import Link from "next/link";
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
        description:
          "Covers Java programming, classes, inheritance, and object-oriented design fundamentals.",
      },
      {
        code: "CS 1332",
        name: "Data Structures and Algorithms",
        description:
          "Covers essential data structures (lists, trees, graphs) and their algorithmic analysis.",
      },
      {
        code: "CS 2340",
        name: "Object-Oriented Software Development",
        description:
          "Team-based software engineering with UML design and agile development.",
      },
    ],
  },
  {
    title: "Systems & Architecture",
    classes: [
      {
        code: "CS 4001",
        name: "Systems Programming",
        description:
          "C programming, process control, memory management, and operating system concepts.",
      },
    ],
  },
  {
    title: "Advanced Topics & Electives",
    classes: [
      {
        code: "CS 4641",
        name: "Machine Learning",
        description:
          "Introduction to supervised and unsupervised learning algorithms and their applications.",
      },
      {
        code: "CS 4400",
        name: "Database Systems",
        description:
          "Covers relational databases, SQL, and schema design.",
      },
      {
        code: "CS 4495",
        name: "Software Engineering",
        description:
          "Focuses on scalable design patterns and enterprise-grade project structure.",
      },
    ],
  },
  {
    title: "Math & Statistics",
    classes: [
      {
        code: "CS 2050",
        name: "Discrete Mathematics",
        description:
          "Foundations of logic, set theory, combinatorics, and proofs.",
      },
      {
        code: "ISYE 2027",
        name: "Statistics for Engineers",
        description:
          "Fundamentals of probability and statistics for data analysis and modeling.",
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
          Here's a list of all the classes I've taken at Georgia Tech. You can also
          download my unofficial transcript below.
        </p>
        <Link
          href="/unofficial_transcript.pdf"
          className="px-6 py-3 bg-purple-700 hover:bg-purple-600 rounded-lg text-white font-bold transition-colors mt-2"
        >
          Download Unofficial Transcript
        </Link>
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
