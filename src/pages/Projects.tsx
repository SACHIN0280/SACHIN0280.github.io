import { ExternalLink } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "SalesMind: AI Sales Intelligence Platform",
      year: "2026",
      link: "https://ai-sales-intelligence-nine.vercel.app",
      points: [
        <>Built an <strong>AI backend with FastAPI, Groq API, and LLaMA 3.3 70B</strong> — integrated with a <strong>Next.js</strong> frontend</>,
        <>Engineered complex NLP workflows to parse raw meeting transcripts and auto-generate personalized email outreach</>,
        <>Developed a data pipeline for the CRM dashboard featuring <strong>AI lead scoring</strong> and pipeline risk analysis metrics</>,
        <>Accelerated deployment by utilizing AI tools to assist in building the React UI, focusing core efforts on ML logic</>
      ],
      tags: ["PYTHON", "FASTAPI", "GROQ API", "LLAMA 3.3", "NEXT.JS"]
    },
    {
      title: "HireSense.AI: Smart ATS Resume Optimizer",
      year: "2025",
      link: "https://hiresenseai-krfcqbrygnwubkjt3skayf.streamlit.app/",
      points: [
        <>Built an <strong>AI-powered ATS resume analyzer</strong> via Groq API and Llama-3 70B for real-time job description matching</>,
        <>Engineered a robust <strong>PyPDF</strong> backend pipeline for document parsing, keyword extraction, and semantic matching</>,
        <>Implemented <strong>zero-temperature prompt engineering</strong> to ensure deterministic JSON scoring for candidate resumes</>,
        <>Designed a dual hybrid scoring system (heuristic plus LLM) to produce a composite <strong>100-point ATS evaluation</strong></>,
        <>Programmed a dynamic <strong>PDF report generator</strong> using ReportLab with custom score rings and visual data metrics</>,
        <>Deployed via <strong>Streamlit Cloud</strong> leveraging data memoization, GitHub CI pipelines, and secure secret management</>
      ],
      tags: ["PYTHON", "STREAMLIT", "GROQ API", "LLAMA-3", "PYPDF", "REPORTLAB"]
    },
    {
      title: "NextWatch: Movie Recommendation System",
      year: "2024",
      link: "https://guufqgyybgksuumstrz9ma.streamlit.app/",
      points: [
        <>Developed a <strong>content-based recommendation system</strong> on <strong>TMDB dataset</strong> of <strong>5,000+ movies</strong> delivering personalized suggestions</>,
        <>Engineered a unified feature vector combining <strong>genres, cast, crew, keywords, and overview</strong> per movie to improve recommendation relevance</>,
        <>Applied <strong>CountVectorizer</strong> and <strong>cosine similarity</strong> to compute pairwise scores achieving accurate <strong>top-5 recommendations</strong> across all queries</>,
        <>Built an interactive <strong>Streamlit web app</strong> with real-time <strong>TMDB API</strong> poster fetching, reducing average user search time by <strong>80%</strong></>,
        <>Processed and cleaned <strong>5,000+ records</strong> with Pandas reducing data noise and improving overall recommendation accuracy</>
      ],
      tags: ["PYTHON", "SCIKIT-LEARN", "PANDAS", "NUMPY", "STREAMLIT"]
    },
    {
      title: "Group Leader, NOVA-ML Project",
      year: "Present",
      points: [
        <><strong>Conceptualized and proposed</strong> the multi-agent framework idea, driving the project vision and technical direction for the team</>,
        <><strong>Leading and coordinating a team of 4</strong>, assigning responsibilities and ensuring smooth collaboration across all project phases</>,
        <>Conducted <strong>in-depth research</strong> on multi-agent systems and agentic AI principles to define the system architecture</>,
        <>Maintaining regular <strong>sync-ups with the faculty guide</strong> to align project progress with academic requirements and research objectives</>
      ],
      tags: ["MULTI-AGENT SYSTEMS", "AGENTIC AI", "RESEARCH", "LEADERSHIP"]
    }
  ];

  return (
    <div className="space-y-8">
      <h1 className="text-3xl font-doto uppercase font-bold">Experience / Projects</h1>
      <div className="space-y-12">
        {projects.map((p, i) => (
          <div key={i} className="space-y-4">
            <div className="flex justify-between items-start sm:items-center flex-col sm:flex-row gap-2">
              <div className="flex items-center gap-3 flex-wrap">
                <h3 className="font-doto text-xl text-white">{p.title}</h3>
                {p.link && (
                  <a 
                    href={p.link} 
                    target="_blank" 
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/80 hover:text-white hover:bg-white/10 hover:border-white/30 hover:-translate-y-0.5 transition-all duration-300"
                  >
                    Live App <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">{p.year}</span>
            </div>
            <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground leading-relaxed marker:text-muted-foreground/50">
              {p.points.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2">
              {p.tags.map(t => <span key={t} className="tag">{t}</span>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
