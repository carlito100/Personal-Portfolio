"use client";

import { useState } from "react";
import { db } from "../lib/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function ContactContent() {

  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ❌ VALIDATION: block empty fields
    if (
      !form.fullName.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      await addDoc(collection(db, "Discussions"), {
        fullName: form.fullName,
        email: form.email,
        subject: form.subject,
        message: form.message,
        createdAt: serverTimestamp()
      });

      // ✅ SUCCESS ALERT
      alert("Message sent successfully 🚀");

      setForm({
        fullName: "",
        email: "",
        subject: "",
        message: ""
      });

    } catch (error) {
      console.error(error);

      // ❌ ERROR ALERT
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col justify-center relative">
      
      {/* SECTION HEADER */}
      <div className="mb-12">
        <h2 className="text-[#697565] font-mono text-xs uppercase tracking-[0.5em] mb-4">
          Terminal_Access // 04
        </h2>
        <h3 className="text-6xl lg:text-8xl font-bold tracking-tighter leading-none">
          Let’s <span className="text-gray-500">Initialize.</span>
        </h3>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        <div className="lg:col-span-8">
          <div className="mb-12">
            <p className="text-gray-500 font-mono text-[10px] uppercase mb-4 tracking-widest">// Direct_Transmission</p>
            <a 
              href="mailto:carlandreiricafort@gmail.com"
              className="group block w-full border-b border-white/10 pb-4 transition-all hover:border-[#697565]/50"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-medium tracking-tight group-hover:text-[#697565] transition-colors">
                  carlandreiricafort@gmail.com
                </span>
                <span className="text-[#697565] font-mono text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  [ OPEN_MAIL_CLIENT ]
                </span>
              </div>
            </a>
          </div>

          {/* EXAGGERATED CONTACT FORM */}
          <form onSubmit={handleSubmit} className="space-y-6 bg-white/[0.02] p-8 border border-white/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-2 opacity-10 font-mono text-[8px] uppercase">Form_ID: 882-XC</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">Name.exe</label>
                <input 
                  type="text"
                  name="fullName"
                  value={form.fullName}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="bg-transparent border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#697565] focus:ring-1 focus:ring-[#697565]/20 transition-all"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="bg-transparent border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#697565] focus:ring-1 focus:ring-[#697565]/20 transition-all"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">Subject</label>
              <input 
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="bg-transparent border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#697565] focus:ring-1 focus:ring-[#697565]/20 transition-all"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-mono text-[#697565] uppercase tracking-widest">Write Message</label>
              <textarea 
                rows="4"
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Brief your inquiries..."
                className="bg-transparent border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#697565] focus:ring-1 focus:ring-[#697565]/20 transition-all resize-none"
              ></textarea>
            </div>

            <button type="submit" className="w-full group relative py-4 bg-[#697565] text-white font-mono text-xs uppercase tracking-[0.3em] overflow-hidden transition-all hover:bg-[#5a6556]">
              <span className="relative z-10">Submit</span>
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 bg-white/10 transition-transform duration-500" />
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: METADATA */}
        <div className="lg:col-span-4 flex flex-col justify-end gap-12 border-l border-white/5 pl-8 lg:pl-12">
          <div className="space-y-6">
            <div>
              <p className="text-[#697565] font-mono text-[10px] uppercase mb-2">Location</p>
              <p className="text-sm text-gray-400">Davao City, Philippines [8000]</p>
            </div>

            <div>
              <p className="text-[#697565] font-mono text-[10px] uppercase mb-2">Social_Nodes</p>
              <div className="flex flex-col gap-2">
                <a href="https://www.linkedin.com/in/carl-andrei-ricafort-b9a050389" className="text-sm text-gray-400 hover:text-[#697565] transition-colors underline decoration-white/5">LinkedIn/Carl Andrei Ricafort</a>
                <a href="https://github.com/carlito100" className="text-sm text-gray-400 hover:text-[#697565] transition-colors underline decoration-white/5">GitHub/carlito100</a>
              </div>
            </div>

            <div>
              <p className="text-[#697565] font-mono text-[10px] uppercase mb-2">System_Uptime</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                <p className="text-sm text-gray-400">Operational & Active</p>
              </div>
            </div>
          </div>

          <div className="opacity-20 font-mono text-[9px] uppercase leading-tight space-y-1">
            <p>Auth: Success</p>
            <p>Key: RSA-4096</p>
            <p>Status: Listening...</p>
          </div>
        </div>
      </div>

      <footer className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-mono text-gray-600 uppercase tracking-widest">
        <p>© 2026 Carl Andrei Ricafort — Strategic Developer</p>
      </footer>
    </div>
  );
}