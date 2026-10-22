import React from 'react';
import { personalInfo } from '../data/portfolioData';
import GithubIcon from './GithubIcon';
import { 
  ArrowRight, 
  Download, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Sparkles, 
  Terminal, 
  CheckCircle2,
  Cpu
} from 'lucide-react';

export default function Hero({ onOpenResume }) {
  return (
    <section id="home" className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-gradient-to-tr from-cyan-600/15 via-indigo-600/15 to-transparent blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-violet-600/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Information */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-cyan-500/30 text-xs sm:text-sm text-cyan-300 font-mono shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span>{personalInfo.statusTag}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I'm <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">{personalInfo.name}</span>
              </h1>
              <p className="text-xl sm:text-2xl font-semibold text-slate-300">
                {personalInfo.title}
              </p>
            </div>

            {/* Concise Value Proposition */}
            <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed mx-auto lg:mx-0">
              {personalInfo.shortIntro}
            </p>

            {/* Quick Metadata Badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm text-slate-300 font-medium pt-1">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-navy-900/80 border border-slate-800">
                <GraduationCap className="w-4 h-4 text-indigo-400" />
                <span>AJIET (CGPA: {personalInfo.cgpa})</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 transition-all duration-200 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-navy-900/90 hover:bg-slate-800 text-slate-200 border border-slate-700 hover:border-slate-500 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-slate-400"
              >
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>Contact Me</span>
              </a>

              <button
                onClick={onOpenResume}
                className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl font-semibold text-sm bg-slate-800/80 hover:bg-slate-700/80 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>
            </div>
          </div>

          {/* Interactive Profile Visual / Terminal Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Ring */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-cyan-500/30 via-indigo-500/20 to-purple-500/30 blur-lg opacity-75 transition-opacity" />

              {/* Code Terminal Box */}
              <div className="relative rounded-2xl bg-navy-900 border border-slate-800 shadow-2xl overflow-hidden">
                
                {/* Terminal Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-navy-950/90 border-b border-slate-800/90">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="text-xs font-mono text-slate-400 flex items-center gap-1.5">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                    <span>akshay_profile.py</span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500">Python 3.11</div>
                </div>

                {/* Code Content */}
                <div className="p-5 font-mono text-xs sm:text-sm text-slate-300 space-y-3 leading-relaxed">
                  <div>
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-yellow-300">AkshaySA</span>:
                  </div>
                  <div className="pl-4 space-y-1.5 text-slate-400">
                    <div>
                      <span className="text-cyan-400">def</span>{' '}
                      <span className="text-blue-400">__init__</span>(self):
                    </div>
                    <div className="pl-4 space-y-1">
                      <p>
                        self.role = <span className="text-emerald-300">"{personalInfo.title}"</span>
                      </p>
                      <p>
                        self.college = <span className="text-emerald-300">"AJIET, Mangaluru"</span>
                      </p>
                      <p>
                        self.cgpa = <span className="text-amber-300">8.56</span>{' '}
                        <span className="text-slate-500"># out of 10</span>
                      </p>
                      <p>
                        self.core_stack = [
                        <span className="text-cyan-300">"Python"</span>,{' '}
                        <span className="text-cyan-300">"ML"</span>,{' '}
                        <span className="text-cyan-300">"SQL"</span>,{' '}
                        <span className="text-cyan-300">"OpenCV"</span>]
                      </p>
                      <p>
                        self.open_for = [
                        <span className="text-indigo-300">"Internships"</span>,{' '}
                        <span className="text-indigo-300">"GET Roles"</span>]
                      </p>
                    </div>
                    <div className="pt-2">
                      <span className="text-cyan-400">def</span>{' '}
                      <span className="text-blue-400">get_mindset</span>(self):
                    </div>
                    <div className="pl-4">
                      <span className="text-purple-400">return</span>{' '}
                      <span className="text-emerald-300">"Solve real problems with clean code & continuous learning"</span>
                    </div>
                  </div>
                </div>

                {/* Terminal Footer Bar */}
                <div className="px-5 py-3 bg-navy-950/80 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Status: Ready for Interview</span>
                  </div>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>github/{personalInfo.githubUsername}</span>
                  </a>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
