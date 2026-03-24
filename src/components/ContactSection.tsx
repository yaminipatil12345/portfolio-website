import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';

const contactInfo = [
  {
    icon: Mail,
    label: 'Email',
    value: 'yaminipatil234@gmail.com',
    href: 'mailto:yaminipatil234@gmail.com',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 8459221659',
    href: 'tel:+918459221659',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Nashik, Maharashtra, India',
    href: null,
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
          <p className="section-subtitle mt-6">
            Prefer a quick chat? Reach me directly through any of the options below.
          </p>
        </motion.div>

        {/* Contact Info Cards - 3 column grid like reference */}
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {contactInfo.map((info, index) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-6"
            >
              <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-4">
                <info.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <p className="text-muted-foreground text-sm">{info.label}</p>
              {info.href ? (
                <a href={info.href} className="text-foreground font-medium hover:text-primary transition-colors">
                  {info.value}
                </a>
              ) : (
                <p className="text-foreground font-medium">{info.value}</p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-4"
        >
          <a href="https://github.com/yaminipatil12345" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="#projects" className="social-icon">
            <ExternalLink className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
