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
    title: 'Software Developer',
    org: 'Clinicals',
    period: 'Sep 2026 – Present',
    description: [
      'Own end-to-end development of a production Android app serving students, mentors, and the internal team — built with React, TypeScript, Vite, Supabase, and Capacitor.',
      'Built a full CRM system (34+ components) covering lead management, duplicate detection, stage tracking, follow-up calls, intro calls, task management, and multi-stage onboarding pipeline.',
      'Implemented real-time push notification system using Firebase Cloud Messaging (FCM) + Capacitor Push Notifications for both Android and PWA (web) targets.',
      'Developed payment verification, invoice creation, and payment tracking workflows with full Supabase Postgres integration and Row Level Security (RLS) policies.',
      'Built student onboarding pipeline with document uploads, program assignment, training phase management, and mentor assignment workflows.',
      'Integrated WhatsApp messaging templates and automated WhatsApp outreach directly from the CRM lead detail view.',
      'Developed Meta CAPI (Conversion API) diagnostics panel for tracking ad attribution and lead source management.',
      'Built team dashboards including: escalations, bug reports, analytics, todos, reports, team access management, and settings.',
      'Set up CI/CD pipeline with GitHub Actions for automated Android APK builds; app deployed as a Capacitor-wrapped PWA on Netlify.',
      'Worked extensively with Supabase — PostgreSQL queries, real-time subscriptions, Supabase Auth, and storage for document management.',
      'Maintained and extended Admin panel with blog management, program management, stage configuration, webinar registrations, and lead source tracking.',
    ],
    tags: [
      'React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL',
      'Capacitor', 'Android', 'Firebase FCM', 'Push Notifications',
      'Tailwind CSS', 'shadcn/ui', 'TanStack Query', 'React Router',
      'GitHub Actions', 'CI/CD', 'PWA', 'Netlify', 'CRM', 'WhatsApp API',
    ],
  },
  {
    title: 'A Multi-Agent Framework for Automation in Machine Learning Pipeline',
    org: 'Multi-Agent Systems Research',
    period: 'June 2026 – Present',
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
