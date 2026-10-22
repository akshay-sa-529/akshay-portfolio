import React, { useEffect } from 'react';
import { personalInfo, educationData, featuredProject } from '../data/portfolioData';
import { 
  X, 
  Download, 
  FileText, 
  GraduationCap, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink 
} from 'lucide-react';

export default function ResumeModal({ isOpen, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-modal-title"
    >
      <div 
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col rounded-3xl bg-navy-900 border border-slate-700/80 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-navy-950 border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-cyan-950 text-cyan-400 border border-cyan-800/60 flex items-center justify-center">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <h3 id="resume-modal-title" className="text-base font-bold text-white">
                {personalInfo.name} — Resume Overview
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {personalInfo.title}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/resume.pdf"
              download="Akshay_S_A_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all shadow-sm"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 overflow-y-auto space-y-6 text-slate-300 text-sm">
          
          {/* Quick Notice on PDF placement */}
          <div className="p-3.5 rounded-xl bg-cyan-950/40 border border-cyan-800/40 text-xs text-cyan-200 flex items-start gap-2.5">
            <AlertCircle className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong>For Recruiters & Evaluators: </strong>
              Clicking <strong>Download PDF</strong> will fetch the official resume from <code className="bg-navy-950 px-1 py-0.5 rounded text-cyan-300">/resume.pdf</code>. All information displayed below is grounded directly in Akshay's verified resume.
            </div>
          </div>

          {/* Contact Strip */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs bg-navy-950/70 p-4 rounded-xl border border-slate-800">
            <div>
              <span className="text-slate-500 block">Email:</span>
              <a href={`mailto:${personalInfo.email}`} className="text-cyan-400 hover:underline font-mono">
                {personalInfo.email}
              </a>
            </div>
            <div>
              <span className="text-slate-500 block">Phone:</span>
              <span className="text-slate-200 font-mono">{personalInfo.phoneFormatted}</span>
            </div>
            <div>
              <span className="text-slate-500 block">Location:</span>
              <span className="text-slate-200">{personalInfo.location}</span>
            </div>
            <div>
              <span className="text-slate-500 block">GitHub:</span>
              <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline font-mono">
                akshay-sa-529
              </a>
            </div>
          </div>

          {/* Education Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider flex items-center gap-1.5 font-bold">
              <GraduationCap className="w-4 h-4 text-cyan-400" />
              <span>Education</span>
            </h4>
            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <div className="font-bold text-white text-sm">{educationData.degree} ({educationData.specialization})</div>
                <div className="text-slate-400 text-xs">{educationData.college} • {educationData.location}</div>
                <div className="text-xs text-indigo-400 mt-0.5 font-mono">{educationData.currentYear}</div>
              </div>
              <div className="sm:text-right">
                <span className="text-xs text-slate-400 block font-mono">Current CGPA</span>
                <span className="text-lg font-bold text-cyan-400 font-mono">{educationData.cgpa}</span>
              </div>
            </div>
          </div>

          {/* Technical Skills Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
              Technical Skill Summary
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
              <div className="p-3 rounded-xl bg-navy-950/60 border border-slate-800">
                <strong className="text-cyan-300">Programming:</strong> Python, C, Java, OOP concepts, basic DSA
              </div>
              <div className="p-3 rounded-xl bg-navy-950/60 border border-slate-800">
                <strong className="text-cyan-300">AI & ML:</strong> AI fundamentals, ML fundamentals, data preprocessing, model evaluation
              </div>
              <div className="p-3 rounded-xl bg-navy-950/60 border border-slate-800">
                <strong className="text-cyan-300">Data & DB:</strong> SQL, NumPy, Pandas, basic data analysis
              </div>
              <div className="p-3 rounded-xl bg-navy-950/60 border border-slate-800">
                <strong className="text-cyan-300">Vision & Tools:</strong> OpenCV, image/video processing, Git, GitHub, VS Code
              </div>
            </div>
          </div>

          {/* Featured Project */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
              Key Project: {featuredProject.title}
            </h4>
            <div className="p-4 rounded-xl bg-navy-950/60 border border-slate-800 space-y-2 text-xs">
              <div className="flex gap-2">
                <span className="text-cyan-400 font-mono font-medium">Stack:</span>
                <span className="text-slate-300 font-mono">{featuredProject.technologies.join(', ')}</span>
              </div>
              <p className="text-slate-300 leading-relaxed">
                {featuredProject.description}
              </p>
              <ul className="list-disc list-inside space-y-1 text-slate-400">
                <li>Intent recognition and text preprocessing pipelines.</li>
                <li>Engineered context-aware prompts for dynamic LLM API responses.</li>
                <li>Persistent conversation histories and session auditing in SQL.</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-navy-950 border-t border-slate-800 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-400">
          <span>Targeting Internships & Graduate Engineer Trainee (GET) Roles</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 transition-colors"
            >
              Close
            </button>
            <a
              href="/resume.pdf"
              download="Akshay_S_A_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg font-bold bg-cyan-500 hover:bg-cyan-400 text-slate-950 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
