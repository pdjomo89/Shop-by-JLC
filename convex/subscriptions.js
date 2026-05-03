import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const upsert = mutation({
  args: {
    customerId: v.id("customers"),
    plan: v.string(),
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    externalId: v.string(),
    status: v.string(),
    currency: v.optional(v.string()),
    amount: v.optional(v.number()),
    currentPeriodEnd: v.optional(v.number()),
    cancelAt: v.optional(v.number()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db
      .query("subscriptions")
      .withIndex("by_external_id", (q) =>
        q.eq("provider", args.provider).eq("externalId", args.externalId),
      )
      .first();

    if (existing) {
      await ctx.db.patch(existing._id, {
        plan: args.plan,
        status: args.status,
        currency: args.currency,
        amount: args.amount,
        currentPeriodEnd: args.currentPeriodEnd,
        cancelAt: args.cancelAt,
        updatedAt: now,
      });
      return existing._id;
    }

    return await ctx.db.insert("subscriptions", {
      customerId: args.customerId,
      plan: args.plan,
      provider: args.provider,
      externalId: args.externalId,
      status: args.status,
      currency: args.currency,
      amount: args.amount,
      currentPeriodEnd: args.currentPeriodEnd,
      cancelAt: args.cancelAt,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const findByExternalId = query({
  args: {
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    externalId: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("subscriptions")
      .withIndex("by_external_id", (q) =>
        q.eq("provider", args.provider).eq("externalId", args.externalId),
      )
      .first();
  },
});

export const listByCustomer = query({
  args: { customerId: v.id("customers") },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("subscriptions")
      .withIndex("by_customer", (q) => q.eq("customerId", args.customerId))
      .collect();
  },
});
