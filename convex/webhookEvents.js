import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const ensureUnique = mutation({
  args: {
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    eventId: v.string(),
    type: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("webhookEvents")
      .withIndex("by_event", (q) =>
        q.eq("provider", args.provider).eq("eventId", args.eventId),
      )
      .first();

    if (existing) return { fresh: false };

    await ctx.db.insert("webhookEvents", {
      provider: args.provider,
      eventId: args.eventId,
      type: args.type,
      processedAt: Date.now(),
    });
    return { fresh: true };
  },
});
