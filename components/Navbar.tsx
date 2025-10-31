import Link from "next/link";

export default function Navbar() {
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    { label: "Classes", href: "/classes" },
    { label: "Contact", href: "/contact" },
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

        {/* Navigation Links */}
        <ul className="flex gap-10 sm:gap-12 text-lg sm:text-lg">
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
      </nav>
    </header>
  );
}
