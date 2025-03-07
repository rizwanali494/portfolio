import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce platform with user authentication and payment integration.",
    image: "https://images.unsplash.com/photo-1508873535684-277a3cbcc4e8",
    github: "#",
    demo: "#",
  },
  {
    title: "Task Management App",
    description: "A responsive task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40",
    github: "#",
    demo: "#",
  },
  {
    title: "Weather Dashboard",
    description: "A weather dashboard that displays current and forecast weather data using external APIs.",
    image: "https://images.unsplash.com/photo-1739514984003-330f7c1d2007",
    github: "#",
    demo: "#",
  },
  {
    title: "Portfolio Website",
    description: "A personal portfolio website showcasing projects and skills with modern animations.",
    image: "https://images.unsplash.com/photo-1510759395231-72b17d622279",
    github: "#",
    demo: "#",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-12"
        >
          <h2 className="text-3xl font-bold text-center">Projects</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="overflow-hidden h-full">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                  </motion.div>
                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <div className="flex gap-4">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
