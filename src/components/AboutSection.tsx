import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">About Me</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="glass-card p-8 md:p-10">
            <h3 className="text-2xl font-display font-semibold mb-6">IT Engineering Student</h3>
            
            <p className="text-muted-foreground leading-relaxed mb-8">
              IT engineering student focused on solving real-world problems through web development and AI. 
              Built full-stack applications and currently exploring machine learning, with strong 
              problem-solving and decision-making skills.
            </p>

            <div className="space-y-6">
              <div className="flex items-center gap-2 mb-4">
                <GraduationCap className="w-6 h-6 text-primary" />
                <h4 className="text-lg font-semibold text-foreground">Education</h4>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium">Bachelor of Technology (Information Technology)</p>
                    <p className="text-muted-foreground text-sm">K. K. Wagh Institute of Engineering Education and Research</p>
                    <p className="text-muted-foreground text-sm">Expected Graduation: 2027</p>
                    <p className="text-muted-foreground text-sm">CGPA: 8.5</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium">Higher Secondary (12th Standard)</p>
                    <p className="text-muted-foreground text-sm">Percentage: 85%</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                  <div>
                    <p className="font-medium">Secondary School (10th Standard)</p>
                    <p className="text-muted-foreground text-sm">Percentage: 89%</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
