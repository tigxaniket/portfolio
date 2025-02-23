
import { Mail, Github, Linkedin, Download, MessageCircle, Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

const Contact = () => {
  const whatsappNumber = "+919108810771";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const cvUrl = "/lovable-uploads/2e876001-cc9b-4d15-b08f-8419f6ca938d.png";
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center relative">
            <button
              onClick={() => setIsDark(!isDark)}
              className="absolute right-0 top-0 p-2 rounded-full bg-background border border-border hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <span className="inline-block text-sm font-medium bg-primary/10 px-4 py-2 rounded-full text-primary">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Let's Work Together
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-card rounded-2xl p-8 md:p-12 shadow-sm border border-border">
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-card-foreground">Aniket Mahadik</h3>
                  <p className="text-muted-foreground">Pune - 411044, Maharashtra</p>
                  <p className="text-muted-foreground">+91 9108810771</p>
                </div>

                <div className="flex justify-center gap-6">
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      label: "Email",
                      href: "mailto:tigxaniket@gmail.com",
                      color: "primary"
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      label: "GitHub",
                      href: "https://github.com/tigxaniket",
                      color: "foreground"
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/aniket-mahadik-84aa10221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                      color: "primary"
                    },
                    {
                      icon: <MessageCircle className="w-5 h-5" />,
                      label: "WhatsApp",
                      href: whatsappLink,
                      color: "primary"
                    }
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="group flex flex-col items-center gap-2"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div 
                        className={`w-12 h-12 rounded-full bg-muted flex items-center justify-center transition-colors text-${social.color}`}
                      >
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">{social.label}</span>
                    </a>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={cvUrl}
                    download="aniket_mahadik_cv.png"
                    className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>

                <div className="text-center text-muted-foreground">
                  <p>Additional Qualifications:</p>
                  <ul className="mt-2 space-y-2">
                    <li>Excellent verbal and written communication skills</li>
                    <li>Proven ability to work effectively in team environments</li>
                    <li>Consistently reliable in meeting deadlines</li>
                    <li>Maintain a positive outlook when faced with challenges</li>
                  </ul>
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
