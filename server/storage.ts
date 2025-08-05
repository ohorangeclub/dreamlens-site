import { type DreamInterpretation, type InsertDreamInterpretation } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getDreamInterpretation(id: string): Promise<DreamInterpretation | undefined>;
  getAllDreamInterpretations(): Promise<DreamInterpretation[]>;
  createDreamInterpretation(interpretation: Omit<InsertDreamInterpretation, 'id'> & { interpretation: string; warmMessage: string; }): Promise<DreamInterpretation>;
}

export class MemStorage implements IStorage {
  private interpretations: Map<string, DreamInterpretation>;

  constructor() {
    this.interpretations = new Map();
  }

  async getDreamInterpretation(id: string): Promise<DreamInterpretation | undefined> {
    return this.interpretations.get(id);
  }

  async getAllDreamInterpretations(): Promise<DreamInterpretation[]> {
    return Array.from(this.interpretations.values()).sort(
      (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  }

  async createDreamInterpretation(
    data: Omit<InsertDreamInterpretation, 'id'> & { interpretation: string; warmMessage: string; }
  ): Promise<DreamInterpretation> {
    const id = randomUUID();
    const interpretation: DreamInterpretation = {
      id,
      dreamText: data.dreamText,
      interpretation: data.interpretation,
      warmMessage: data.warmMessage,
      language: data.language || "ko",
      createdAt: new Date(),
      metadata: null,
    };
    
    this.interpretations.set(id, interpretation);
    return interpretation;
  }
}

export const storage = new MemStorage();
