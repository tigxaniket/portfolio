
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-primary/5 px-4 py-2 rounded-full">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Let's Work Together
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm">
              <div className="space-y-8">
                <p className="text-center text-muted-foreground">
                  I'm always interested in hearing about new projects and opportunities.
                </p>

                <div className="flex justify-center gap-6">
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      label: "Email",
                      href: "mailto:your.email@example.com"
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      label: "GitHub",
                      href: "https://github.com"
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                      href: "https://linkedin.com"
                    }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex flex-col items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary/5 transition-colors">
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
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

export default Contact;
