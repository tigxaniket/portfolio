
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "An automated attendance tracking system using facial recognition technology. Built with Python and OpenCV for accurate face detection and recognition.",
      image: "/lovable-uploads/dcce6648-ce8e-46af-85a0-18d4b17d6feb.png",
      tags: ["Python", "OpenCV", "Machine Learning"]
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory management, secure payments, and responsive design for optimal user experience.",
      tags: ["React", "Node.js", "MongoDB"]
    },
    {
      title: "Task Management App",
      description: "Modern task management solution featuring real-time updates, team collaboration tools, and intuitive project organization capabilities.",
      tags: ["Next.js", "Firebase", "Tailwind"]
    }
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

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 transition-all duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:-translate-y-1"
              >
                <div className="aspect-video bg-[#F8F9FC] rounded-xl mb-6 overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#1a1a1a]">{project.title}</h3>
                  <p className="text-[#666666] leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
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
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
