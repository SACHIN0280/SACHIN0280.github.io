import { Code, User, Mail, TerminalSquare } from 'lucide-react';

const Home = () => {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <span className="font-doto text-sm text-muted-foreground block">
          Hola I'm <span className="not-italic">👋🏻</span>
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight uppercase font-doto">Sachin Parashar</h1>
        <p className="text-xs sm:text-sm uppercase tracking-[0.1em] text-muted-foreground max-w-xl leading-relaxed">
          I work on AI backends, LLMs, and building intelligent SaaS applications.
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
            I'm Sachin, an <strong className="text-white">AI & ML Undergraduate</strong> at AKGEC, Ghaziabad, who learns by building intelligent systems. I specialize in integrating language models, advanced prompt engineering, and building robust AI backends with Python and FastAPI.
          </p>
          <p>
            Currently in my 7th semester, I care about code that works in production, not just in notebooks. I've built everything from AI-powered ATS resume optimizers and full-stack sales intelligence platforms to movie recommendation engines. I also lead research on multi-agent frameworks as part of the NOVA-ML project.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-2xl font-doto uppercase font-bold">Positions of Responsibility</h2>
        <div className="space-y-4">
          <div className="rounded-lg bg-white/5 border border-white/10 p-5 sm:p-6 hover:border-white/20 transition-all duration-300">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 mb-4">
              <div>
                <h3 className="font-bold text-white text-lg font-doto tracking-tight">Group Leader, NOVA-ML Project</h3>
                <p className="text-sm text-muted-foreground font-space mt-1">Multi-Agent Systems & Agentic AI Research</p>
              </div>
              <span className="text-xs font-space text-muted-foreground bg-white/5 px-3 py-1 rounded-full border border-white/10 whitespace-nowrap">Sep 2024 - Present</span>
            </div>
            <ul className="list-disc pl-4 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-white/30 font-space">
              <li><strong className="text-white/80">Conceptualized and proposed</strong> the multi-agent framework idea, driving the project vision and technical direction for the team</li>
              <li><strong className="text-white/80">Leading and coordinating a team of 4</strong>, assigning responsibilities and ensuring smooth collaboration across all project phases</li>
              <li>Conducted <strong className="text-white/80">in-depth research</strong> on multi-agent systems and agentic AI principles to define the system architecture</li>
              <li>Maintaining regular <strong className="text-white/80">sync-ups with the faculty guide</strong> to align project progress with academic requirements and research objectives</li>
            </ul>
          </div>
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
