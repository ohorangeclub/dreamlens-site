import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const dreamInterpretations = pgTable("dream_interpretations", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  dreamText: text("dream_text").notNull(),
  interpretation: text("interpretation").notNull(),
  warmMessage: text("warm_message").notNull(),
  language: varchar("language", { length: 2 }).notNull().default("ko"),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  metadata: jsonb("metadata"),
});

export const insertDreamInterpretationSchema = createInsertSchema(dreamInterpretations).pick({
  dreamText: true,
  language: true,
});

export const interpretDreamSchema = z.object({
  dreamText: z.string().min(10, "Dream text must be at least 10 characters"),
  language: z.enum(["ko", "en"]).default("ko"),
});

export type InsertDreamInterpretation = z.infer<typeof insertDreamInterpretationSchema>;
export type DreamInterpretation = typeof dreamInterpretations.$inferSelect;
export type InterpretDreamRequest = z.infer<typeof interpretDreamSchema>;
