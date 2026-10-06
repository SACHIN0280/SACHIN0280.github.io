import type { ComponentType } from 'react';
import {
  SiPython, SiMysql, SiLangchain, SiScikitlearn, SiPandas, SiNumpy, SiStreamlit,
  SiGit, SiGithub, SiVercel, SiReact, SiTypescript, SiVite, SiSupabase, SiPostgresql,
  SiCapacitor, SiAndroid, SiFirebase, SiReactquery, SiTailwindcss, SiShadcnui,
  SiCloudflare, SiPwa, SiFastapi, SiNextdotjs, SiHuggingface, SiMeta, SiWhatsapp,
} from 'react-icons/si';
import {
  Database, ShieldCheck, Bot, Brain, Sparkles, Zap, MessageSquareText, BarChart3,
  FileText, Network, Users, FlaskConical, Workflow,
} from 'lucide-react';

type IconDef = { icon: ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string };

const WHITE = '#ffffff';

// Brand colours, lightened where the official colour is too dark on the black background
const icons: Record<string, IconDef> = {
  python: { icon: SiPython, color: '#3776AB' },
  sql: { icon: SiMysql, color: '#4479A1' },
  langchain: { icon: SiLangchain, color: '#1C9B8C' },
  scikitlearn: { icon: SiScikitlearn, color: '#F7931E' },
  pandas: { icon: SiPandas, color: '#E70488' },
  numpy: { icon: SiNumpy, color: '#4DABCF' },
  matplotlib: { icon: BarChart3, color: '#5BA3D0' },
  streamlit: { icon: SiStreamlit, color: '#FF4B4B' },
  git: { icon: SiGit, color: '#F05032' },
  github: { icon: SiGithub, color: WHITE },
  vercel: { icon: SiVercel, color: WHITE },
  react: { icon: SiReact, color: '#61DAFB' },
  typescript: { icon: SiTypescript, color: '#3178C6' },
  vite: { icon: SiVite, color: '#9D7CFF' },
  supabase: { icon: SiSupabase, color: '#3FCF8E' },
  postgresql: { icon: SiPostgresql, color: '#6A9FD4' },
  rowlevelsecurity: { icon: ShieldCheck, color: '#3FCF8E' },
  capacitor: { icon: SiCapacitor, color: '#53B9FF' },
  android: { icon: SiAndroid, color: '#3DDC84' },
  firebasefcm: { icon: SiFirebase, color: '#FFCA28' },
  tanstackquery: { icon: SiReactquery, color: '#FF4154' },
  tailwindcss: { icon: SiTailwindcss, color: '#06B6D4' },
  shadcnui: { icon: SiShadcnui, color: WHITE },
  cloudflare: { icon: SiCloudflare, color: '#F38020' },
  pwa: { icon: SiPwa, color: '#A585FF' },
  fastapi: { icon: SiFastapi, color: '#009688' },
  nextjs: { icon: SiNextdotjs, color: WHITE },
  huggingface: { icon: SiHuggingface, color: '#FFD21E' },
  llama: { icon: SiMeta, color: '#0081FB' },
  llama33: { icon: SiMeta, color: '#0081FB' },
  llama3: { icon: SiMeta, color: '#0081FB' },
  whatsapp: { icon: SiWhatsapp, color: '#25D366' },
  groqapi: { icon: Zap, color: '#F55036' },
  chromadb: { icon: Database, color: '#FF6446' },
  vectordatabases: { icon: Database, color: '#A78BFA' },
  rag: { icon: Network, color: '#A78BFA' },
  llms: { icon: Brain, color: '#F472B6' },
  generativeai: { icon: Sparkles, color: '#FBBF24' },
  promptengineering: { icon: MessageSquareText, color: '#60A5FA' },
  pypdf: { icon: FileText, color: '#F87171' },
  reportlab: { icon: FileText, color: '#F87171' },
  multiagentsystems: { icon: Bot, color: '#A78BFA' },
  agenticai: { icon: Bot, color: '#F472B6' },
  automl: { icon: Workflow, color: '#60A5FA' },
  research: { icon: FlaskConical, color: '#34D399' },
  teamlead: { icon: Users, color: '#FBBF24' },
};

const normalize = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, '');

const TechIcon = ({ name, className = 'w-3.5 h-3.5' }: { name: string; className?: string }) => {
  const def = icons[normalize(name)];
  if (!def) return null;
  const Icon = def.icon;
  return <Icon className={`${className} shrink-0`} style={{ color: def.color }} aria-hidden="true" />;
};

export default TechIcon;
