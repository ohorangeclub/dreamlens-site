import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { interpretDreamSchema } from "@shared/schema";
import { interpretDreamWithAI } from "./services/gemini";

export async function registerRoutes(app: Express): Promise<Server> {
  // Interpret dream
  app.post("/api/dreams/interpret", async (req, res) => {
    try {
      const { dreamText, language } = interpretDreamSchema.parse(req.body);
      
      // Get AI interpretation
      const aiResult = await interpretDreamWithAI(dreamText, language);
      
      // Save to storage
      const interpretation = await storage.createDreamInterpretation({
        dreamText,
        language,
        interpretation: aiResult.interpretation,
        warmMessage: aiResult.warmMessage,
      });
      
      res.json(interpretation);
    } catch (error) {
      console.error("Dream interpretation error:", error);
      res.status(500).json({ 
        message: error instanceof Error ? error.message : "Failed to interpret dream" 
      });
    }
  });

  // Get all interpretations
  app.get("/api/dreams", async (req, res) => {
    try {
      const interpretations = await storage.getAllDreamInterpretations();
      res.json(interpretations);
    } catch (error) {
      console.error("Get interpretations error:", error);
      res.status(500).json({ message: "Failed to get interpretations" });
    }
  });

  // Get specific interpretation
  app.get("/api/dreams/:id", async (req, res) => {
    try {
      const interpretation = await storage.getDreamInterpretation(req.params.id);
      if (!interpretation) {
        return res.status(404).json({ message: "Interpretation not found" });
      }
      res.json(interpretation);
    } catch (error) {
      console.error("Get interpretation error:", error);
      res.status(500).json({ message: "Failed to get interpretation" });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
