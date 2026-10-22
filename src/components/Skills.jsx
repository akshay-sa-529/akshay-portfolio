import React, { useState } from 'react';
import { skillCategories, additionalInterests } from '../data/portfolioData';
import { 
  Code, 
  BrainCircuit, 
  Database, 
  ScanEye, 
  Wrench, 
  Layers, 
  Sparkles, 
  CheckCircle,
  Filter
} from 'lucide-react';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('all');

  const categoryIcons = {
    Code: Code,
    BrainCircuit: BrainCircuit,
    Database: Database,
    ScanEye: ScanEye,
    Wrench: Wrench,
    Layers: Layers
  };

  const filteredCategories = activeTab === 'all' 
    ? skillCategories 
    : skillCategories.filter(cat => cat.id === activeTab);

  return (
    <section id="skills" className="py-20 bg-navy-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/40 border border-indigo-800/40 text-indigo-400 text-xs font-mono uppercase tracking-wider">
            <BrainCircuit className="w-3.5 h-3.5" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills & Competencies
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Structured skill areas covering programming, machine learning workflows, data systems, and developer tools.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
              activeTab === 'all'
                ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                : 'bg-navy-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
            }`}
          >
            All Areas ({skillCategories.length})
          </button>
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all ${
                activeTab === cat.id
                  ? 'bg-cyan-500 text-slate-950 font-semibold shadow-md shadow-cyan-500/20'
                  : 'bg-navy-900 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-800'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredCategories.map((category) => {
            const IconComponent = categoryIcons[category.icon] || Code;
            return (
              <div
                key={category.id}
                className="rounded-2xl bg-navy-900/80 border border-slate-800/90 p-6 flex flex-col justify-between hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-950/20 group"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 text-cyan-400 flex items-center justify-center group-hover:border-cyan-400 transition-colors">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-1">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 mt-5">
                    {category.skills.map((skill, sIdx) => (
                      <div
                        key={sIdx}
                        className={`p-2.5 rounded-xl border transition-all ${
                          skill.highlight
                            ? 'bg-slate-800/60 border-cyan-900/60 hover:border-cyan-700/80'
                            : 'bg-slate-900/50 border-slate-800/60 hover:border-slate-700'
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${skill.highlight ? 'text-white' : 'text-slate-300'}`}>
                            {skill.name}
                          </span>
                          {skill.highlight && (
                            <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-300 border border-cyan-800/50">
                              Core
                            </span>
                          )}
                        </div>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          {skill.note}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-500 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-cyan-400/80">AJIET AI/ML</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Interests / Modern AI Focus Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-navy-900 via-navy-850 to-indigo-950/40 border border-indigo-900/40">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 text-xs font-mono uppercase text-indigo-400 tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Specialized Interest Areas</span>
              </div>
              <h3 className="text-xl font-bold text-white">
                Forward-Looking Technology Interests
              </h3>
              <p className="text-sm text-slate-300 max-w-xl">
                Topics I actively explore through self-study, experimenting with generative architectures, NLP pipelines, and data systems.
              </p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-2 max-w-md">
              {additionalInterests.map((interest, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-slate-800/90 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-colors shadow-sm"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
