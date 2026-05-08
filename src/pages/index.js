import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import AboutContent from "./about";
import ProjectsContent from "./projects";
import CertificationContent from "./certification";
import ContactContent from "./contact";
import Preloader from "../components/Preloader";

export default function Home() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [titleIndex, setTitleIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [loading, setLoading] = useState(true);
  const [heroPhase, setHeroPhase] = useState("hidden"); // hidden, name1, name2, ready
  const titles = ["Front-End Developer", "IT Specialist"];

  useEffect(() => {
    if (!loading) {
      // Sequence for Hero text entrance
      const t1 = setTimeout(() => setHeroPhase("name1"), 200);
      const t2 = setTimeout(() => setHeroPhase("name2"), 600);
      const t3 = setTimeout(() => setHeroPhase("ready"), 1200);
      return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
    }
  }, [loading]);

  useEffect(() => {
    if (heroPhase === "ready") {
      const interval = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setTitleIndex((prev) => (prev + 1) % titles.length);
          setIsAnimating(false);
        }, 500);
      }, 2000);
      return () => clearInterval(interval);
    }
  }, [heroPhase]);

  return (
    <>
      {loading && <Preloader onComplete={() => setLoading(false)} />}
      <div
        className={`min-h-screen text-white relative font-sans selection:bg-[#697565]/30 transition-opacity duration-500 ${loading ? "opacity-0 invisible h-0 overflow-hidden" : "opacity-100 visible"
          }`}
        onMouseMove={(e) => setPos({ x: e.clientX, y: e.clientY })}
        style={{
          background: `radial-gradient(800px circle at ${pos.x}px ${pos.y}px, rgba(105, 117, 101, 0.08), transparent 80%), #050505`,
        }}
      >
        <Navbar />

      {/* HERO SECTION */}
      <main id="home" className="relative flex flex-col lg:flex-row min-h-screen border-b border-white/5">
        <div className="w-full lg:w-[60%] flex items-center z-20 px-6 sm:px-12 lg:pl-32 py-20 lg:py-24 relative">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 lg:w-96 lg:h-96 bg-[#697565]/10 blur-[120px] lg:blur-[150px] pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <h1 className="text-5xl sm:text-7xl lg:text-[9rem] font-bold tracking-tighter mb-4 lg:mb-6 leading-[0.85] lg:leading-[0.8] overflow-hidden">
              <div className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${heroPhase !== "hidden" ? "translate-x-0 opacity-100" : "translate-x-[50%] opacity-0"}`}>
                Carl Andrei
              </div>
              <div className={`text-[#697565] drop-shadow-md transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-300 ${heroPhase === "name2" || heroPhase === "ready" ? "translate-x-0 opacity-100" : "translate-x-[50%] opacity-0"}`}>
                Ricafort
              </div>
            </h1>

            <div className={`flex items-center gap-4 mb-8 lg:mb-12 h-8 overflow-hidden transition-all duration-1000 delay-700 ${heroPhase === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <span className="w-8 lg:w-16 h-[2px] bg-[#697565]"></span>
              <div className="relative h-full overflow-hidden">
                <h2 className={`text-xs sm:text-lg lg:text-xl font-mono tracking-[0.3em] uppercase text-gray-300 font-medium transition-all duration-700 ease-out ${isAnimating ? "translate-y-[-100%] opacity-0" : "translate-y-0 opacity-100"
                  }`}>
                  {titles[titleIndex]}
                </h2>
              </div>
            </div>

            <p className={`text-base lg:text-2xl text-gray-400 leading-relaxed mb-10 lg:mb-12 max-w-xl font-light transition-all duration-1000 delay-1000 ${heroPhase === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              Delivering reliable solutions through <span className="text-white border-b border-[#697565]/30">technical support</span> and
              <span className="text-white"> UI-focused development</span>, backed by strong teamwork and efficient problem-solving.
            </p>

            <a
              href="/RESUME.pdf"
              download="Carl_Andrei_Ricafort_Resume.pdf"
              className={`inline-block group relative px-8 lg:px-12 py-4 lg:py-5 overflow-hidden border border-[#697565] transition-all duration-1000 delay-[1200ms] ${heroPhase === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
            >
              <span className="absolute inset-0 bg-[#697565] translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
              <span className="relative z-10 text-sm lg:text-base font-medium group-hover:text-white transition-colors duration-300">
                Download CV
              </span>
            </a>

            <div className={`grid grid-cols-1 sm:grid-cols-2 gap-8 lg:gap-12 mt-16 lg:mt-28 pt-8 lg:pt-12 border-t border-white/5 transition-all duration-1000 delay-[1400ms] ${heroPhase === "ready" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="group">
                <h3 className="text-[#697565] font-mono text-[10px] lg:text-xs uppercase tracking-widest mb-2 lg:mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#697565] rounded-full"></span> 01. Logic
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Server-side search optimization & efficiency.</p>
              </div>
              <div className="group">
                <h3 className="text-[#697565] font-mono text-[10px] lg:text-xs uppercase tracking-widest mb-2 lg:mb-3 flex items-center gap-2">
                  <span className="w-1 h-1 bg-[#697565] rounded-full"></span> 02. Visuals
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 group-hover:text-gray-300 transition-colors">Muted aesthetics with Seafoam Teal accents.</p>
              </div>
            </div>
          </div>
        </div>

        {/* SIDE PHOTO (Adaptive) */}
        <div className="w-full lg:w-[40%] h-[50vh] lg:h-screen lg:sticky top-0 overflow-hidden group bg-[#252725]">
          <img
            src="./jiji.jpeg"
            alt="Carl Andrei Ricafort"
            className="w-full h-full object-cover transition-all duration-[1.5s] ease-[cubic-bezier(0.2,0.8,0.2,1)] scale-110 group-hover:scale-100 brightness-110 contrast-105 opacity-80 group-hover:opacity-100"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent z-10" />
          <div className="absolute inset-0 z-20 pointer-events-none">
            <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000"
              style={{
                background: "linear-gradient(115deg, transparent 20%, rgba(105, 117, 101, 0.2) 50%, transparent 80%)",
                backgroundSize: "200% 100%",
                animation: "shimmer 10s infinite linear",
              }}
            />
            <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.8)]" />
          </div>
        </div>
      </main>

      <section id="about" className="relative min-h-screen px-6 sm:px-12 lg:px-32 py-20 lg:py-24 border-b border-white/5 bg-[#1a1c1a]/50">
        <AboutContent />
      </section>

      <section id="projects" className="relative min-h-screen px-6 sm:px-12 lg:px-32 py-20 lg:py-24 border-b border-white/5">
        <ProjectsContent />
      </section>

      <section id="certification" className="relative min-h-screen px-6 sm:px-12 lg:px-32 py-20 lg:py-24 border-b border-white/5">
        <CertificationContent />
      </section>

      <section id="contact" className="relative px-6 sm:px-12 lg:px-32 py-20 lg:py-24">
        <ContactContent />
      </section>

      </div>
    </>
  );
}