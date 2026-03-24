import { motion } from 'framer-motion';
import { Github, Linkedin, ExternalLink, Mail } from 'lucide-react';
import avatarImage from '@/assets/avatar.png';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mx-auto border-4 border-transparent bg-gradient-to-br from-primary to-secondary p-1">
              <img
                src={avatarImage}
                alt="Yamini Gokul Patil"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-5xl md:text-7xl font-display font-bold mb-4 gradient-text"
        >
          YAMINI PATIL
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          IT Engineering Student | Web Developer
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center justify-center gap-4 mb-10"
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
          <a href="mailto:yaminipatil234@gmail.com" className="social-icon">
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>

        <motion.a
          href="#contact"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="inline-block px-8 py-4 rounded-full bg-gradient-primary text-primary-foreground font-semibold glow-button transition-all duration-300 hover:scale-105"
        >
          Let's Connect
        </motion.a>
      </div>
    </section>
  );
};

export default HeroSection;
