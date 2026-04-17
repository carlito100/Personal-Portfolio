// src/components/Navbar.js
import { useState, useEffect } from "react";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  // Optional: Update active state based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "certification", "contact"];
      const current = sections.find(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass = (id) =>
    `transition px-3 py-1 rounded-md text-sm font-medium ${
      activeSection === id
        ? "text-white font-bold"
        : "text-gray-400 hover:text-white hover:bg-white/5"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1E201E]/80 backdrop-blur-md border-b border-black/40 z-[100] shadow-lg">
      <div className="w-full px-8 py-4 flex justify-between items-center">
        
        <h1 className="text-white tracking-tight font-bold">
          Carl Andrei Ricafort
        </h1>

        <div className="flex gap-2">
            <a href="#home" className={linkClass("home")}>Home</a>
            <a href="#about" className={linkClass("about")}>About</a>
            <a href="#projects" className={linkClass("projects")}>Projects</a>
            <a href="#certification" className={linkClass("certification")}>Certifications</a>
            <a href="#contact" className={linkClass("contact")}>Contact</a>
        </div>
      </div>
    </nav>
  );
}