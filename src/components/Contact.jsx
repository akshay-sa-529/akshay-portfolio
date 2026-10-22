import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import GithubIcon from './GithubIcon';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  MessageSquare,
  Info,
  ShieldCheck,
  AlertCircle
} from 'lucide-react';

export default function Contact() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    info: null
  });

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === 'email') {
      setCopiedEmail(true);
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Client-side validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormStatus({
        submitting: false,
        success: false,
        error: 'Please fill in all required fields (Name, Email, Message).',
        info: null
      });
      return;
    }

    setFormStatus({ submitting: true, error: null, success: false, info: null });

    // Check if an external form service endpoint is configured
    const formEndpoint = import.meta.env.VITE_CONTACT_FORM_ENDPOINT;

    if (formEndpoint) {
      try {
        const response = await fetch(formEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
          },
          body: JSON.stringify(formData)
        });

        if (response.ok) {
          setFormStatus({
            submitting: false,
            success: true,
            error: null,
            info: 'Message transmitted successfully via configured form gateway.'
          });
          setFormData({ name: '', email: '', subject: '', message: '' });
          return;
        } else {
          throw new Error('Form service returned an error response.');
        }
      } catch (err) {
        // Fallback to mailto
      }
    }

    // Standard client-side fallback: Compose and open mailto
    const mailtoSubject = encodeURIComponent(
      formData.subject || `Inquiry from Portfolio - ${formData.name}`
    );
    const mailtoBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${personalInfo.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setFormStatus({
      submitting: false,
      success: true,
      error: null,
      info: 'Your native email application has been launched with your message pre-filled. You can also copy Akshay\'s email address directly below.'
    });
  };

  return (
    <section id="contact" className="py-20 bg-navy-900/60 relative border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/40 border border-cyan-800/40 text-cyan-400 text-xs font-mono uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5" />
            <span>Direct Outreach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Get In Touch
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Whether discussing internship opportunities, engineering projects, or campus placements, I look forward to connecting.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Communication Channels (5 Cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-cyan-400 transition-colors break-all"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                >
                  <span>Open in Mail Client</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.email, 'email')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Email</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Phone Card */}
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-950/80 border border-indigo-500/30 text-indigo-400 flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-indigo-400 transition-colors"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between">
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-xs text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                >
                  <span>Direct Call</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <button
                  onClick={() => copyToClipboard(personalInfo.phone, 'phone')}
                  className="text-xs text-slate-400 hover:text-white flex items-center gap-1 font-mono px-2 py-1 rounded bg-slate-900 border border-slate-800"
                >
                  {copiedPhone ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy Number</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-navy-950/80 border border-slate-800 flex flex-col justify-between group hover:border-slate-700 transition-all">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 text-slate-200 flex items-center justify-center">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    GitHub Profile
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    github.com/{personalInfo.githubUsername}
                  </div>
                </div>
              </div>
              <div className="mt-4 pt-3 border-t border-slate-800/70 flex items-center justify-between">
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-cyan-400 hover:text-cyan-300 font-medium flex items-center gap-1"
                >
                  <span>Visit GitHub Repository & Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Location & Academic Base Card */}
            <div className="p-5 rounded-2xl bg-navy-950/50 border border-slate-800/80 flex items-center gap-3 text-slate-300 text-xs sm:text-sm">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>
                Based in <strong>{personalInfo.location}</strong>. Open to on-site internships, hybrid, or remote technical roles.
              </span>
            </div>

          </div>

          {/* Interactive Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-navy-950/80 border border-slate-800 shadow-xl space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div>
                  <h3 className="text-xl font-bold text-white flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-cyan-400" />
                    <span>Send a Direct Message</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                    Enter your message to dispatch via email client or configured webhook.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 text-[11px] font-mono text-slate-400 bg-slate-900 px-2.5 py-1 rounded-md border border-slate-800">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>No Spam • Direct Inbox</span>
                </div>
              </div>

              {/* Status Banner */}
              {formStatus.error && (
                <div className="p-3.5 rounded-xl bg-rose-950/60 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{formStatus.error}</span>
                </div>
              )}

              {formStatus.info && (
                <div className="p-3.5 rounded-xl bg-cyan-950/60 border border-cyan-800/80 text-cyan-300 text-xs flex items-start gap-2">
                  <Info className="w-4 h-4 shrink-0 mt-0.5" />
                  <span>{formStatus.info}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-mono text-slate-300">
                      Your Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Sharma"
                      required
                      className="w-full bg-navy-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-xs font-mono text-slate-300">
                      Your Email <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="e.g. recruiter@company.com"
                      required
                      className="w-full bg-navy-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Subject Input */}
                <div className="space-y-1.5">
                  <label htmlFor="subject" className="text-xs font-mono text-slate-300">
                    Subject / Topic
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="e.g. AI/ML Internship Opportunity / Campus Interview"
                    className="w-full bg-navy-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors"
                  />
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-mono text-slate-300">
                    Message <span className="text-cyan-400">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Share role details, questions, or introductory note..."
                    required
                    className="w-full bg-navy-900 border border-slate-800 focus:border-cyan-500 rounded-xl px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus.submitting}
                  className="w-full py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/30 transition-all duration-200"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message Directly</span>
                </button>
              </form>

              {/* Honest Service Documentation Note */}
              <div className="pt-2 text-[11px] text-slate-500 leading-normal border-t border-slate-800/80">
                <span className="font-semibold text-slate-400">Backend Notice: </span>
                Clicking send triggers your native mail client pre-populated with your input. To connect an automated backend form service (e.g. Formspree or Web3Forms), simply configure <code className="text-cyan-400 bg-slate-900 px-1 py-0.5 rounded">VITE_CONTACT_FORM_ENDPOINT</code> in your <code className="text-cyan-400 bg-slate-900 px-1 py-0.5 rounded">.env</code> file.
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
