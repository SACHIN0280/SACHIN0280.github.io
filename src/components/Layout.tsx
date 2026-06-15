import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CustomCursor from './CustomCursor';

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const existingScript = document.getElementById('oneko-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'oneko-script';
      script.src = 'https://rawcdn.githack.com/adryd325/oneko.js/14bab15a755d0e35cd4ae19c931d96d306f99f42/oneko.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <div className="max-w-[900px] mx-auto px-8 py-16">
      <CustomCursor />
      <nav className="flex flex-col sm:flex-row justify-between items-center mb-16 font-doto uppercase gap-4">
        <Link to="/" className="text-xl font-bold flex gap-2">
          <span className="text-muted-foreground">SP</span>
          <span>Sachin Parashar</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-4 text-sm">
          <Link to="/" className={`hover:opacity-80 transition-opacity ${location.pathname === '/' ? 'text-white' : 'text-muted-foreground'}`}>Home</Link>
          <Link to="/projects" className={`hover:opacity-80 transition-opacity ${location.pathname === '/projects' ? 'text-white' : 'text-muted-foreground'}`}>Projects</Link>
          <Link to="/certifications" className={`hover:opacity-80 transition-opacity ${location.pathname === '/certifications' ? 'text-white' : 'text-muted-foreground'}`}>Certs</Link>
          <Link to="/skills" className={`hover:opacity-80 transition-opacity ${location.pathname === '/skills' ? 'text-white' : 'text-muted-foreground'}`}>Skills</Link>
          <Link to="/contact" className={`hover:opacity-80 transition-opacity ${location.pathname === '/contact' ? 'text-white' : 'text-muted-foreground'}`}>Contact</Link>
        </div>
      </nav>
      
      <main>
        {children}
      </main>

      <footer className="mt-24 text-center text-muted-foreground text-sm font-doto">
        © 2026 Sachin Parashar. All rights reserved.
      </footer>
    </div>
  );
};

export default Layout;
