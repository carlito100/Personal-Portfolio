export default function ProjectsContent() {
  const projects = [
    {
      id: "01",
      title: "VeriHire",
      subtitle: "Capstone Project",
      desc: "An AI-based system designed to detect and flag fraudulent job postings using machine learning patterns.",
      role: "Frontend Developer • Documentation",
      tags: ["AI Detection", "React", "UX Research"],
      link: "https://verihire.onrender.com/?fbclid=IwY2xjawRXl7ZleHRuA2FlbQIxMQBzcnRjBmFwcF9pZAwzNTA2ODU1MzE3MjgAAR72pshkaiB7ue7EEr-Ake1PZu-e3c3e3nsX0zEwLz6juNTW_1CpdeP0h6XT0Q_aem_1qbTbttMJM1p8vR5mO-CGA", 
      image: "/verihire.jpg" 
    },
    {
      id: "02",
      title: "Manlupig Marketing",
      subtitle: "IM Project",
      desc: "A streamlined Online Ordering System built to modernize inventory and customer transactions.",
      role: "Frontend Developer • Documentation",
      tags: ["E-commerce", "System Design", "Database"],
    },
  ];

  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
        <div>
          <h2 className="text-[#697565] font-mono text-xs uppercase tracking-[0.5em] mb-4">
            Selected_Work // 02
          </h2>
          <h3 className="text-5xl lg:text-6xl font-bold tracking-tighter">
            Past <span className="text-gray-500 italic">Projects.</span>
          </h3>
        </div>
        <p className="text-gray-500 font-mono text-[10px] uppercase hidden md:block">
          Total_Archive [2]
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-white/5 border border-white/5">
        {projects.map((project) => (
          <div 
            key={project.id} 
            className="group relative bg-[#1E201E] p-8 lg:p-12 transition-all duration-500 hover:bg-[#1a1c1a] flex flex-col justify-between"
          >
            {/* Project Number Background */}
            <span className="absolute top-4 right-8 text-8xl font-bold text-white/[0.02] group-hover:text-[#697565]/10 transition-colors duration-500 pointer-events-none">
              {project.id}
            </span>

            <div className="relative z-10">
              <p className="text-[#697565] font-mono text-[10px] uppercase tracking-widest mb-2">
                {project.subtitle}
              </p>
              <h4 className="text-3xl font-bold mb-4 group-hover:translate-x-2 transition-transform duration-300">
                {project.title}
              </h4>

              {/* IMAGE HOLDER - Specific to VeriHire */}
              {project.title === "VeriHire" && (
                <div className="relative w-full h-48 mb-6 overflow-hidden border border-white/5 bg-black/20 group-hover:border-[#697565]/30 transition-colors">
                   <img 
                    src={project.image} 
                    alt="VeriHire Preview"
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 grayscale group-hover:grayscale-0"
                    onError={(e) => { e.currentTarget.src = "https://placehold.co/600x400/1a1a1a/697565?text=VeriHire+Preview"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1E201E] to-transparent opacity-60" />
                </div>
              )}

              <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-sm">
                {project.desc}
              </p>

              <div className="mb-8">
                <p className="text-white text-xs font-medium mb-1">Role:</p>
                <p className="text-gray-500 text-xs">{project.role}</p>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag} 
                      className="text-[10px] font-mono px-3 py-1 border border-white/10 text-gray-400 group-hover:border-[#697565]/30 group-hover:text-white transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* DIRECT LINK - Specific to VeriHire */}
                {project.link && (
                  <a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-[#697565] font-mono text-[10px] uppercase tracking-tighter hover:text-white transition-colors group/link"
                  >
                    Direct Link
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover/link:translate-x-1 transition-transform">
                      <line x1="7" y1="17" x2="17" y2="7"></line>
                      <polyline points="7 7 17 7 17 17"></polyline>
                    </svg>
                  </a>
                )}
              </div>
            </div>

            {/* Corner Accent */}
            <div className="absolute bottom-0 right-0 w-0 h-0 border-style-solid border-t-[20px] border-t-transparent border-r-[20px] border-r-[#697565]/0 group-hover:border-r-[#697565]/40 transition-all duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
}