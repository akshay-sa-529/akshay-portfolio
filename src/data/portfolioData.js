/**
 * Centralized data source for Akshay S A's Portfolio
 * Strictly reflects uploaded resume details without exaggeration or invented credentials.
 */

export const personalInfo = {
  name: "Akshay S A",
  title: "AI & ML Engineering Student | Software Development",
  headline: "AI & ML Engineering Student | Software Development",
  location: "Mangaluru, Karnataka, India",
  email: "akshayshaiva777@gmail.com",
  phone: "7892169296",
  phoneFormatted: "+91 7892169296",
  github: "https://github.com/akshay-sa-529",
  githubUsername: "akshay-sa-529",
  currentAcademicYear: "Third Year",
  degree: "B.E. in Artificial Intelligence and Machine Learning",
  college: "A J Institute of Engineering and Technology (AJIET)",
  cgpa: "8.56 / 10",
  statusTag: "Open to Internships & GET Roles",
  shortIntro: "Motivated third-year AI & ML engineering student at AJIET Mangaluru with a strong academic record (8.56 CGPA), hands-on Python experience, machine learning foundations, and a solid software engineering background."
};

export const aboutData = {
  narrative: [
    "I am a third-year undergraduate engineering student pursuing a Bachelor of Engineering in Artificial Intelligence and Machine Learning at A J Institute of Engineering and Technology (AJIET), Mangaluru, with a current CGPA of 8.56/10.",
    "My technical journey is grounded in building a clean bridge between mathematical foundations and runnable software. I focus on developing clean, maintainable Python code, understanding data transformation pipelines with NumPy and Pandas, and applying machine learning models with rigorous evaluation.",
    "Beyond algorithms, I value good engineering discipline: writing modular object-oriented code, navigating version control with Git, and structuring persistent systems using SQL. I am actively seeking internship opportunities and entry-level engineering roles where I can contribute meaningfully to real-world software and AI products."
  ],
  quickStats: [
    { label: "Current CGPA", value: "8.56 / 10", subtext: "Consistent academic excellence" },
    { label: "Academic Standing", value: "3rd Year B.E.", subtext: "Artificial Intelligence & ML" },
    { label: "Primary Stack", value: "Python & SQL", subtext: "ML, NLP, Core Development" },
    { label: "Target Roles", value: "Intern & GET", subtext: "AI/ML & Software Dev" }
  ],
  languages: [
    { name: "English", level: "Professional working proficiency" },
    { name: "Kannada", level: "Native / Full proficiency" },
    { name: "Hindi", level: "Conversational proficiency" }
  ],
  interests: [
    { name: "Music", icon: "Headphones", desc: "Enjoying diverse genres while coding" },
    { name: "Gaming", icon: "Gamepad2", desc: "Strategy and interactive narratives" },
    { name: "Sports", icon: "Activity", desc: "Staying active and team spirit" },
    { name: "Coding & Projects", icon: "Code2", desc: "Building practical scripts & AI utilities" },
    { name: "Emerging Tech", icon: "Cpu", desc: "Tracking AI breakthroughs and tooling" }
  ]
};

export const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code",
    description: "Core languages and object-oriented foundations for structured software development.",
    skills: [
      { name: "Python", highlight: true, note: "Primary language for AI/ML & scripting" },
      { name: "C", highlight: false, note: "Low-level foundations & memory fundamentals" },
      { name: "Java", highlight: false, note: "Object-oriented programming principles" },
      { name: "OOP Concepts", highlight: true, note: "Encapsulation, inheritance, modularity" },
      { name: "Basic DSA", highlight: false, note: "Arrays, lists, basic complexity analysis" }
    ]
  },
  {
    id: "aiml",
    title: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Theoretical grounding and practical application of learning systems.",
    skills: [
      { name: "AI Fundamentals", highlight: true, note: "Search, agents, problem formulations" },
      { name: "ML Fundamentals", highlight: true, note: "Supervised & unsupervised learning" },
      { name: "Data Preprocessing", highlight: true, note: "Normalization, encoding, feature cleaning" },
      { name: "Model Evaluation", highlight: false, note: "Accuracy, precision, recall, validation" }
    ]
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: "Database",
    description: "Working with structured datasets, numerical arrays, and query languages.",
    skills: [
      { name: "SQL", highlight: true, note: "Relational queries, schema design, joins" },
      { name: "NumPy", highlight: true, note: "Vectorized numerical operations" },
      { name: "Pandas", highlight: true, note: "Dataframes, wrangling, filtering" },
      { name: "Basic Data Analysis", highlight: false, note: "Summary statistics & exploratory checks" }
    ]
  },
  {
    id: "computervision",
    title: "Computer Vision",
    icon: "ScanEye",
    description: "Foundational visual computing and video stream operations.",
    skills: [
      { name: "OpenCV", highlight: true, note: "Image manipulation & color space conversions" },
      { name: "Image Processing", highlight: false, note: "Thresholding, edge detection, filtering" },
      { name: "Video Processing", highlight: false, note: "Frame extraction & stream inspection" }
    ]
  },
  {
    id: "tools",
    title: "Tools & Environment",
    icon: "Wrench",
    description: "Daily developer workflows, version control, and debugging environments.",
    skills: [
      { name: "Git", highlight: true, note: "Version control & commit hygiene" },
      { name: "GitHub", highlight: true, note: "Remote repos, collaboration & branches" },
      { name: "VS Code", highlight: false, note: "IDE, extensions, and workflow tuning" },
      { name: "Debugging", highlight: false, note: "Systematic error isolation & logging" }
    ]
  },
  {
    id: "software",
    title: "Software Concepts",
    icon: "Layers",
    description: "Engineering methodologies, analytical thinking, and API integration concepts.",
    skills: [
      { name: "Problem-Solving", highlight: true, note: "Algorithmic breakdown of tasks" },
      { name: "Algorithms", highlight: false, note: "Step-by-step logic and optimization" },
      { name: "SDLC Basics", highlight: false, note: "Software development lifecycle stages" },
      { name: "REST / API Concepts", highlight: true, note: "HTTP methods, JSON payloads, endpoints" }
    ]
  }
];

export const additionalInterests = [
  "Generative AI",
  "NLP",
  "Prompt Engineering",
  "Data Analytics",
  "Software Development"
];

export const featuredProject = {
  id: "ai-chatbot",
  title: "Context-Aware AI Chatbot",
  badge: "Featured AI/ML Project",
  headline: "Intelligent conversational assistant with intent recognition, dynamic prompt design, and SQL persistence",
  technologies: ["Python", "NLP", "LLM APIs", "SQL"],
  description: "An end-to-end intelligent chatbot solution designed to understand natural-language inputs and deliver contextually coherent answers. The architecture implements NLP preprocessing and intent classification, orchestrates LLM API prompts, and securely persists conversation threads and user session data in a relational SQL database.",
  highlights: [
    {
      title: "Context-Aware Natural Language Responses",
      detail: "Formulates natural-sounding replies aligned with ongoing user queries rather than isolated single-turn prompts."
    },
    {
      title: "Intent Recognition & Text Preprocessing",
      detail: "Cleans input text, tokenizes, and identifies underlying intent to route requests to appropriate prompt structures."
    },
    {
      title: "Prompt Design for LLM APIs",
      detail: "Engineers structured prompt contexts and constraints for high-reliability outputs when calling LLM endpoints."
    },
    {
      title: "SQL-Backed Conversation History",
      detail: "Logs user interactions, session metadata, and dialogue turns into an SQL database for stateful multi-turn persistence."
    },
    {
      title: "Real-Time Chat Interface",
      detail: "Provides a clean, lightweight interactive interface enabling smooth, responsive back-and-forth messaging."
    }
  ],
  architectureSteps: [
    {
      step: "01",
      title: "Input & Preprocessing",
      desc: "User query is received, sanitized, normalized, and prepared for intent evaluation."
    },
    {
      step: "02",
      title: "Intent Recognition & Prompting",
      desc: "Maps user query to relevant context; constructs optimized prompt templates for LLM API invocation."
    },
    {
      step: "03",
      title: "SQL State Management",
      desc: "Reads past conversation context and writes the current turn to SQL tables to preserve memory."
    },
    {
      step: "04",
      title: "Response Delivery",
      desc: "Generates context-aware, coherent responses delivered with low latency to the user."
    }
  ],
  githubUrl: "https://github.com/akshay-sa-529",
  githubNote: "Explore Akshay's repositories and codebases on GitHub."
};

export const educationData = {
  college: "A J Institute of Engineering and Technology (AJIET)",
  degree: "Bachelor of Engineering (B.E.)",
  specialization: "Artificial Intelligence and Machine Learning",
  location: "Mangaluru, Karnataka, India",
  currentYear: "Third Year (Enrolled)",
  cgpa: "8.56 / 10",
  overview: "Enrolled in a comprehensive four-year engineering program specializing in AI and Machine Learning. Building rigorous theoretical and practical foundations in computing, mathematics, machine intelligence, data systems, and software engineering.",
  coreSubjects: [
    "Machine Learning Foundations",
    "Artificial Intelligence Systems",
    "Database Management Systems (DBMS & SQL)",
    "Object-Oriented Programming (Java / Python)",
    "Data Structures & Algorithms",
    "Computer Vision & Image Processing",
    "Software Engineering & SDLC"
  ]
};

export const coursesAndLearning = {
  intro: "A dedicated regimen of completed coursework and self-directed study to build practical competency in artificial intelligence, software development, and data systems. Accurately documented as learning curricula.",
  items: [
    {
      id: 1,
      title: "AI Essentials",
      domain: "Artificial Intelligence",
      tag: "Foundations",
      summary: "Exploration of fundamental AI concepts, history, modern problem solving paradigms, and real-world system applications."
    },
    {
      id: 2,
      title: "Prompt Engineering",
      domain: "Generative AI",
      tag: "Applied AI",
      summary: "Designing structured instructions, few-shot prompts, chain-of-thought strategies, and constraint formulation for LLMs."
    },
    {
      id: 3,
      title: "AI Fundamentals",
      domain: "Artificial Intelligence",
      tag: "Core Principles",
      summary: "State-space search, heuristic algorithms, knowledge representation, and autonomous agent frameworks."
    },
    {
      id: 4,
      title: "Python Programming & Problem Solving",
      domain: "Programming",
      tag: "Core Development",
      summary: "Mastering idiomatic Python, modular structure, algorithmic thinking, file I/O, and structured error handling."
    },
    {
      id: 5,
      title: "Machine Learning Foundations",
      domain: "Machine Learning",
      tag: "Core ML",
      summary: "Supervised and unsupervised learning, loss formulation, model training, cross-validation, and performance metrics."
    },
    {
      id: 6,
      title: "SQL & Database Fundamentals",
      domain: "Databases & Data",
      tag: "Data Persistence",
      summary: "Relational database design, table relationships, DDL/DML, aggregations, and subqueries for data pipelines."
    },
    {
      id: 7,
      title: "Generative AI Fundamentals",
      domain: "Generative AI",
      tag: "Modern AI",
      summary: "Architecture of transformer models, attention mechanisms, tokenization pipelines, and foundational model concepts."
    }
  ]
};

export const careerInterests = {
  statement: "I am actively looking for internship, co-op, and graduate engineer trainee (GET) opportunities where I can apply my Python development, machine learning foundations, and technical problem-solving skills to high-impact projects.",
  targetRoles: [
    {
      title: "AI/ML Engineering Intern",
      icon: "Brain",
      description: "Assisting in data preparation, model experimentation, evaluation, and deploying machine learning pipelines."
    },
    {
      title: "Junior Software Developer",
      icon: "Code",
      description: "Building clean application features, writing modular code, integrating APIs, and participating in code reviews."
    },
    {
      title: "Python Developer",
      icon: "Terminal",
      description: "Creating backend utilities, data ingestion scripts, automated workflows, and REST-oriented services."
    },
    {
      title: "Data & AI Intern",
      icon: "BarChart3",
      description: "Performing exploratory data analysis with Pandas/SQL, wrangling messy datasets, and generating quantitative insights."
    },
    {
      title: "Graduate Engineer Trainee (GET)",
      icon: "GraduationCap",
      description: "Rigorous entry-level engineering training across full software lifecycles and modern enterprise tech stacks."
    }
  ],
  candidateStrengths: [
    { label: "High Academic Standing", text: "8.56 / 10 CGPA demonstrating discipline, learning speed, and consistency." },
    { label: "AI & Software Fusion", text: "Combines ML understanding with practical Python, SQL, and OOP implementation." },
    { label: "Ready to Adapt", text: "Fast learner eager to pick up new frameworks, internal tools, and engineering workflows." }
  ]
};
