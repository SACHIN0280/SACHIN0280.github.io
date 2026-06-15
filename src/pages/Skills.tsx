import { Code2, Layers, Cpu } from 'lucide-react';

const Skills = () => {
  const categories = [
    {
      title: "Programming Languages",
      icon: <Code2 className="w-5 h-5 text-white/80" />,
      skills: ["Python", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 text-white/80" />,
      skills: ["FastAPI", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "AI & Tools",
      icon: <Cpu className="w-5 h-5 text-white/80" />,
      skills: ["Prompt Engineering", "LLMs", "Generative AI", "Groq API", "Streamlit", "Git", "GitHub", "REST APIs", "Vercel"]
    }
  ];

  return (
    <div className="space-y-12 relative">
      {/* Subtle ambient glow */}
      <div className="absolute -left-10 top-0 w-32 h-32 bg-white/5 rounded-full blur-3xl pointer-events-none" />
      
      <h1 className="text-3xl font-doto uppercase font-bold tracking-wider relative z-10">Skills</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
        {categories.map((category, idx) => (
          <div 
            key={idx} 
            className="group relative bg-[#0a0a0a] border border-white/10 p-6 rounded-2xl hover:border-white/30 transition-all duration-300 overflow-hidden"
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            <div className="flex items-center gap-3 mb-6 relative z-10">
              <div className="p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform duration-300">
                {category.icon}
              </div>
              <h3 className="font-doto text-lg font-semibold tracking-wide text-white/90">{category.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2 relative z-10">
              {category.skills.map(skill => (
                <span 
                  key={skill} 
                  className="px-3 py-1.5 text-xs font-medium bg-white/5 border border-white/10 rounded-full text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 hover:-translate-y-0.5 transition-all duration-200 cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
