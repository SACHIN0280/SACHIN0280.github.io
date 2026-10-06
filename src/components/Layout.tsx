import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import CustomCursor from './CustomCursor';
import { SiGithub, SiGmail } from 'react-icons/si';
import { FaLinkedin } from 'react-icons/fa6';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/experience', label: 'Experience' },
  { to: '/projects', label: 'Projects' },
  { to: '/skills', label: 'Skills' },
  { to: '/certifications', label: 'Certs' },
  { to: '/contact', label: 'Contact' },
];

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    const existingScript = document.getElementById('oneko-script');
    if (!existingScript) {
      const script = document.createElement('script');
      script.id = 'oneko-script';
      script.src = '/oneko.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Start each page at the top instead of keeping the previous scroll position
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="max-w-[900px] mx-auto px-6 sm:px-8 py-16">
      <CustomCursor />
      <nav className="flex flex-col sm:flex-row justify-between items-center mb-16 font-doto uppercase gap-4">
        <Link to="/" className="text-xl font-bold flex gap-2">
          <span className="text-muted-foreground">SP</span>
          <span>Sachin Parashar</span>
        </Link>
        <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-sm">
          {navLinks.map(({ to, label }) => {
            const active = location.pathname === to;
            return (
              <Link
                key={to}
                to={to}
                aria-current={active ? 'page' : undefined}
                className={`relative pb-1 hover:text-white transition-colors ${active ? 'text-white' : 'text-muted-foreground'}`}
              >
                {label}
                <span className={`absolute left-0 -bottom-0.5 h-px bg-white transition-all duration-300 ${active ? 'w-full' : 'w-0'}`} />
              </Link>
            );
          })}
        </div>
      </nav>

      <main key={location.pathname} className="animate-[fadeUp_0.4s_ease-out]">
        {children}
      </main>

      <footer className="mt-24 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-sm font-doto">
        <span>© {new Date().getFullYear()} Sachin Parashar</span>
        <div className="flex flex-wrap justify-center gap-4 uppercase">
          <a href="https://github.com/SACHIN0280" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><SiGithub className="w-3.5 h-3.5" />GitHub</a>
          <a href="https://linkedin.com/in/sachin-parashar-94499b137" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><FaLinkedin className="w-3.5 h-3.5" />LinkedIn</a>
          <a href="mailto:s.parashar2806@gmail.com" className="inline-flex items-center gap-1.5 hover:text-white transition-colors"><SiGmail className="w-3.5 h-3.5" />Email</a>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
