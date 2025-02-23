
import { ArrowRight } from 'lucide-react';
import TicTacToe from './TicTacToe';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "An automated attendance tracking system using facial recognition technology. Built with Python and OpenCV for accurate face detection and recognition.",
      image: "/lovable-uploads/2c14526b-3508-4d10-95e0-1f8aaef1fb12.png",
      tags: ["Python", "OpenCV", "Machine Learning"]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-primary/10 px-4 py-2 rounded-full text-primary">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1 border border-border">
              <div className="aspect-video bg-muted rounded-xl mb-6 overflow-hidden">
                {projects[0].image && (
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-full object-contain object-center"
                  />
                )}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground">{projects[0].title}</h3>
                <p className="text-muted-foreground leading-relaxed">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-2xl p-6 border border-border">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-foreground">Let's Play!</h3>
                <p className="text-muted-foreground">Challenge the Computer in Tic Tac Toe</p>
              </div>
              <TicTacToe />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
