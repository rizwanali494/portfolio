import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiGit } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, progress: 90 },
  { name: "CSS3", icon: SiCss3, progress: 85 },
  { name: "JavaScript", icon: SiJavascript, progress: 80 },
  { name: "React", icon: SiReact, progress: 75 },
  { name: "Tailwind CSS", icon: SiTailwindcss, progress: 85 },
  { name: "Git", icon: SiGit, progress: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-12"
        >
          <h2 className="text-3xl font-bold text-center">Skills</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-4"
              >
                <skill.icon className="w-8 h-8 text-primary" />
                <div className="flex-1">
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-muted-foreground">{skill.progress}%</span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
