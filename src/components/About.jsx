import React from 'react';
import { personalInfo, aboutData } from '../data/portfolioData';
import { 
  User, 
  Award, 
  BookOpen, 
  Code2, 
  Languages, 
  Heart, 
  Headphones, 
  Gamepad2, 
  Activity, 
  Cpu,
  GraduationCap
} from 'lucide-react';

export default function About() {
  const interestIcons = {
    Headphones: Headphones,
    Gamepad2: Gamepad2,
    Activity: Activity,
    Code2: Code2,
    Cpu: Cpu
  };

  return (
    <section id="about" className="py-20 bg-navy-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <User className="w-3.5 h-3.5" />
            <span>Profile & Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            About Me
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering student at AJIET with a disciplined academic approach and practical focus in AI/ML and software engineering.
          </p>
        </div>

        {/* 4 Quick Stat Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {aboutData.quickStats.map((stat, idx) => (
            <div 
              key={idx} 
              className="p-5 rounded-2xl bg-navy-950/80 border border-slate-800 hover:border-slate-700 transition-all text-center sm:text-left group"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-cyan-400 font-mono group-hover:scale-105 transition-transform">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-slate-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-400 mt-0.5">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Narrative Bio */}
          <div className="lg:col-span-7 space-y-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-navy-950/70 border border-slate-800 space-y-4 leading-relaxed text-slate-300">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-cyan-400" />
                <span>My Journey & Engineering Focus</span>
              </h3>
              
              {aboutData.narrative.map((paragraph, index) => (
                <p key={index} className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-2 text-xs font-mono text-cyan-300">
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">#PythonDevelopment</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">#MachineLearning</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">#DataSystems</span>
                <span className="px-2.5 py-1 rounded-md bg-slate-800/80 border border-slate-700">#ContinuousLearning</span>
              </div>
            </div>
          </div>

          {/* Languages & Interests Sidebar */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Spoken Languages */}
            <div className="p-6 rounded-2xl bg-navy-950/70 border border-slate-800 space-y-4">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Languages className="w-4 h-4 text-indigo-400" />
                <span>Spoken Languages</span>
              </h3>
              <div className="space-y-3">
                {aboutData.languages.map((lang, idx) => (
                  <div key={idx} className="flex items-center justify-between text-sm py-1.5 border-b border-slate-800/60 last:border-0">
                    <span className="font-medium text-slate-200">{lang.name}</span>
                    <span className="text-xs text-slate-400 font-mono bg-slate-800/60 px-2.5 py-0.5 rounded-full border border-slate-700">
                      {lang.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Interests & Hobbies */}
            <div className="p-6 rounded-2xl bg-navy-950/70 border border-slate-800 space-y-4">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Heart className="w-4 h-4 text-rose-400" />
                <span>Personal Interests & Hobbies</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {aboutData.interests.map((interest, idx) => {
                  const Icon = interestIcons[interest.icon] || Code2;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-cyan-950/50 text-cyan-400 border border-cyan-800/40 shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-slate-200">{interest.name}</div>
                        <div className="text-xs text-slate-400 leading-snug">{interest.desc}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
