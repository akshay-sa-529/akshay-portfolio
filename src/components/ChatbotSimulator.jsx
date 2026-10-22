import React, { useState } from 'react';
import { Send, Bot, User, Database, Sparkles, Terminal, RotateCcw } from 'lucide-react';

const PRESET_QUERIES = [
  {
    query: "What machine learning and programming skills does Akshay have?",
    intent: "SKILLS_INQUIRY",
    preprocessed: "tokens: ['machine', 'learning', 'programming', 'skills', 'akshay']",
    sqlRecord: "INSERT INTO conversation_logs (user_id, intent, session_state) VALUES ('recruiter_01', 'SKILLS_INQUIRY', 'active');",
    response: "Akshay specializes in Python for AI/ML, with hands-on practice in NumPy, Pandas, model evaluation, and data preprocessing. He also possesses foundational skills in C, Java, SQL, and OpenCV for computer vision, backed by an 8.56/10 CGPA at AJIET."
  },
  {
    query: "Explain the architecture of this AI Chatbot project.",
    intent: "PROJECT_ARCHITECTURE",
    preprocessed: "tokens: ['architecture', 'ai', 'chatbot', 'project', 'pipeline']",
    sqlRecord: "INSERT INTO conversation_logs (user_id, intent, session_state) VALUES ('recruiter_01', 'PROJECT_ARCHITECTURE', 'active');",
    response: "The AI Chatbot pipeline begins with user text input preprocessing and intent classification. It dynamically formats engineered prompt contexts for LLM APIs, while maintaining session memory and auditing interactions using an SQL database."
  },
  {
    query: "What are Akshay's target career roles and availability?",
    intent: "CAREER_ROLES_INQUIRY",
    preprocessed: "tokens: ['career', 'roles', 'internship', 'graduate', 'availability']",
    sqlRecord: "INSERT INTO conversation_logs (user_id, intent, session_state) VALUES ('recruiter_01', 'CAREER_ROLES_INQUIRY', 'active');",
    response: "Akshay is currently in his 3rd year at AJIET Mangaluru and is actively seeking AI/ML engineering internships, junior software developer roles, Python development positions, and Graduate Engineer Trainee (GET) opportunities."
  }
];

export default function ChatbotSimulator() {
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: "Hello! I am the interactive demonstration simulator for Akshay's AI Chatbot project. Ask a question or click a suggested prompt to inspect the NLP pipeline, prompt structure, and SQL persistence.",
      intent: 'GREETING_WELCOME',
      preprocessed: 'tokens: [greet, welcome]',
      sqlRecord: 'SELECT user_history FROM chat_sessions WHERE session_id = 1;'
    }
  ]);
  const [input, setInput] = useState('');
  const [activeDebugTab, setActiveDebugTab] = useState('nlp');
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSend = (textToSend) => {
    const query = textToSend || input;
    if (!query.trim()) return;

    // Add user message
    const userMsg = { sender: 'user', text: query };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsProcessing(true);

    // Determine matching preset or generate dynamic response
    setTimeout(() => {
      const matched = PRESET_QUERIES.find(
        (p) => p.query.toLowerCase() === query.toLowerCase()
      ) || {
        query: query,
        intent: 'GENERAL_INQUIRY',
        preprocessed: `tokens: [${query.toLowerCase().replace(/[^a-z0-9 ]/g, '').split(' ').filter(Boolean).slice(0, 5).join(', ')}]`,
        sqlRecord: `INSERT INTO conversation_logs (query, intent, timestamp) VALUES ('${query.replace(/'/g, "''").slice(0, 30)}...', 'GENERAL_INQUIRY', NOW());`,
        response: `Thank you for asking: "${query}". Akshay's chatbot pipeline processes this input using tokenization and intent detection, generates an engineered prompt for LLM API synthesis, and logs conversation state to SQL.`
      };

      setMessages((prev) => [
        ...prev,
        {
          sender: 'bot',
          text: matched.response,
          intent: matched.intent,
          preprocessed: matched.preprocessed,
          sqlRecord: matched.sqlRecord
        }
      ]);
      setIsProcessing(false);
    }, 600);
  };

  const handleReset = () => {
    setMessages([
      {
        sender: 'bot',
        text: "Simulator reset. Select a sample prompt below or type your query to test the NLP pipeline.",
        intent: 'SYSTEM_RESET',
        preprocessed: 'tokens: [system, reset]',
        sqlRecord: 'TRUNCATE TABLE temp_session_buffer;'
      }
    ]);
  };

  const latestBotMessage = [...messages].reverse().find((m) => m.sender === 'bot') || messages[0];

  return (
    <div className="rounded-2xl bg-navy-950 border border-slate-800 shadow-2xl overflow-hidden">
      
      {/* Simulator Top Bar */}
      <div className="px-5 py-3.5 bg-navy-900 border-b border-slate-800 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-cyan-950 border border-cyan-500/40 text-cyan-400 flex items-center justify-center">
            <Bot className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-bold text-white flex items-center gap-2">
              <span>AI Chatbot • Interactive Pipeline Demo</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950 text-emerald-400 border border-emerald-800/40">
                Live Simulator
              </span>
            </div>
            <div className="text-xs text-slate-400 font-mono">
              Python • NLP • LLM APIs • SQL
            </div>
          </div>
        </div>

        <button
          onClick={handleReset}
          className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors text-xs flex items-center gap-1"
          title="Reset conversation"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline">Reset</span>
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[380px]">
        
        {/* Chat Interface Panel (7 Cols) */}
        <div className="lg:col-span-7 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-slate-800 bg-navy-950/60 p-4">
          
          {/* Messages Scroll Area */}
          <div className="space-y-3.5 max-h-[300px] overflow-y-auto pr-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex items-start gap-2.5 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.sender === 'bot' && (
                  <div className="w-7 h-7 rounded-lg bg-cyan-950/80 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 text-xs">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                )}
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-xs sm:text-sm leading-relaxed ${
                    msg.sender === 'user'
                      ? 'bg-cyan-600 text-slate-950 font-medium rounded-tr-none'
                      : 'bg-navy-900 border border-slate-800 text-slate-200 rounded-tl-none'
                  }`}
                >
                  {msg.text}
                </div>
                {msg.sender === 'user' && (
                  <div className="w-7 h-7 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 flex items-center justify-center shrink-0 text-xs">
                    <User className="w-3.5 h-3.5" />
                  </div>
                )}
              </div>
            ))}

            {isProcessing && (
              <div className="flex items-center gap-2 text-xs text-cyan-400 font-mono py-2">
                <span className="animate-spin">⚙️</span>
                <span>Executing NLP preprocessing & prompt design...</span>
              </div>
            )}
          </div>

          {/* Quick Preset Buttons */}
          <div className="pt-3 border-t border-slate-800/80">
            <div className="text-[11px] text-slate-400 mb-2 font-mono flex items-center gap-1.5">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>Suggested sample queries to test architecture:</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {PRESET_QUERIES.map((preset, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(preset.query)}
                  className="text-[11px] text-slate-300 hover:text-cyan-300 bg-navy-900 hover:bg-slate-800 px-2.5 py-1 rounded-lg border border-slate-800 hover:border-cyan-800/60 transition-all text-left"
                >
                  "{preset.query.slice(0, 32)}..."
                </button>
              ))}
            </div>

            {/* Input Field */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="flex items-center gap-2 mt-3"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message or question..."
                className="flex-1 bg-navy-900 border border-slate-800 rounded-xl px-3.5 py-2 text-xs sm:text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/70"
              />
              <button
                type="submit"
                disabled={!input.trim()}
                className="p-2.5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-40 text-slate-950 font-bold rounded-xl transition-all"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* Backend Pipeline Inspector (5 Cols) */}
        <div className="lg:col-span-5 bg-navy-900/40 p-4 flex flex-col justify-between font-mono text-xs">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-semibold text-slate-200 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                Pipeline Telemetry
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveDebugTab('nlp')}
                  className={`px-2 py-0.5 rounded text-[10px] ${
                    activeDebugTab === 'nlp' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : 'text-slate-400'
                  }`}
                >
                  NLP / Intent
                </button>
                <button
                  onClick={() => setActiveDebugTab('sql')}
                  className={`px-2 py-0.5 rounded text-[10px] ${
                    activeDebugTab === 'sql' ? 'bg-cyan-950 text-cyan-300 border border-cyan-800' : 'text-slate-400'
                  }`}
                >
                  SQL Storage
                </button>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              {activeDebugTab === 'nlp' ? (
                <div className="space-y-2 text-slate-300">
                  <div>
                    <span className="text-slate-500">Detected Intent:</span>
                    <div className="text-emerald-400 font-bold bg-navy-950 px-2 py-1 rounded border border-slate-800 mt-1">
                      {latestBotMessage.intent || 'IDLE_WAITING'}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500">NLP Token Stream:</span>
                    <div className="text-cyan-300 text-[11px] bg-navy-950 px-2 py-1 rounded border border-slate-800 mt-1 overflow-x-auto">
                      {latestBotMessage.preprocessed || 'No stream active'}
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500">Prompt Engineering Template:</span>
                    <div className="text-slate-400 text-[10px] bg-navy-950 p-2 rounded border border-slate-800 mt-1 leading-snug">
                      system_prompt = "You are Akshay's technical representative. Answer contextually using verified facts from resume..."
                    </div>
                  </div>
                </div>
              ) : (
                <div className="space-y-2 text-slate-300">
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Database className="w-3 h-3 text-indigo-400" />
                    <span>SQL Transaction Log:</span>
                  </div>
                  <pre className="text-[10px] bg-navy-950 p-2.5 rounded border border-slate-800 text-indigo-300 whitespace-pre-wrap break-all">
                    {latestBotMessage.sqlRecord || '-- Waiting for transaction'}
                  </pre>
                  <p className="text-[10px] text-slate-500 leading-normal">
                    Demonstrates conversational memory persistence: storing session IDs, timestamps, and intent tags in relational tables.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="pt-3 border-t border-slate-800/80 text-[10px] text-slate-500">
            Simulates Akshay's Python + NLP + LLM + SQL workflow.
          </div>
        </div>

      </div>
    </div>
  );
}
