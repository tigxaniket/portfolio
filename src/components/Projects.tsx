
import { ArrowRight } from 'lucide-react';
import TicTacToe from './TicTacToe';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "An automated attendance tracking system using facial recognition technology. Built with Python and OpenCV for accurate face detection and recognition.",
      image: "/lovable-uploads/dcce6648-ce8e-46af-85a0-18d4b17d6feb.png",
      tags: ["Python", "OpenCV", "Machine Learning"]
    }, 
  ];

  return (
    <section id="projects" className="py-20" style={{ background: 'linear-gradient(135deg, #F2FCE2 0%, #E5DEFF 100%)' }}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-[#0EA5E9]/10 px-4 py-2 rounded-full text-[#0EA5E9]">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#8B5CF6] bg-clip-text text-transparent">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1">
              <div className="aspect-video bg-[#F8F9FC] rounded-xl mb-6 overflow-hidden">
                {projects[0].image && (
                  <img 
                    src={projects[0].image} 
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                )}
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1a1a1a]">{projects[0].title}</h3>
                <p className="text-[#666666] leading-relaxed">{projects[0].description}</p>
                <div className="flex flex-wrap gap-2">
                  {projects[0].tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#0EA5E9]/10 text-[#0EA5E9] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-[#333333] rounded-2xl p-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white">Let's Play!</h3>
                <p className="text-white/70">Challenge the Computer in Tic Tac Toe</p>
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
