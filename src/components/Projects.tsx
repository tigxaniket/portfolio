
import { ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
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
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization platform for business metrics",
      tags: ["React", "D3.js", "AWS"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-primary/5 px-4 py-2 rounded-full">
              Projects
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Featured Work
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="aspect-video bg-secondary rounded-xl mb-6"></div>
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-secondary rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.link}
                    className="inline-flex items-center gap-2 text-primary hover:underline mt-4"
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
