import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Code, User, Mail, FileDown, ArrowRight, Copy, Check, Smartphone, Bot, Users } from 'lucide-react';

const EMAIL = 's.parashar2806@gmail.com';

const highlights = [
  {
    icon: Smartphone,
    title: 'Production apps',
    body: 'I ship the Clinicals internal and mentors apps: React + TypeScript + Supabase, released as Android APKs and PWAs.',
  },
  {
    icon: Bot,
    title: 'AI backends',
    body: 'RAG assistants, LLM scoring pipelines and FastAPI services built on Groq, LLaMA and LangChain.',
  },
  {
    icon: Users,
    title: 'Research lead',
    body: 'Leading a team of 4 on NOVA-ML, a multi-agent framework for automating ML pipelines.',
  },
];

const Home = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${EMAIL}`;
    }
  };

  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <span className="font-doto text-sm text-muted-foreground block">
          Hola I'm <span className="not-italic">👋🏻</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase font-doto">Sachin Parashar</h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.1em] text-muted-foreground max-w-xl leading-relaxed">
          Software developer shipping production apps by day. I also build AI backends, LLM tools and intelligent SaaS.
        </p>

        <Link
          to="/experience"
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 pl-3 pr-4 py-1.5 text-xs hover:border-white/25 transition-colors"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          <span className="text-muted-foreground">
            Currently <span className="text-white">Software Developer @ Clinicals</span>
          </span>
          <ArrowRight className="w-3 h-3 text-muted-foreground" />
        </Link>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a href="./resume.pdf" target="_blank" rel="noreferrer" className="btn bg-white text-black hover:bg-white/85">
            <FileDown className="w-4 h-4 mr-2" /> Resume
          </a>
          <button className="btn" onClick={copyEmail} aria-live="polite">
            {copied ? <Check className="w-4 h-4 mr-2" /> : <Copy className="w-4 h-4 mr-2" />}
            {copied ? 'Copied!' : 'Copy email'}
          </button>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-doto uppercase font-bold">About Me</h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            I'm Sachin, an <strong className="text-white">AI & ML undergraduate</strong> at AKGEC, Ghaziabad, now in my final year. I learn by building, and I care about code that works in production, not just in notebooks.
          </p>
          <p>
            At <strong className="text-white">Clinicals</strong> I build and ship the apps the company runs on. That covers the team's CRM, onboarding, payments and analytics app, and a mentors app I built from scratch. Both are released to Android and the web from a single React codebase backed by Supabase.
          </p>
          <p>
            Outside work I build with LLMs: RAG assistants, an ATS resume optimizer, a sales intelligence platform and a movie recommender. I also lead the <strong className="text-white">NOVA-ML</strong> multi-agent research project.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-doto uppercase font-bold">What I Do</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {highlights.map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="rounded-xl bg-white/[0.03] border border-white/10 p-5 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 space-y-3"
            >
              <Icon className="w-5 h-5 text-white/70" />
              <h3 className="font-doto font-bold text-white uppercase text-sm tracking-wide">{title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-4 pt-2 text-sm font-doto uppercase">
          <Link to="/experience" className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            See experience <ArrowRight className="w-3 h-3" />
          </Link>
          <Link to="/projects" className="inline-flex items-center gap-1 text-white/70 hover:text-white transition-colors">
            See projects <ArrowRight className="w-3 h-3" />
          </Link>
        </div>
      </section>

      <section className="space-y-4">
        <p className="font-doto text-sm text-muted-foreground">
          My <strong className="text-white">social links</strong> if you wish to connect
        </p>
        <div className="flex flex-wrap gap-2">
          <a href="https://github.com/SACHIN0280" target="_blank" rel="noreferrer" className="btn">
            <Code className="w-4 h-4 mr-2" /> GitHub
          </a>
          <a href="https://linkedin.com/in/sachin-parashar-94499b137" target="_blank" rel="noreferrer" className="btn">
            <User className="w-4 h-4 mr-2" /> LinkedIn
          </a>
          <a href={`mailto:${EMAIL}`} className="btn">
            <Mail className="w-4 h-4 mr-2" /> Email
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
