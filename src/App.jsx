import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Courses from './components/Courses';
import CareerInterests from './components/CareerInterests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const handleOpenResume = () => setIsResumeModalOpen(true);
  const handleCloseResume = () => setIsResumeModalOpen(false);

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      {/* Navigation Bar */}
      <Navbar onOpenResume={handleOpenResume} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenResume={handleOpenResume} />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Courses />
        <CareerInterests />
        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Downloadable / Accessible Resume Modal */}
      <ResumeModal 
        isOpen={isResumeModalOpen} 
        onClose={handleCloseResume} 
      />
    </div>
  );
}
