import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Profile routes
  app.get("/api/profile", async (_req, res) => {
    try {
      const profile = await storage.getProfile();
      res.json(profile || {
        name: "Ghazanfar Abbas",
        title: "Web Developer",
        bio: "Final-year Computer Science student passionate about web development and creating stunning user experiences.",
        imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf",
        resumeUrl: "/resume.pdf"
      });
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch profile" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}