
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 gradient-bg">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="space-y-8 text-center md:text-left">
          <span className="inline-block text-sm font-medium bg-primary/10 px-4 py-2 rounded-full text-primary fade-in">
            Welcome to my portfolio
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold leading-tight slide-up bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Hi, I'm Aniket Mahadik<br />Web Developer
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 slide-up" style={{ animationDelay: '0.2s' }}>
            A passionate learner with strong technical skills and a focus on creating impactful solutions
          </p>
          
          <div className="flex flex-col md:flex-row items-center gap-4 pt-4 slide-up" style={{ animationDelay: '0.3s' }}>
            <button
              onClick={scrollToProjects}
              className="group inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              View My Work
              <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
            </button>
            
            <a
              href="#contact"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-6 py-3"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
