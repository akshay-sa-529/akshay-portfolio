import React, { useState } from 'react';
import { featuredProject, personalInfo } from '../data/portfolioData';
import ChatbotSimulator from './ChatbotSimulator';
import GithubIcon from './GithubIcon';
import { 
  FolderGit2, 
  ExternalLink, 
  Sparkles, 
  Bot, 
  Database, 
  Cpu, 
  Layers, 
  CheckCircle2, 
  PlayCircle,
  FileCode2
} from 'lucide-react';

export default function Projects() {
  const [viewMode, setViewMode] = useState('interactive'); // 'interactive' or 'architecture'

  return (
    <section id="projects" className="py-20 bg-navy-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Featured Engineering Work</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Project
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            In-depth breakdown of my flagship project, demonstrating end-to-end integration of NLP, language models, and database persistence.
          </p>
        </div>

        {/* Featured Project Showcase Container */}
        <div className="rounded-3xl bg-navy-950/80 border border-slate-800 shadow-2xl p-6 sm:p-8 lg:p-10 relative overflow-hidden">
          
          {/* Subtle Accent Glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-600/10 blur-[100px] pointer-events-none rounded-full" />
          
          <div className="relative z-10 space-y-8">
            
            {/* Project Header Bar */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-800/80">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800/50 text-xs font-mono">
                  <Sparkles className="w-3 h-3" />
                  <span>{featuredProject.badge}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                  {featuredProject.title}
                </h3>
                <p className="text-slate-400 text-sm sm:text-base">
                  {featuredProject.headline}
                </p>
              </div>

              {/* Technologies Badges */}
              <div className="flex flex-wrap gap-2 items-center">
                {featuredProject.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-mono font-medium bg-slate-800/80 text-cyan-300 border border-cyan-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* View Mode Switcher */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-navy-900 p-1 rounded-xl border border-slate-800">
                <button
                  onClick={() => setViewMode('interactive')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    viewMode === 'interactive'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <PlayCircle className="w-4 h-4" />
                  <span>Interactive Live Preview</span>
                </button>
                <button
                  onClick={() => setViewMode('architecture')}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs sm:text-sm font-medium transition-all ${
                    viewMode === 'architecture'
                      ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  <Layers className="w-4 h-4" />
                  <span>Architecture & Features</span>
                </button>
              </div>

              {/* GitHub Link */}
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium text-slate-200 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 hover:border-cyan-500/50 transition-all shadow-sm"
              >
                <GithubIcon className="w-4 h-4 text-cyan-400" />
                <span>View on GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>

            {/* Toggle Content: Interactive Simulator or Architecture Breakdown */}
            {viewMode === 'interactive' ? (
              <div className="space-y-4">
                <ChatbotSimulator />
                <p className="text-xs text-slate-400 font-mono text-center">
                  💡 This interactive simulator demonstrates the end-to-end flow: input sanitization, intent classification, prompt construction, and SQL history logging.
                </p>
              </div>
            ) : (
              <div className="space-y-8">
                {/* Detailed Description */}
                <div className="p-6 rounded-2xl bg-navy-900/60 border border-slate-800 text-slate-300 leading-relaxed text-sm sm:text-base">
                  {featuredProject.description}
                </div>

                {/* 4-Step Architecture Workflow */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-cyan-400" />
                    <span>System Workflow Pipeline</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {featuredProject.architectureSteps.map((step, idx) => (
                      <div
                        key={idx}
                        className="p-5 rounded-2xl bg-navy-900/80 border border-slate-800 relative group hover:border-slate-700 transition-all"
                      >
                        <div className="text-2xl font-mono font-bold text-cyan-400/40 mb-2">
                          {step.step}
                        </div>
                        <h5 className="text-sm font-bold text-white mb-1.5">
                          {step.title}
                        </h5>
                        <p className="text-xs text-slate-400 leading-relaxed">
                          {step.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Features List */}
                <div className="space-y-3">
                  <h4 className="text-base font-bold text-white flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Key Engineering Features</span>
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {featuredProject.highlights.map((feat, idx) => (
                      <div
                        key={idx}
                        className="p-4 rounded-xl bg-navy-900/60 border border-slate-800/80 flex items-start gap-3"
                      >
                        <div className="w-2 h-2 rounded-full bg-cyan-400 mt-2 shrink-0" />
                        <div>
                          <div className="text-sm font-semibold text-slate-200">
                            {feat.title}
                          </div>
                          <div className="text-xs text-slate-400 mt-0.5 leading-relaxed">
                            {feat.detail}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Note on Verification & Expansion */}
            <div className="p-4 rounded-xl bg-navy-900/40 border border-slate-800 text-xs text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <span className="flex items-center gap-2">
                <FileCode2 className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  Source code repository is hosted under Akshay's GitHub account: <strong>github.com/{personalInfo.githubUsername}</strong>.
                </span>
              </span>
              <a
                href={featuredProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-400 hover:text-cyan-300 font-mono font-semibold underline shrink-0"
              >
                Explore GitHub Profile →
              </a>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
