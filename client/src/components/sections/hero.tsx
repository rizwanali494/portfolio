import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { Skeleton } from "@/components/ui/skeleton";

export function Hero() {
  const { data: profile, isLoading } = useQuery({
    queryKey: ["/api/profile"],
  });

  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center gap-8">
          {isLoading ? (
            <Skeleton className="w-32 h-32 rounded-full" />
          ) : (
            <motion.img
              src={profile?.imageUrl}
              alt="Ghazanfar Abbas"
              className="w-32 h-32 rounded-full object-cover"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
            />
          )}

          <motion.h1
            className="text-4xl md:text-6xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {isLoading ? (
              <Skeleton className="h-12 w-64 mx-auto" />
            ) : (
              profile?.name || "Ghazanfar Abbas"
            )}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {isLoading ? (
              <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
            ) : (
              profile?.bio || "Final-year Computer Science student passionate about web development and creating stunning user experiences."
            )}
          </motion.p>

          <motion.div
            className="flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild>
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href={profile?.resumeUrl || "/resume.pdf"} download>
                Download Resume
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
          duration: 1.5,
        }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
}