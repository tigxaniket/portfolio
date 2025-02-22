
import { Mail, Github, Linkedin, Download, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const whatsappNumber = "+919108810771";
  const whatsappLink = `https://wa.me/${whatsappNumber}`;
  const cvUrl = "/lovable-uploads/2e876001-cc9b-4d15-b08f-8419f6ca938d.png";
  const { toast } = useToast();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:tigxaniket@gmail.com?subject=Message from ${formData.name}&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = mailtoLink;
    toast({
      title: "Message Ready",
      description: "Your email client will open with the message",
    });
    setFormData({ name: '', phone: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-[#F6F6F7]">
      <div className="max-w-6xl mx-auto px-6">
        <div className="space-y-16">
          <div className="space-y-6 text-center">
            <span className="inline-block text-sm font-medium bg-[#9b87f5]/10 px-4 py-2 rounded-full text-[#7E69AB]">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#222222]">
              Let's Work Together
            </h2>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-2xl p-8 md:p-12 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.08)]">
              <div className="space-y-8">
                <div className="text-center space-y-2">
                  <h3 className="text-xl font-semibold text-[#222222]">Aniket Mahadik</h3>
                  <p className="text-[#555555]">Pune - 411044, Maharashtra</p>
                  <p className="text-[#555555]">+91 9108810771</p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <input
                      type="text"
                      placeholder="Your Name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition-all"
                    />
                    <input
                      type="tel"
                      placeholder="Your Phone Number"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition-all"
                    />
                    <textarea
                      placeholder="Your Message"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#9b87f5] transition-all resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#9b87f5] text-white px-6 py-3 rounded-lg hover:bg-[#7E69AB] transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>

                <div className="flex justify-center gap-6">
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      label: "Email",
                      href: "mailto:tigxaniket@gmail.com",
                      color: "#9b87f5"
                    },
                    {
                      icon: <Github className="w-5 h-5" />,
                      label: "GitHub",
                      href: "https://github.com/tigxaniket",
                      color: "#333333"
                    },
                    {
                      icon: <Linkedin className="w-5 h-5" />,
                      label: "LinkedIn",
                      href: "https://www.linkedin.com/in/aniket-mahadik-84aa10221?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                      color: "#0077B5"
                    },
                    {
                      icon: <MessageCircle className="w-5 h-5" />,
                      label: "WhatsApp",
                      href: whatsappLink,
                      color: "#25D366"
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
                        className="w-12 h-12 rounded-full bg-[#F1F1F1] flex items-center justify-center transition-colors"
                        style={{ color: social.color }}
                      >
                        {social.icon}
                      </div>
                      <span className="text-sm font-medium text-[#333333]">{social.label}</span>
                    </a>
                  ))}
                </div>

                <div className="flex justify-center">
                  <a
                    href={cvUrl}
                    download="aniket_mahadik_cv.png"
                    className="inline-flex items-center gap-2 bg-[#9b87f5] text-white px-6 py-3 rounded-full hover:bg-[#7E69AB] transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download CV
                  </a>
                </div>

                <div className="text-center text-[#555555]">
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
