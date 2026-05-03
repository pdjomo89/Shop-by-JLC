import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const upsertByEmail = mutation({
  args: {
    email: v.string(),
    stripeCustomerId: v.optional(v.string()),
    locale: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db
      .query("customers")
      .withIndex("by_email", (q) => q.eq("email", args.email))
      .first();

    if (existing) {
      const patch = { updatedAt: now };
      if (args.stripeCustomerId && args.stripeCustomerId !== existing.stripeCustomerId) {
        patch.stripeCustomerId = args.stripeCustomerId;
      }
      if (args.locale && args.locale !== existing.locale) patch.locale = args.locale;
      await ctx.db.patch(existing._id, patch);
      return existing._id;
    }

    return await ctx.db.insert("customers", {
      email: args.email,
      stripeCustomerId: args.stripeCustomerId,
      locale: args.locale,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const upsertByPhone = mutation({
  args: { phone: v.string(), email: v.optional(v.string()) },
  handler: async (ctx, args) => {
    const now = Date.now();
    const existing = await ctx.db
      .query("customers")
      .withIndex("by_phone", (q) => q.eq("phone", args.phone))
      .first();

    if (existing) {
      const patch = { updatedAt: now };
      if (args.email && args.email !== existing.email) patch.email = args.email;
      await ctx.db.patch(existing._id, patch);
      return existing._id;
    }

    return await ctx.db.insert("customers", {
      phone: args.phone,
      email: args.email,
      createdAt: now,
      updatedAt: now,
    });
  },
});

export const getByStripeCustomerId = query({
  args: { stripeCustomerId: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("customers")
      .withIndex("by_stripe_customer", (q) => q.eq("stripeCustomerId", args.stripeCustomerId))
      .first();
  },
});
