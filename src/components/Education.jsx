import React from 'react';
import { educationData } from '../data/portfolioData';
import { 
  GraduationCap, 
  MapPin, 
  Calendar, 
  Award, 
  BookMarked, 
  CheckCircle2 
} from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Undergraduate engineering studies in Artificial Intelligence & Machine Learning with strong academic performance.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl bg-navy-900/80 border border-slate-800 p-6 sm:p-8 lg:p-10 relative overflow-hidden shadow-xl">
            
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-slate-800/80">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 text-cyan-300 border border-cyan-800/50 text-xs font-mono">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{educationData.currentYear}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {educationData.degree}
                </h3>
                
                <div className="text-cyan-400 text-lg font-semibold">
                  Specialization: {educationData.specialization}
                </div>
                
                <div className="text-slate-300 text-base font-medium">
                  {educationData.college}
                </div>

                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono pt-1">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>{educationData.location}</span>
                </div>
              </div>

              {/* CGPA Badge */}
              <div className="shrink-0 p-5 rounded-2xl bg-navy-950 border border-cyan-500/30 text-center sm:text-right min-w-[160px]">
                <div className="text-xs uppercase font-mono tracking-wider text-slate-400 mb-1 flex items-center justify-center sm:justify-end gap-1">
                  <Award className="w-3.5 h-3.5 text-amber-400" />
                  <span>Current CGPA</span>
                </div>
                <div className="text-3xl sm:text-4xl font-black text-cyan-400 font-mono">
                  {educationData.cgpa}
                </div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">
                  Strong Academic Merit
                </div>
              </div>
            </div>

            {/* Curriculum Description & Key Foundations */}
            <div className="pt-6 space-y-6">
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {educationData.overview}
              </p>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3 flex items-center gap-2">
                  <BookMarked className="w-4 h-4 text-cyan-400" />
                  <span>Core Academic Coursework Foundations</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {educationData.coreSubjects.map((subject, idx) => (
                    <div
                      key={idx}
                      className="px-3.5 py-2 rounded-xl bg-navy-950/70 border border-slate-800/80 flex items-center gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                      <span>{subject}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
