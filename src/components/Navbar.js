import { useState, useEffect } from "react";

const Logo = () => (
  <div className="flex items-center justify-center gap-3 group cursor-pointer" onClick={() => window.scrollTo(0,0)}>
    <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-[#697565] to-[#3a4237] shadow-[0_0_15px_rgba(105,117,101,0.3)] transition-transform duration-500 group-hover:scale-105 group-hover:shadow-[0_0_20px_rgba(105,117,101,0.5)]">
      <div className="absolute inset-[2px] rounded-lg bg-[#1a1c1a] flex items-center justify-center">
        <span className="font-mono font-bold text-lg tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-400">
          C<span className="text-[#697565]">R</span>
        </span>
      </div>
    </div>
    <span className="hidden sm:block font-sans font-semibold tracking-wide text-white text-sm opacity-90 group-hover:opacity-100 transition-opacity duration-300">
      Carl<span className="text-[#697565]">.</span>
    </span>
  </div>
);

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
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

  const navLinks = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "certification", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <nav 
        className={`fixed left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
          scrolled 
            ? "top-4 w-[95%] sm:w-[85%] max-w-5xl rounded-2xl bg-[#1a1c1a]/80 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)] py-3 px-6" 
            : "top-0 w-full rounded-none bg-[#1E201E]/50 backdrop-blur-md border-b border-white/5 shadow-sm py-6 px-8 sm:px-12 lg:px-32"
        }`}
      >
        <div className="w-full flex justify-between items-center relative">
          <Logo />

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a 
                key={link.id}
                href={`#${link.id}`} 
                className="relative group px-4 py-2 text-sm font-medium transition-all duration-300"
              >
                <span className={`relative z-10 transition-colors duration-300 ${activeSection === link.id ? "text-white" : "text-gray-400 group-hover:text-white"}`}>
                  {link.label}
                </span>
                
                {/* Active Indicator Background Pill */}
                {activeSection === link.id && (
                  <span className="absolute inset-0 bg-white/5 rounded-full z-0 pointer-events-none transition-all duration-500"></span>
                )}
                
                {/* Hover / Active Underline */}
                <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] bg-[#697565] transition-all duration-300 rounded-t-full ${
                  activeSection === link.id ? "w-6 opacity-100" : "w-0 opacity-0 group-hover:w-4 group-hover:opacity-50"
                }`}></span>
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className="flex flex-col gap-1.5 items-end justify-center w-5 h-5">
              <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-5 rotate-45 translate-y-[8px]" : "w-5"}`}></span>
              <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : "w-4"}`}></span>
              <span className={`block h-[2px] bg-white transition-all duration-300 ${mobileMenuOpen ? "w-5 -rotate-45 -translate-y-[8px]" : "w-3"}`}></span>
            </div>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[90] bg-[#1a1c1a]/95 backdrop-blur-xl transition-all duration-500 md:hidden flex flex-col justify-center items-center gap-8 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navLinks.map((link, index) => (
          <a
            key={link.id}
            href={`#${link.id}`}
            onClick={() => setMobileMenuOpen(false)}
            className={`text-2xl font-medium tracking-wide transition-all duration-500 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            } ${activeSection === link.id ? "text-white" : "text-gray-400 hover:text-white"}`}
            style={{ transitionDelay: `${index * 50}ms` }}
          >
            {link.label}
          </a>
        ))}
      </div>
    </>
  );
}