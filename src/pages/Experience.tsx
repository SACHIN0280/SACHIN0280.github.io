import { Briefcase, FlaskConical } from 'lucide-react';
import TechIcon from '../components/TechIcon';

interface ProductBlock {
  name: string;
  summary: string;
  points: string[];
}

interface ExperienceItem {
  title: string;
  org: string;
  period: string;
  summary?: string;
  stats?: { value: string; label: string }[];
  products?: ProductBlock[];
  description?: string[];
  tags?: string[];
}

const work: ExperienceItem[] = [
  {
    title: 'Software Developer',
    org: 'Clinicals',
    period: 'Sep 2026 – Present',
    summary:
      'Building and shipping the mobile apps that run Clinicals: the internal app used by the sales, ops and admin teams, and the mentors app used by clinic mentors who train students. Each app is one React + TypeScript codebase that ships as both an Android APK (Capacitor) and an installable PWA, with Supabase as the backend.',
    stats: [
      { value: '2', label: 'production apps' },
      { value: '80+', label: 'commits shipped' },
      { value: '13', label: 'DB migrations' },
    ],
    products: [
      {
        name: 'Internal App: CRM, Onboarding & Training',
        summary: 'Team and admin app for sales, ops and leadership.',
        points: [
          'Built the lead-to-trainee pipeline: lead activity history, handling for leads caught by the duplicate check, re-engaged lead detection with comeback banners, and a Converted → payment details → Start Onboarding flow.',
          'Reworked payments so every stage shows the commitment, registration received and balance left. Added scholarships, per-student payment breakdowns, invoice preview and a training start date that is required up front and can be edited later.',
          'Built admin-only usage analytics with per-person and per-feature drill-downs, and rebuilt the sales, ops and training dashboards with date filters, money-by-stage views and fixes so the numbers match live data.',
          'Set up push notifications on Android and web with Firebase Cloud Messaging. Added local task reminders, @mention alerts, and notifications that open the right lead when tapped.',
          'Built mentor application review, linking mentors to clinics, MoU tracking, a worksheet dashboard, course feedback forms, and alumni flows with undo.',
          'Split the WhatsApp outreach templates into Sales and Ops sets, shown according to the role of the person logged in.',
        ],
      },
      {
        name: 'Mentors App: built from scratch',
        summary: 'Built and launched the app solo, from an empty repo to Android + PWA.',
        points: [
          'Built mentor sign-up and onboarding, with admin review of profiles. Mentors can keep their details, courses and other clinics up to date themselves.',
          'Students view shows assigned students, per-student attendance (with undo), syllabus progress, weekly feedback, case sign-off and photos.',
          'Added escalations and clinic applications flows, plus an admin "View as mentor" mode that opens the app read-only as any mentor for support and debugging.',
          'Wrote the Supabase schema as Postgres migrations, with Row Level Security policies and SECURITY DEFINER RPCs that control which students a mentor can see.',
          'Mobile UX: splash screen, bottom tab bar, and a dark mode that matches the students app. The PWA is deployed on Cloudflare.',
        ],
      },
    ],
    tags: [
      'React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL', 'Row Level Security',
      'Capacitor', 'Android', 'PWA', 'Firebase FCM', 'TanStack Query',
      'Tailwind CSS', 'shadcn/ui', 'Cloudflare',
    ],
  },
];

const research: ExperienceItem[] = [
  {
    title: 'NOVA-ML: A Multi-Agent Framework for Automation in ML Pipelines',
    org: 'Group Leader · Multi-Agent Systems Research',
    period: 'June 2026 – Present',
    description: [
      'Conceptualized and proposed a multi-agent framework that automates stages of the machine learning pipeline, and set the project vision and technical direction.',
      'Leading a team of 4: assigning work and keeping delivery on track across every project phase.',
      'Researched agentic AI architectures and multi-agent coordination patterns to define the system architecture.',
      'Hold regular syncs with the faculty guide to keep progress aligned with the research objectives.',
    ],
    tags: ['Multi-Agent Systems', 'Agentic AI', 'AutoML', 'Research', 'Team Lead'],
  },
];

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2 pt-1">
    {tags.map(tag => (
      <span
        key={tag}
        className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white/80 hover:bg-white/10 transition-all duration-200 cursor-default"
      >
        <TechIcon name={tag} className="w-3 h-3" />
        {tag}
      </span>
    ))}
  </div>
);

const Bullets = ({ points }: { points: string[] }) => (
  <ul className="list-disc pl-4 space-y-1.5 marker:text-white/20">
    {points.map((point, i) => (
      <li key={i} className="text-sm text-muted-foreground leading-relaxed font-space">
        {point}
      </li>
    ))}
  </ul>
);

const Card = ({ item }: { item: ExperienceItem }) => (
  <div className="group relative pl-8 border-l border-white/10 hover:border-white/30 transition-colors duration-300">
    {/* Timeline dot */}
    <div className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-white/20 border border-white/30 group-hover:bg-white/60 group-hover:scale-125 transition-all duration-300" />

    <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-5 sm:p-6 hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300 space-y-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
        <div>
          <h3 className="font-doto font-bold text-white text-lg tracking-tight leading-snug">
            {item.title}
          </h3>
          <p className="text-sm text-white/60 font-space mt-0.5">{item.org}</p>
        </div>
        <span className="text-xs text-muted-foreground bg-white/5 border border-white/10 px-3 py-1 rounded-full whitespace-nowrap shrink-0 self-start">
          {item.period}
        </span>
      </div>

      {item.summary && (
        <p className="text-sm text-white/70 leading-relaxed font-space">{item.summary}</p>
      )}

      {item.stats && (
        <div className="grid grid-cols-3 gap-2">
          {item.stats.map(s => (
            <div key={s.label} className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-3 text-center">
              <div className="font-doto font-bold text-2xl text-white">{s.value}</div>
              <div className="text-[10px] sm:text-xs uppercase tracking-wider text-muted-foreground mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      )}

      {item.products?.map(p => (
        <div key={p.name} className="space-y-2 pt-2">
          <div>
            <h4 className="font-doto font-bold text-white/90 uppercase text-sm tracking-wide">{p.name}</h4>
            <p className="text-xs text-white/40 font-space mt-0.5">{p.summary}</p>
          </div>
          <Bullets points={p.points} />
        </div>
      ))}

      {item.description && <Bullets points={item.description} />}

      {item.tags && <Tags tags={item.tags} />}
    </div>
  </div>
);

const Section = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: ExperienceItem[] }) => (
  <div className="space-y-6 relative z-10">
    <div className="flex items-center gap-3">
      <div className="p-2 bg-white/5 border border-white/10 rounded-xl">{icon}</div>
      <h2 className="text-lg font-doto uppercase font-semibold text-white/80 tracking-wide">{title}</h2>
    </div>
    <div className="space-y-8">
      {items.map(item => <Card key={item.title} item={item} />)}
    </div>
  </div>
);

const Experience = () => {
  return (
    <div className="space-y-16 relative">
      {/* Ambient glow */}
      <div className="absolute -right-10 top-10 w-40 h-40 bg-white/5 rounded-full blur-3xl pointer-events-none" />

      <h1 className="text-3xl font-doto uppercase font-bold tracking-wider relative z-10">
        Experience
      </h1>

      <Section icon={<Briefcase className="w-4 h-4 text-white/70" />} title="Work" items={work} />
      <Section icon={<FlaskConical className="w-4 h-4 text-white/70" />} title="Research & Leadership" items={research} />
    </div>
  );
};

export default Experience;
