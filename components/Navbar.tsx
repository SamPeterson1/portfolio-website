"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Classes", href: "/classes" },
    { label: "Resume", href: "/resume" },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-black/40 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 sm:px-12 py-4 w-full">
        {/* Logo / Name */}
        <Link
          href="/"
          className="text-white font-bold text-2xl sm:text-2xl hover:text-purple-400 transition-colors"
        >
          Sam Peterson
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-10 text-lg">
          {navItems.map((item) => (
            <li key={item.href} className="relative group">
              <Link
                href={item.href}
                className="text-white font-medium transition-colors duration-300"
              >
                {item.label}
                {/* Animated underline expanding from center */}
                <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-purple-400 transition-all duration-300 origin-center -translate-x-1/2 group-hover:w-full"></span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Hamburger Icon */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg px-6 py-4 flex flex-col items-center space-y-4 border-t border-purple-800">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-white text-lg font-medium hover:text-purple-400 transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
