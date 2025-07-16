"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional: If using lucide icons

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-extrabold tracking-wide text-sky-400">
            KB
          </div>

          {/* Center brand */}
          <div className="hidden md:block text-lg font-bold tracking-wider">
            KARIM BUKSH
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6 text-sm font-medium">
            {["Home", "About", "Skills", "Projects", "Contact", "Portfolio"].map((item) => (
              <a
                key={item}
                href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
                className="hover:text-sky-400 transition"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="focus:outline-none">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 pt-2 space-y-2">
          {["Home", "About", "Skills", "Projects", "Contact", "Portfolio"].map((item) => (
            <a
              key={item}
              href={`/${item.toLowerCase() === "home" ? "" : item.toLowerCase()}`}
              className="block text-sm font-medium hover:text-sky-400 transition text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
