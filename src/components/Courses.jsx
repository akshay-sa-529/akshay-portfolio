import React from 'react';
import { coursesAndLearning } from '../data/portfolioData';
import { 
  BookOpenCheck, 
  Terminal, 
  Brain, 
  Sparkles, 
  Database, 
  Code2, 
  CheckCircle,
  Lightbulb
} from 'lucide-react';

export default function Courses() {
  const getDomainColor = (domain) => {
    switch (domain) {
      case 'Generative AI':
        return 'text-purple-400 bg-purple-950/40 border-purple-800/40';
      case 'Artificial Intelligence':
        return 'text-cyan-400 bg-cyan-950/40 border-cyan-800/40';
      case 'Machine Learning':
        return 'text-blue-400 bg-blue-950/40 border-blue-800/40';
      case 'Programming':
        return 'text-emerald-400 bg-emerald-950/40 border-emerald-800/40';
      case 'Databases & Data':
        return 'text-amber-400 bg-amber-950/40 border-amber-800/40';
      default:
        return 'text-slate-300 bg-slate-800 border-slate-700';
    }
  };

  return (
    <section id="learning" className="py-20 bg-navy-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <BookOpenCheck className="w-3.5 h-3.5" />
            <span>Structured Technical Learning</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Courses & Continuous Learning
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Targeted coursework and self-directed technical studies completed to build practical depth in AI, machine learning, and programming.
          </p>
        </div>

        {/* Notice on Academic Honesty */}
        <div className="max-w-4xl mx-auto mb-10 p-4 rounded-xl bg-navy-950 border border-slate-800 text-xs sm:text-sm text-slate-300 flex items-start gap-3">
          <Lightbulb className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-white">Honest & Transparent Record: </span>
            <span>
              The items below reflect specialized coursework and focused study modules undertaken alongside degree studies to develop practical proficiency.
            </span>
          </div>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto">
          {coursesAndLearning.items.map((course) => (
            <div
              key={course.id}
              className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800/90 hover:border-slate-700 transition-all duration-300 flex flex-col justify-between group hover:shadow-lg hover:shadow-cyan-950/20"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-full border ${getDomainColor(course.domain)}`}>
                    {course.domain}
                  </span>
                  <span className="text-[10px] text-slate-500 font-mono">
                    {course.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors mb-2">
                  {course.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {course.summary}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-800/70 flex items-center gap-1.5 text-xs text-slate-400">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>Foundational Mastery</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
