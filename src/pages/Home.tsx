import { Code, User, Mail, FileText, TerminalSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <span className="font-doto text-sm text-muted-foreground block">
          Hola I'm <span className="not-italic">👋🏻</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase font-doto">Sachin Parashar</h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.1em] text-muted-foreground max-w-xl leading-relaxed">
          I work on AI, LLMs, and building full-stack SaaS tools.
        </p>

        <div className="flex items-center gap-4 pt-4">
          <button className="btn" onClick={() => alert('npx sachindev coming soon!')}>
            <TerminalSquare className="w-4 h-4 mr-2" />
            npx sachindev
          </button>
          <span className="text-[10px] text-white/40 lowercase flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180">
              <path d="M9 10l3-3 3 3"/><path d="M12 7v10"/>
            </svg>
            try this in<br/>your terminal
          </span>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-doto uppercase font-bold">About Me</h2>
        <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
          <p>
            I'm Sachin, an <strong className="text-white">Applied AI Engineer</strong> and undergraduate who learns by building intelligent systems. I specialize in integrating language models, prompt engineering, and building scalable applications with Next.js and Python.
          </p>
          <p>
            Currently in my 7th semester at AKGEC, Ghaziabad. I care about code that works in production, not just in notebooks. I've built everything from full-stack SaaS platforms to movie recommendation engines handling thousands of records.
          </p>
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
          <a href="mailto:s.parashar2806@gmail.com" className="btn">
            <Mail className="w-4 h-4 mr-2" /> Email
          </a>
        </div>
      </section>

    </div>
  );
};

export default Home;
