import { kv } from "~/lib/lib";

import { z } from "zod";
import { Review, reviewSchema } from "~/lib/validations";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const reviewsRouter = createTRPCRouter({
    getReviews: publicProcedure.query(async () => {
        const reviews = (await kv.get("reviews") ?? []) as Review[];
        return reviews.filter((review) => review.approved);
    }),
    getAllReviews: publicProcedure.query(async () => {
        const reviews = (await kv.get("reviews") ?? []) as Review[];
        return reviews;
    }),
    addReview: publicProcedure.input(reviewSchema).mutation(async ({ input }) => {
        const reviews = (await kv.get("reviews") ?? []) as Review[];
        reviews.push(input);
        await kv.set("reviews", JSON.stringify(reviews));
        return reviews;
    }),
    approveReview: publicProcedure.input(z.object({
        id: z.string(),
    })).mutation(async ({ input }) => {
        const reviews = (await kv.get("reviews") ?? []) as Review[];
        const review = reviews.find((review) => review.id === input.id);
        if (!review) {
            throw new Error("Review not found");
        }
        review.approved = true;
        await kv.set("reviews", JSON.stringify(reviews));
        return reviews;
    }),
    disapproveReview: publicProcedure.input(z.object({
        id: z.string(),
    })).mutation(async ({ input }) => {
        const reviews = (await kv.get("reviews") ?? []) as Review[];
        const review = reviews.find((review) => review.id === input.id);
        if (!review) {
            throw new Error("Review not found");
        }
        review.approved = false;
        await kv.set("reviews", JSON.stringify(reviews));
        return reviews;
    }),
});