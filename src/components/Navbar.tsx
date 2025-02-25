
import { useState, useEffect } from 'react';
import { Sun, Moon, Cloud } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-lg font-semibold text-foreground">Portfolio</span>
          
          <div className="flex items-center space-x-3 sm:space-x-6">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link capitalize text-foreground text-sm hover:text-primary transition-colors"
              >
                {item}
              </button>
            ))}
            
            {/* Desktop theme toggle */}
            <div className="relative hidden sm:block">
              <button
                onClick={toggleTheme}
                className={`w-16 h-8 rounded-full p-1 transition-colors duration-300 relative overflow-hidden ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-b from-[#1A1F2C] to-[#0F1319]' 
                    : 'bg-gradient-to-b from-[#33C3F0] to-[#87CEEB]'
                }`}
                aria-label="Toggle theme"
              >
                {/* Light mode clouds */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  theme === 'light' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <Cloud className="w-2.5 h-2.5 text-white absolute top-1.5 left-2 opacity-80" />
                  <Cloud className="w-2 h-2 text-white absolute top-1 right-4 opacity-60" />
                  <Cloud className="w-2 h-2 text-white absolute bottom-1.5 right-2.5 opacity-70" />
                </div>

                {/* Dark mode stars */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="absolute top-1 left-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" />
                  <span className="absolute top-2 left-4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="absolute top-1.5 right-2 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="absolute bottom-1.5 left-3 w-0.5 h-0.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <span className="absolute bottom-2 right-3.5 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
                </div>
                
                <div
                  className={`w-6 h-6 rounded-full transform transition-transform duration-300 relative z-10 ${
                    theme === 'dark' ? 'translate-x-8 bg-[#9b87f5]' : 'translate-x-0 bg-[#FEF7CD]'
                  }`}
                >
                  {theme === 'dark' ? (
                    <Moon className="w-4 h-4 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  ) : (
                    <Sun className="w-4 h-4 text-[#FF9900] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              </button>
            </div>

            {/* Mobile theme toggle */}
            <button
              onClick={toggleTheme}
              className={`sm:hidden w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${
                theme === 'dark' 
                  ? 'bg-[#1A1F2C] text-white' 
                  : 'bg-[#FEF7CD] text-[#FF9900]'
              }`}
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
