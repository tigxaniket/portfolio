
import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Cloud } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/80 backdrop-blur-md shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <span className="text-xl font-semibold text-foreground">Portfolio</span>
          
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link capitalize text-foreground"
              >
                {item}
              </button>
            ))}
            
            <div className="relative">
              <button
                onClick={toggleTheme}
                className={`w-24 h-12 rounded-full p-1 transition-colors duration-300 relative overflow-hidden ${
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
                  <Cloud className="w-4 h-4 text-white absolute top-2 left-3 opacity-80" />
                  <Cloud className="w-3 h-3 text-white absolute top-1 right-6 opacity-60" />
                  <Cloud className="w-3 h-3 text-white absolute bottom-2 right-4 opacity-70" />
                </div>

                {/* Dark mode stars */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  <span className="absolute top-3 left-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <span className="absolute bottom-3 right-5 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
                </div>
                
                <div
                  className={`w-10 h-10 rounded-full transform transition-transform duration-300 relative z-10 ${
                    theme === 'dark' ? 'translate-x-12 bg-[#9b87f5]' : 'translate-x-0 bg-[#FEF7CD]'
                  }`}
                >
                  {theme === 'dark' ? (
                    <Moon className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  ) : (
                    <Sun className="w-6 h-6 text-[#FF9900] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              </button>
            </div>
          </div>

          <button 
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background/90 backdrop-blur-md shadow-lg">
          <div className="flex flex-col space-y-4 px-6 py-4">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link capitalize text-left py-2 text-foreground"
              >
                {item}
              </button>
            ))}
            <div className="flex justify-center py-2">
              <button
                onClick={toggleTheme}
                className={`w-24 h-12 rounded-full p-1 transition-colors duration-300 relative overflow-hidden ${
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
                  <Cloud className="w-4 h-4 text-white absolute top-2 left-3 opacity-80" />
                  <Cloud className="w-3 h-3 text-white absolute top-1 right-6 opacity-60" />
                  <Cloud className="w-3 h-3 text-white absolute bottom-2 right-4 opacity-70" />
                </div>

                {/* Dark mode stars */}
                <div className={`absolute inset-0 transition-opacity duration-300 ${
                  theme === 'dark' ? 'opacity-100' : 'opacity-0'
                }`}>
                  <span className="absolute top-1 left-2 w-1 h-1 bg-white rounded-full animate-pulse" />
                  <span className="absolute top-3 left-6 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                  <span className="absolute top-2 right-3 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                  <span className="absolute bottom-2 left-4 w-1 h-1 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
                  <span className="absolute bottom-3 right-5 w-1.5 h-1.5 bg-white rounded-full animate-pulse" style={{ animationDelay: '0.8s' }} />
                </div>
                
                <div
                  className={`w-10 h-10 rounded-full transform transition-transform duration-300 relative z-10 ${
                    theme === 'dark' ? 'translate-x-12 bg-[#9b87f5]' : 'translate-x-0 bg-[#FEF7CD]'
                  }`}
                >
                  {theme === 'dark' ? (
                    <Moon className="w-6 h-6 text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  ) : (
                    <Sun className="w-6 h-6 text-[#FF9900] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                  )}
                </div>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
