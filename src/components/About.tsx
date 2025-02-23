
import { Code, Briefcase, Globe } from 'lucide-react';

const About = () => {
  const skills = [
    "C, Python",
    "HTML, CSS, JavaScript, Bootstrap",
    "SQL",
    "Operating Systems",
    "Hardware Configurations",
    "Technical Documentation"
  ];

  const education = [
    {
      degree: "TY BCA",
      institution: "Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri",
      university: "Savitribai Phule Pune University",
      year: "2024-25",
      grade: "Appearing"
    },
    {
      degree: "SY BCA",
      institution: "Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri",
      university: "Savitribai Phule Pune University",
      year: "2023-24",
      grade: "75.01%"
    },
    {
      degree: "FY BCA",
      institution: "Dr. D. Y. Patil Arts, Commerce & Science College, Pimpri",
      university: "Savitribai Phule Pune University",
      year: "2022-23",
      grade: "75.05%"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-primary/10 px-4 py-2 rounded-full text-primary">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Education & Skills
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8 text-primary" />,
                title: "Technical Skills",
                description: "Proficient in programming languages and web technologies"
              },
              {
                icon: <Briefcase className="w-8 h-8 text-primary" />,
                title: "Analytical Abilities",
                description: "Strong ability to think critically and identify potential issues"
              },
              {
                icon: <Globe className="w-8 h-8 text-primary" />,
                title: "Team Collaboration",
                description: "Proven ability to work effectively in team environments"
              }
            ].map((item, index) => (
              <div
                key={index}
                className="card-hover p-8 bg-card rounded-2xl shadow-sm border border-border"
              >
                <div className="space-y-4">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm card-hover border border-border">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Education</h3>
                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="p-4 bg-muted rounded-lg hover:bg-primary/5 transition-colors">
                      <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                      <p className="text-sm text-muted-foreground">{edu.institution}</p>
                      <div className="flex justify-between mt-2 text-sm">
                        <span className="text-muted-foreground">{edu.year}</span>
                        <span className="font-medium text-primary">{edu.grade}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-4 text-foreground">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
