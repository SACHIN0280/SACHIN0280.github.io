import { Briefcase } from 'lucide-react';

interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  description: string[];
  tags?: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: 'AI Backend Intern',
    org: 'Clinicals Internal App',
    period: 'Jan 2026 – Present',
    description: [
      'Built and maintained AI-powered backend services using Python and FastAPI, handling LLM integrations and RAG pipelines.',
      'Designed and implemented multi-agent orchestration workflows for clinical data processing.',
      'Optimized vector database queries and embedding strategies to improve retrieval accuracy by 30%.',
      'Collaborated with the frontend team to deliver seamless API contracts and real-time streaming responses.',
    ],
    tags: ['Python', 'FastAPI', 'LangChain', 'RAG', 'LLMs'],
  },
  {
    title: 'Research Lead – NOVA-ML',
    org: 'Multi-Agent Systems Research',
    period: 'Sep 2024 – Present',
    description: [
      'Conceptualized and proposed a multi-agent framework for academic research, driving the vision and technical direction.',
      'Led a cross-functional team of 4, assigning tasks and ensuring delivery across all project phases.',
      'Conducted in-depth research on agentic AI architectures and published internal findings for faculty review.',
      'Maintained regular syncs with the faculty guide to align progress with research objectives.',
    ],
    tags: ['Multi-Agent Systems', 'Agentic AI', 'Research', 'Team Lead'],
  },
];

const Experience = () => {
  const renderCard = (item: ExperienceItem, idx: number) => (
    <div
      key={idx}
      className="group relative pl-8 border-l border-white/10 hover:border-white/30 transition-colors duration-300"
    >
      {/* Timeline dot */}
      <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30 group-hover:bg-white/60 group-hover:scale-125 transition-all duration-300" />

      <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 space-y-3">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
          <div>
            <h3 className="font-doto font-bold text-white text-lg tracking-tight leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-white/60 font-space mt-0.5">{item.org}</p>
          </div>
          <div className="flex flex-col items-start sm:items-end gap-1 shrink-0">
            <span className="text-xs text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap">
              {item.period}
            </span>
            {item.location && (
              <span className="text-xs text-white/30">{item.location}</span>
            )}
          </div>
        </div>

        {/* Description */}
        <ul className="list-disc pl-4 space-y-1.5 marker:text-white/20">
          {item.description.map((point, i) => (
            <li key={i} className="text-sm text-muted-foreground leading-relaxed font-space">
              {point}
            </li>
          ))}
        </ul>

        {/* Tags */}
        {item.tags && (
          <div className="flex flex-wrap gap-2 pt-1">
            {item.tags.map(tag => (
              <span
                key={tag}
                className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition-all duration-200 cursor-default"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );

  return (
    <div className="space-y-16 relative">
      {/* Ambient glow */}
      <div className="absolute -right-10 top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <h1 className="text-3xl font-doto uppercase font-bold tracking-wider relative z-10">
        Experience
      </h1>

      {/* Work Experience */}
      <div className="space-y-6 relative z-10">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/5 border border-white/10 rounded-xl">
            <Briefcase className="w-4 h-4 text-white/70" />
          </div>
          <h2 className="text-lg font-doto uppercase font-semibold text-white/80 tracking-wide">
            Work & Research
          </h2>
        </div>
        <div className="space-y-8">
          {experiences.map(renderCard)}
        </div>
      </div>
    </div>
  );
};

export default Experience;
