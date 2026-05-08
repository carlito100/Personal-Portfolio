import { useState, useEffect } from "react";

export default function Preloader({ onComplete }) {
  const [phase, setPhase] = useState("hidden"); // hidden, name1, name2, exiting
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setPhase("name1"), 200);    
    const timer2 = setTimeout(() => setPhase("name2"), 800);    
    const timer3 = setTimeout(() => setPhase("exiting"), 3200); 
    const timer4 = setTimeout(() => {
      if (onComplete) onComplete();
    }, 4200);

    // Progress bar simulation
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev < 100) return prev + 1;
        return 100;
      });
    }, 30);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearInterval(interval);
    };
  }, [onComplete]);

  const firstName = "CARL ANDREI".split("");
  const lastName = "RICAFORT".split("");

  return (
    <div className="fixed inset-0 z-[250] flex flex-col items-center justify-center bg-[#050505] overflow-hidden">
      {/* Dynamic Background Particles */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full animate-ping" />
        <div className="absolute top-3/4 left-1/2 w-1 h-1 bg-[#697565] rounded-full animate-pulse delay-700" />
        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-white rounded-full animate-ping delay-300" />
      </div>

      {/* Floating Glows */}
      <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#697565]/5 blur-[150px] rounded-full transition-opacity duration-1000 ${phase === "exiting" ? "opacity-0" : "opacity-100"}`} />

      <div className="relative flex flex-col items-center gap-0">
        {/* First Name with Staggered Letters */}
        <div className={`flex transition-all duration-1000 ${phase === "exiting" ? "-translate-x-[150%] opacity-0 scale-150 blur-xl" : ""}`}>
          {firstName.map((char, i) => (
            <span 
              key={i}
              className={`text-4xl sm:text-7xl lg:text-[10rem] font-black tracking-tighter text-white transition-all duration-700 ${
                phase !== "hidden" ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ 
                transitionDelay: `${i * 40}ms`,
                textShadow: "0 0 20px rgba(255,255,255,0.1)"
              }}
            >
              {char === " " ? "\u00A0" : char}
            </span>
          ))}
        </div>

        {/* Last Name with Staggered Letters */}
        <div className={`flex transition-all duration-1000 ${phase === "exiting" ? "translate-x-[150%] opacity-0 scale-150 blur-xl" : ""}`}>
          {lastName.map((char, i) => (
            <span 
              key={i}
              className={`text-4xl sm:text-7xl lg:text-[10rem] font-black tracking-tighter text-[#697565] transition-all duration-700 ${
                phase === "name2" || phase === "exiting" ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
              style={{ 
                transitionDelay: `${i * 40 + 400}ms`,
                textShadow: "0 0 30px rgba(105,117,101,0.3)"
              }}
            >
              {char}
            </span>
          ))}
        </div>
      </div>

      {/* Status HUD Detail */}
      <div className={`mt-12 flex flex-col items-center transition-all duration-1000 ${phase === "exiting" ? "opacity-0 translate-y-10" : "opacity-100"}`}>
        <div className="w-48 h-[1px] bg-white/5 relative overflow-hidden">
          <div 
            className="absolute inset-y-0 left-0 bg-[#697565] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="flex justify-between w-48 mt-2">
            <span className="text-[8px] font-mono text-[#697565] tracking-[0.3em]">INITIALIZING</span>
            <span className="text-[8px] font-mono text-[#697565]">{progress}%</span>
        </div>
      </div>

    </div>
  );
}
