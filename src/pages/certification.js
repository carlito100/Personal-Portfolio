export default function CertificationContent() {
  const certs = [
    {
      title: "Build Complete CMS Blog",
      stack: "PHP • MySQL • Bootstrap • PDO",
      provider: "Udemy Professional Development",
      type: "Full-Stack Web Development Project",
      fileName: "/CERTIFICATE.pdf",
      image: "/cms.jpg", // Replace with specific image if available
    },
    {
      title: "Web Development Bootcamp",
      stack: "HTML • CSS • PHP • MySQL • Wordpress",
      provider: "Udemy Professional Development",
      type: "Web Development Fundamentals Training",
      fileName: "/RICAFORT CERT.pdf",
      image: "/bootcamp.jpg",
    },
    {
      title: "Full Stack Java Development",
      stack: "Java • Spring • Hibernate • MySQL",
      provider: "Simplilearn Solutions Private Limited",
      type: "Java Full-Stack Development Program",
      fileName: "/RICAFORT_CERTIFICATE.pdf",
      image: "/fullstack.jpg",
    },
    {
      title: "Java EE Web Development",
      stack: "HTTP, Server, Servlet, HTML/CSS/JSP",
      provider: "Udemy Professional Development",
      type: "Java Enterprise Web Development Basics",
      fileName: "/CERT RICAFORT.pdf",
      image: "/javaee.jpg",
    }
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
      <div className="space-y-6">
        {certs.map((cert, index) => (
          <div
            key={index}
            className="group relative flex flex-col lg:flex-row lg:items-center gap-8 p-6 md:p-8 bg-white/[0.02] border border-white/5 hover:border-[#697565]/40 transition-all duration-500 overflow-hidden"
          >
            {/* IMAGE PREVIEW HOLDER */}
            <div className="relative z-10 w-full lg:w-48 h-32 flex-shrink-0 bg-black border border-white/10 group-hover:border-[#697565]/50 transition-colors overflow-hidden">
              <img 
                src={cert.image} 
                alt={`${cert.title} preview`}
                className="w-full h-full object-cover opacity-30 grayscale group-hover:opacity-100 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              {/* Scanline Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.02),rgba(0,255,0,0.01),rgba(0,0,255,0.02))] bg-[length:100%_2px,3px_100%] z-20 opacity-20" />
            </div>

            {/* INFO CONTENT */}
            <div className="relative z-10 flex-1 space-y-2">
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

            {/* ACTION AREA */}
            <div className="relative z-10 flex flex-row lg:flex-col items-center lg:items-end gap-6 lg:gap-4">
              <div className="text-left lg:text-right">
                <p className="text-gray-400 text-[10px] font-mono uppercase">
                  Issued By
                </p>
                <p className="text-gray-300 text-xs font-bold uppercase tracking-tighter">
                  {cert.provider}
                </p>
              </div>

              {/* VIEW BUTTON - Redirects to PDF */}
              <a
                href={cert.fileName}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-4 py-2 border border-white/10 text-[#697565] font-mono text-[10px] uppercase tracking-widest hover:bg-[#697565] hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(105,117,101,0)] hover:shadow-[0_0_15px_rgba(105,117,101,0.3)]"
              >
                View_Record
              </a>
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