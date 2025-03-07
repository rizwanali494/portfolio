import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-8"
        >
          <h2 className="text-3xl font-bold text-center">About Me</h2>
          
          <Card className="max-w-3xl">
            <CardContent className="pt-6">
              <p className="text-lg leading-relaxed">
                I am a final-year Computer Science student at Superior University,
                driven by a passion for web development and creating impactful
                digital experiences. With a strong foundation in HTML, CSS, and
                JavaScript, I specialize in building responsive and visually
                appealing web applications.
              </p>
              
              <p className="mt-4 text-lg leading-relaxed">
                Currently seeking internship opportunities, I am eager to apply my
                knowledge in a professional setting, contribute to real-world
                projects, and continue growing my expertise in modern web
                technologies. I thrive in collaborative environments and am
                always excited to learn new skills and tackle challenging problems.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
