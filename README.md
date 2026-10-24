# Akshay S A — Personal Portfolio Website
> **AI & ML Engineering Student | Software Development**  
> B.E. in Artificial Intelligence and Machine Learning · A J Institute of Engineering and Technology (AJIET), Mangaluru  
> CGPA: **8.56 / 10** · Location: **Mangaluru, Karnataka, India**

---

## 📌 Overview

This repository contains a complete, production-ready personal portfolio website for **Akshay S A**. Crafted specifically for campus placements, internship applications, and technology company recruiters, the website highlights academic rigor, machine learning foundations, Python programming expertise, and practical software engineering capabilities.

### 🌟 Key Highlights
- **Factual Accuracy**: 100% grounded in Akshay's verified resume without exaggerated titles or fabricated credentials.
- **Modern Tech Aesthetic**: Deep Navy/Charcoal theme (`#060913`, `#0a0f1d`) with high-contrast Cyan (`#06b6d4`), Violet, and Emerald accents.
- **Interactive Project Showcase**: Complete architecture breakdown and an interactive live simulator for the flagship **AI Chatbot** (Python, NLP, LLM APIs, SQL).
- **Recruiter First UX**: Direct one-click email/phone copying, resume preview modal, downloadable PDF support, responsive mobile navigation, and clear career objective alignment.

---

## 🗂️ Project Structure

```
akshay-portfolio/
├── public/
│   ├── resume.pdf             # Downloadable resume PDF (replace with your exported PDF)
│   ├── README-RESUME.txt      # Instructions for placing your resume
│   └── robots.txt             # SEO crawler rules
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky blur header with active scroll spy & mobile menu
│   │   ├── Hero.jsx           # High-impact introduction, status pill & Python code box
│   │   ├── About.jsx          # Academic narrative, metrics, languages & personal interests
│   │   ├── Skills.jsx         # Categorized skills matrix with interactive category filter
│   │   ├── Projects.jsx       # Featured AI Chatbot showcase with architecture & simulator
│   │   ├── ChatbotSimulator.jsx # Interactive live demo preview for the AI Chatbot
│   │   ├── Education.jsx      # AJIET degree details, 8.56 CGPA, and core curriculum
│   │   ├── Courses.jsx        # Transparent record of completed coursework and modules
│   │   ├── CareerInterests.jsx# Target roles (AI/ML, Python, Software, GET) & strengths
│   │   ├── Contact.jsx        # Direct contact cards, copy actions & validated form
│   │   ├── ResumeModal.jsx    # Accessible modal for quick resume review and download
│   │   └── Footer.jsx         # Copyright, back-to-top, and developer links
│   ├── data/
│   │   └── portfolioData.js   # Single source of truth for all portfolio content
│   ├── App.jsx                # Main layout and modal state coordinator
│   ├── index.css              # Custom scrollbars, glow utilities & Tailwind directives
│   └── main.jsx               # React 19 application entry point
├── .env.example               # Template for optional contact form service
├── .gitignore                 # Standard Node/Vite ignore rules
├── index.html                 # Page title, SEO meta tags, and typography imports
├── package.json               # Dependencies and scripts
├── postcss.config.js          # PostCSS configuration
├── tailwind.config.js         # Color scheme and styling extensions
└── vite.config.js             # Vite bundler configuration
```

---

## 🚀 Quick Start (Local Setup)

### 1. Prerequisites
Ensure you have **Node.js** (v18 or higher) installed on your machine.
Verify with:
```bash
node -v
npm -v
```

### 2. Navigate to Project Directory
```bash
cd "C:\Users\aksha\.gemini\antigravity\scratch\akshay-portfolio"
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to:
```
http://localhost:3000
```

### 5. Build for Production
To create an optimized production build:
```bash
npm run build
```
The output will be placed in the `dist/` directory ready for deployment.

---

## 📄 Managing Your Resume PDF

1. Export your latest resume as a PDF file from your document editor (e.g. Canva, Overleaf, Microsoft Word).
2. Save or copy it into the `public/` directory:
   ```
   akshay-portfolio/public/resume.pdf
   ```
3. Ensure the filename is exactly `resume.pdf`.
4. Any visitor clicking **"Download Resume"** or **"Download PDF"** will immediately receive your official PDF.

---

## 🔗 Updating Links & Data

All personal details, skills, links, and project descriptions are centralized in a single file:
`src/data/portfolioData.js`

- **GitHub Profile**: Already set to `https://github.com/akshay-sa-529`
- **Specific Project Repository**: To update the repository link for the AI Chatbot once created, edit `featuredProject.githubUrl` in `src/data/portfolioData.js`.
- **Contact Details**: Email (`akshayshaiva777@gmail.com`) and Phone (`7892169296`) can be edited in `personalInfo`.

---

## 📬 Contact Form Configuration

By default, the contact form validates input fields and smoothly opens the visitor's native email client with all details pre-filled (`mailto:` scheme).

If you want automated serverless inbox delivery without leaving the page:
1. Sign up for a free endpoint at [Formspree](https://formspree.io) or [Web3Forms](https://web3forms.com).
2. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
3. Set your endpoint URL:
   ```env
   VITE_CONTACT_FORM_ENDPOINT=https://formspree.io/f/your_unique_id
   ```
4. Restart the dev server (`npm run dev`). The form will automatically dispatch messages directly to your inbox via AJAX!

---

## 🌐 Deployment Instructions

### Deploy to Vercel (Recommended)
1. Push this project to your GitHub account::
   ```bash
   git init
   git add .
   git commit -m "Initial commit of Akshay S A AI/ML Portfolio"
   git branch -M main
   git remote add origin https://github.com/akshay-sa-529/portfolio.git
   git push -u origin main
   ```
2. Go to [vercel.com](https://vercel.com) and log in with GitHub.
3. Click **"Add New"** > **"Project"** and select your `portfolio` repository.
4. Framework preset will automatically detect **Vite**.
5. Click **"Deploy"**. Your website will be live worldwide in under 60 seconds with automatic HTTPS and free hosting.

### Deploy to Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Click **"Add new site"** > **"Import an existing project"** > **GitHub**.
3. Select your repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Click **"Deploy site"**.

---

## ✅ Quality & Pre-Deployment Checklist

- [x] **Resume Accuracy**: Verified against resume details (AJIET, 3rd Year, 8.56 CGPA, Python/ML/SQL/OpenCV).
- [x] **No Fake Credentials**: Coursework presented truthfully as learning modules without fake certifications.
- [x] **Responsive Design**: Verified for mobile, tablet, laptop, and ultra-wide displays.
- [x] **Working Navigation**: Smooth anchor scrolling to all 7 sections with sticky navbar and mobile menu.
- [x] **Direct Contacts**: Tested one-click email copying, phone copying, and mailto triggers.
- [x] **Interactive Demonstration**: AI Chatbot interactive simulator with NLP token and SQL transaction inspection.
- [x] **Fast Performance**: Lightweight React 19 bundle powered by Vite and tree-shaken Lucide icons.
- [x] **Clean SEO**: Proper meta description, Open Graph tags, and custom SVG branding.
