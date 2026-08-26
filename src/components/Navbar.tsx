import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If we are on a details page, navigate to Home and then scroll
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // If already on Home, scroll smoothly
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Sobre', target: 'about' },
    { label: 'Projetos', target: 'projects' },
    { label: 'Capabilities', target: 'capabilities' },
    { label: 'Implantação', target: 'implementation' },
    { label: 'Experiência', target: 'experience' },
  ];

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div 
        className="bg-[#000000] border-x border-b border-charcoal-card/40 rounded-b-2xl md:rounded-b-3xl px-4 py-3 md:px-8 md:py-4 pointer-events-auto flex items-center shadow-lg"
        style={{ boxShadow: '0 10px 30px rgba(0, 0, 0, 0.5)' }}
      >
        <ul className="flex items-center gap-3 sm:gap-6 md:gap-12 lg:gap-14">
          {navItems.map((item, idx) => (
            <li key={idx}>
              <button
                onClick={() => handleNavClick(item.target)}
                className="text-[10px] sm:text-xs md:text-sm font-medium uppercase tracking-widest cursor-pointer transition-colors duration-300 select-none bg-transparent border-none outline-none"
                style={{ 
                  color: 'rgba(225, 224, 204, 0.75)',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLButtonElement).style.color = '#E1E0CC';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLButtonElement).style.color = 'rgba(225, 224, 204, 0.75)';
                }}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
