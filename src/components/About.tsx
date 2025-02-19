
import { Code, Briefcase, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    "JavaScript/TypeScript",
    "React/Next.js",
    "Node.js",
    "Python",
    "AWS",
    "Docker",
  ];

  return (
    <section id="about" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-primary/5 px-4 py-2 rounded-full">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Passionate about creating<br />meaningful digital solutions
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Development",
                description: "Building robust and scalable applications with modern technologies"
              },
              {
                icon: <Briefcase className="w-8 h-8" />,
                title: "Business Focus",
                description: "Creating solutions that drive real business value"
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Global Reach",
                description: "Developing applications that reach users worldwide"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Technical Skills</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 bg-secondary rounded-full text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
