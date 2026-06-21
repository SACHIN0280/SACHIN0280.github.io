import { ExternalLink } from 'lucide-react';
import scapiaAiImg from '../assets/scapia_ai.png';
import salesmindImg from '../assets/salesmind.png';
import hiresenseAiImg from '../assets/hiresense_ai.png';
import nextwatchImg from '../assets/nextwatch.png';

const Projects = () => {
  const projects = [
    {
      title: "Scapia AI: Document & YouTube RAG Assistant",
      date: "March 2025 - Present",
      image: scapiaAiImg,
      link: "https://scapia.streamlit.app/",
      points: [
        <>Built a <strong>Retrieval-Augmented Generation (RAG)</strong> application utilizing <strong>Streamlit, Groq API, and LLaMA models</strong> for document analysis</>,
        <>Engineered data pipelines to extract and process text from both <strong>PDF documents</strong> and <strong>YouTube video transcripts</strong></>,
        <>Implemented a robust conversational agent using <strong>LangChain</strong> with context-aware query rewriting to ensure highly accurate, grounded answers</>,
        <>Designed a dynamic, custom-styled <strong>Streamlit</strong> frontend featuring a multi-chat interface, persistent chat history, and seamless source selection</>
      ],
      tags: ["PYTHON", "STREAMLIT", "GROQ API", "LLAMA", "LANGCHAIN", "RAG"]
    },
    {
      title: "SalesMind: AI Sales Intelligence Platform",
      date: "Feb 2025 - Present",
      image: salesmindImg,
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
      date: "Jan 2025 - Feb 2025",
      image: hiresenseAiImg,
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
      date: "Nov 2024 - Dec 2024",
      image: nextwatchImg,
      link: "https://guufqgyybgksuumstrz9ma.streamlit.app/",
      points: [
        <>Developed a <strong>content-based recommendation system</strong> on <strong>TMDB dataset</strong> of <strong>5,000+ movies</strong> delivering personalized suggestions</>,
        <>Engineered a unified feature vector combining <strong>genres, cast, crew, keywords, and overview</strong> per movie to improve recommendation relevance</>,
        <>Applied <strong>CountVectorizer</strong> and <strong>cosine similarity</strong> to compute pairwise scores achieving accurate <strong>top-5 recommendations</strong> across all queries</>,
        <>Built an interactive <strong>Streamlit web app</strong> with real-time <strong>TMDB API</strong> poster fetching, reducing average user search time by <strong>80%</strong></>,
        <>Processed and cleaned <strong>5,000+ records</strong> with Pandas reducing data noise and improving overall recommendation accuracy</>
      ],
      tags: ["PYTHON", "SCIKIT-LEARN", "PANDAS", "NUMPY", "STREAMLIT"]
    }
  ];

  return (
    <div className="space-y-12 w-full py-12">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-white text-black px-3 py-1 text-sm font-bold uppercase font-doto">My Projects</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-doto uppercase">Check out my latest work</h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-[800px] mx-auto">
            I've worked on a variety of projects, from simple websites to complex AI applications. Here are a few of my favorites.
          </p>
        </div>
      </div>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-5xl mx-auto">
        {projects.map((p, i) => (
          <div key={i} className="rounded-lg bg-white/5 border border-white/10 flex flex-col overflow-hidden hover:shadow-2xl hover:border-white/20 transition-all duration-300 ease-out h-full group">
            {p.link ? (
              <a className="block cursor-pointer overflow-hidden relative" href={p.link} target="_blank" rel="noreferrer">
                <img alt={p.title} className="h-48 w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src={p.image} />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white text-black px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2">
                    View Project <ExternalLink className="w-4 h-4" />
                  </span>
                </div>
              </a>
            ) : (
              <div className="block overflow-hidden relative">
                <img alt={p.title} className="h-48 w-full object-cover object-top group-hover:scale-105 transition-transform duration-500" src={p.image} />
              </div>
            )}
            
            <div className="flex flex-col px-6 pt-6 flex-grow">
              <div className="space-y-2">
                <h3 className="font-bold tracking-tight text-xl font-doto text-white">{p.title}</h3>
                <time className="font-space text-xs text-muted-foreground">{p.date}</time>
                <div className="prose max-w-full text-pretty font-space text-sm text-muted-foreground mt-4">
                  <ul className="list-disc pl-4 space-y-2 marker:text-white/30">
                    {p.points.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-pretty font-space text-sm text-muted-foreground mt-4 flex flex-col px-6 pb-6">
              <div className="flex flex-wrap gap-2">
                {p.tags.map(t => (
                  <div key={t} className="inline-flex items-center rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[10px] font-semibold text-white/80 uppercase">
                    {t}
                  </div>
                ))}
              </div>
              
              {p.link && (
                <div className="flex items-center pt-6 mt-auto">
                  <div className="flex flex-row flex-wrap items-start gap-2">
                    <a target="_blank" href={p.link} rel="noreferrer">
                      <div className="items-center rounded-md border border-white/20 bg-white text-black hover:bg-white/90 shadow flex gap-2 px-4 py-2 text-xs font-bold transition-colors uppercase">
                        <ExternalLink className="w-4 h-4" /> Live App
                      </div>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Projects;
