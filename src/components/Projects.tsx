
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "Face Recognition Attendance System",
      description: "An automated attendance tracking system using facial recognition technology",
      image: "/lovable-uploads/dcce6648-ce8e-46af-85a0-18d4b17d6feb.png",
      tags: ["Python", "OpenCV", "Machine Learning"],
      link: "#"
    },
    {
      title: "E-commerce Platform",
      description: "A full-featured online shopping platform built with React and Node.js",
      tags: ["React", "Node.js", "MongoDB"],
      link: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative task management solution with real-time updates",
      tags: ["Next.js", "Firebase", "Tailwind"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 gradient-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-primary/10 px-4 py-2 rounded-full text-primary">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-hover bg-white rounded-2xl p-6"
              >
                <div className="aspect-video bg-[#F8F9FC] rounded-xl mb-6 overflow-hidden">
                  {project.image && (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  )}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors mt-4"
                  >
                    View Project
                    <ArrowRight size={16} />
                  </a>
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
