import useScrollReveal from "../lib/useScrollReveal";

export default function AboutContent() {
  const [headerRef, headerVisible] = useScrollReveal();
  const [bioRef, bioVisible] = useScrollReveal();
  const [cardsRef, cardsVisible] = useScrollReveal();

  return (
    <div className="relative w-full py-24 overflow-hidden">
      
      {/* THE WHITE NET (GRID) BACKGROUND */}
      <div 
        className="absolute inset-0 z-0 opacity-40 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px', // Adjust size of the net squares
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Header Area */}
          <div 
            ref={headerRef}
            className={`lg:col-span-4 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
              headerVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
            }`}
          >
            <h2 className="text-[#697565] font-mono text-xs uppercase tracking-[0.5em] mb-4">
              System_Profile // 01
            </h2>
            <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter leading-none">
              Behind the <br />
              <span className="text-gray-500">Architecture.</span>
            </h3>
          </div>

          {/* Detailed Bio */}
          <div className="lg:col-span-8">
            <div 
              ref={bioRef}
              className={`transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-200 ${
                bioVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
              }`}
            >
              <p className="text-xl text-gray-400 leading-relaxed mb-8 font-light">
                I am a <span className="text-white font-medium">Frontend Developer and IT Specialist</span> focused on building 
                user-friendly web applications and delivering reliable technical solutions. My work emphasizes 
                <span className="text-white"> clean design</span>, responsive interfaces, and efficient system performance.
              </p>

              <div className="space-y-8 text-gray-500 text-sm leading-relaxed max-w-2xl">
                <p>
                  I have experience developing web-based systems, including an AI-based platform for detecting fraudulent job postings 
                  and an online ordering system, where I handled frontend development and documentation. I am skilled in 
                  <span className="text-white"> HTML, CSS, PHP, MySQL, Bootstrap, and WordPress</span>, and I also provide technical 
                  support and troubleshooting for both hardware and software to ensure smooth and dependable operations. Known for my 
                  reliability, teamwork, and time management, I consistently aim to deliver high-quality results while contributing 
                  effectively to organizational goals.
                </p>
              </div>
            </div>

            {/* Core Competencies - Mini Bento Grid */}
            <div 
              ref={cardsRef}
              className={`grid grid-cols-1 md:grid-cols-2 gap-4 mt-12 transition-all duration-1000 ease-[cubic-bezier(0.2,0.8,0.2,1)] delay-400 ${
                cardsVisible ? "translate-x-0 opacity-100" : "translate-x-32 opacity-0"
              }`}
            >
              <div className="p-6 bg-white/5 border border-white/10 hover:border-[#697565]/50 transition-colors">
                <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2 underline decoration-[#697565]">Optimization</h4>
                <p className="text-[12px] text-gray-500">Backend Logic, Database Maintenance, and Server-side Search Optimization.</p>
              </div>
              <div className="p-6 bg-white/5 border border-white/10 hover:border-[#697565]/50 transition-colors">
                <h4 className="text-white font-mono text-xs uppercase tracking-widest mb-2 underline decoration-[#697565]">Visuals</h4>
                <p className="text-[12px] text-gray-500">Muted Palette UI/UX, Dark Mode Specialization, and Modern Minimalist Design.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative vertical line */}
      <div className="absolute left-1/2 bottom-0 w-[1px] h-24 bg-gradient-to-t from-[#697565] to-transparent opacity-20 hidden lg:block" />
    </div>
  );
}