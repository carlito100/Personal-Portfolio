// src/pages/certification.js
export default function CertificationContent() {
  const certs = [
    {
      title: "Build Complete CMS Blog",
      stack: "PHP • MySQL • Bootstrap • PDO",
      provider: "Udemy Professional Development",
      type: "Full-Stack System",
    },
    {
      title: "Web Development Bootcamp",
      stack: "HTML • CSS • PHP • MySQL • Wordpress",
      provider: "Full-Stack Certification",
      type: "Foundational Architecture",
    },
  ];

  return (
    <div className="w-full">
      {/* SECTION HEADER */}
      <div className="mb-16">
        <h2 className="text-[#697565] font-mono text-xs uppercase tracking-[0.5em] mb-4">
          Verified_Credentials // 03
        </h2>
        <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter">
          Licences <span className="text-gray-500">Certifications.</span>
        </h3>
      </div>

      {/* CERTIFICATION LIST */}
      <div className="space-y-4">
        {certs.map((cert, index) => (
          <div 
            key={index}
            className="group relative flex flex-col md:flex-row md:items-center justify-between p-8 bg-white/[0.02] border border-white/5 hover:border-[#697565]/40 transition-all duration-500 overflow-hidden"
          >
            {/* Background Decorative Element */}
            <div className="absolute -right-4 -bottom-4 text-white/[0.03] font-mono text-6xl italic font-bold group-hover:text-[#697565]/5 transition-colors pointer-events-none">
              VERIFIED
            </div>

            <div className="relative z-10 space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-[#697565] rotate-45" />
                <p className="text-[#697565] font-mono text-[10px] uppercase tracking-widest">
                  {cert.type}
                </p>
              </div>
              <h4 className="text-2xl lg:text-3xl font-bold text-gray-200 group-hover:text-white transition-colors">
                {cert.title}
              </h4>
              <p className="text-gray-500 text-sm font-mono tracking-tight">
                {cert.stack}
              </p>
            </div>

            <div className="relative z-10 mt-6 md:mt-0 text-left md:text-right">
              <p className="text-gray-400 text-xs font-medium uppercase tracking-tighter">
                {cert.provider}
              </p>
              <div className="mt-2 h-[1px] w-12 md:ml-auto bg-white/10 group-hover:w-full group-hover:bg-[#697565]/50 transition-all duration-700" />
            </div>
          </div>
        ))}
      </div>

      {/* BOTTOM DECOR */}
      <div className="mt-12 flex items-center justify-center gap-4 opacity-20">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent to-white/20" />
        <span className="font-mono text-[9px] uppercase tracking-[1em]">End of Records</span>
        <div className="h-px flex-1 bg-gradient-to-l from-transparent to-white/20" />
      </div>
    </div>
  );
}