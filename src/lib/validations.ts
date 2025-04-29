import { z } from "zod";

export const reviewSchema = z.object({
    id: z.string(),
    name: z.string(),
    role: z.string(),
    company: z.string(),
    review: z.string(),
    image: z.string().optional(),
    approved: z.boolean().optional().default(false),
    createdAt: z.date(),
});

export type Review = z.infer<typeof reviewSchema>;