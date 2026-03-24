import { motion } from 'framer-motion';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Wanderlust – Travel Listing Platform',
    role: 'Full-Stack Developer',
    timeline: 'April 2025 – June 2025 ',
    description: [
      'Built a full-stack travel web application with secure user login, listing creation, and review functionality.',
      'Implemented CRUD operations and authentication, delivering a smooth and responsive user experience.',
      'Designed dynamic pages with EJS and handled backend logic using Node.js, Express, and MongoDB.',
      'Enabled users to browse, create, and review travel listings seamlessly.',
    ],
    technologies: ['Node.js', 'Express', 'MongoDB', 'EJS'],
    github: 'https://github.com/yaminipatil12345',
  },
  {
    title: 'CityCare – Citizen Complaint Website',
    role: 'Frontend Developer',
    timeline: 'July 2025 – October 2025',
    description: [
      'Developed a full-stack web application for reporting and tracking civic issues such as garbage and road damage.',
      'The platform provides a responsive and user-friendly interface for users to submit complaints and monitor their status efficiently.',
      'Ensures smooth interaction and seamless communication with backend services for effective issue management.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/yaminipatil12345',
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title font-display">Projects</h2>
          <div className="w-20 h-1 bg-gradient-primary mx-auto rounded-full mt-4" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card"
            >
              <div className="mb-4">
                <h3 className="text-xl font-display font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm">{project.role}</p>
                <p className="text-muted-foreground text-sm">{project.timeline}</p>
              </div>

              <ul className="space-y-2 mb-6">
                {project.description.map((point, i) => (
                  <li key={i} className="flex items-start gap-2 text-muted-foreground text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span key={tech} className="skill-tag text-xs">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-medium glow-button transition-all hover:scale-105"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;