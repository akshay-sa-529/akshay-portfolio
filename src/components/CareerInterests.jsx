import React from 'react';
import { careerInterests, personalInfo } from '../data/portfolioData';
import { 
  Briefcase, 
  Brain, 
  Code, 
  Terminal, 
  BarChart3, 
  GraduationCap, 
  CheckCircle2, 
  ArrowRight,
  Sparkles 
} from 'lucide-react';

export default function CareerInterests() {
  const roleIcons = {
    Brain: Brain,
    Code: Code,
    Terminal: Terminal,
    BarChart3: BarChart3,
    GraduationCap: GraduationCap
  };

  return (
    <section id="career" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Opportunities & Horizons</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Career Interests & Target Roles
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            {careerInterests.statement}
          </p>
        </div>

        {/* Target Roles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {careerInterests.targetRoles.map((role, idx) => {
            const Icon = roleIcons[role.icon] || Briefcase;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-navy-900/80 border border-slate-800 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-xl hover:shadow-cyan-950/20"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {role.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {role.description}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center gap-1 text-xs text-cyan-400 font-mono">
                  <span>Target Role</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Candidate Strengths Card for Recruiters */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-navy-900/90 border border-slate-800 p-6 sm:p-8">
          <div className="flex items-center gap-2 mb-4 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Sparkles className="w-4 h-4" />
            <span>Why Akshay? • Core Value Proposition for Hiring Teams</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {careerInterests.candidateStrengths.map((item, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="text-sm font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item.label}</span>
                </div>
                <p className="text-xs text-slate-400 leading-relaxed pl-6">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
            <div>
              <span>Current Status: </span>
              <strong className="text-slate-200">{personalInfo.currentAcademicYear} B.E. Student at AJIET</strong>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold transition-all text-xs"
            >
              <span>Discuss An Opportunity</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
