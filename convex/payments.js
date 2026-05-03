import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const record = mutation({
  args: {
    customerId: v.optional(v.id("customers")),
    subscriptionId: v.optional(v.id("subscriptions")),
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    externalReference: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.string(),
    plan: v.optional(v.string()),
    raw: v.optional(v.any()),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("payments")
      .withIndex("by_external_reference", (q) =>
        q.eq("provider", args.provider).eq("externalReference", args.externalReference),
      )
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        status: args.status,
        amount: args.amount,
        currency: args.currency,
        plan: args.plan,
        raw: args.raw,
      });
      return existing._id;
    }

    return await ctx.db.insert("payments", {
      ...args,
      createdAt: Date.now(),
    });
  },
});
