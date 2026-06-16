import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createCredentials = mutation({
  args: {
    customerId: v.id("customers"),
    email: v.string(),
    username: v.string(),
    passwordHash: v.string(),
  },
  handler: async (ctx, args) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_customer", (q) => q.eq("customerId", args.customerId))
      .first();

    const now = Date.now();
    if (existing) {
      return {
        userId: existing._id,
        username: existing.username,
        alreadyExisted: true,
      };
    }

    const userId = await ctx.db.insert("users", {
      customerId: args.customerId,
      email: args.email,
      username: args.username,
      passwordHash: args.passwordHash,
      mustChangePassword: true,
      createdAt: now,
      updatedAt: now,
    });

    return { userId, username: args.username, alreadyExisted: false };
  },
});

export const getByUsername = query({
  args: { username: v.string() },
  handler: async (ctx, args) => {
    return await ctx.db
      .query("users")
      .withIndex("by_username", (q) => q.eq("username", args.username))
      .first();
  },
});
