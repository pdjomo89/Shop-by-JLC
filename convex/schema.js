import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  customers: defineTable({
    email: v.optional(v.string()),
    phone: v.optional(v.string()),
    stripeCustomerId: v.optional(v.string()),
    locale: v.optional(v.string()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_email", ["email"])
    .index("by_phone", ["phone"])
    .index("by_stripe_customer", ["stripeCustomerId"]),

  subscriptions: defineTable({
    customerId: v.id("customers"),
    plan: v.string(),
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    status: v.string(),
    externalId: v.string(),
    currency: v.optional(v.string()),
    amount: v.optional(v.number()),
    currentPeriodEnd: v.optional(v.number()),
    cancelAt: v.optional(v.number()),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_external_id", ["provider", "externalId"])
    .index("by_customer", ["customerId"]),

  payments: defineTable({
    customerId: v.optional(v.id("customers")),
    subscriptionId: v.optional(v.id("subscriptions")),
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    externalReference: v.string(),
    amount: v.number(),
    currency: v.string(),
    status: v.string(),
    plan: v.optional(v.string()),
    raw: v.optional(v.any()),
    createdAt: v.number(),
  }).index("by_external_reference", ["provider", "externalReference"]),

  webhookEvents: defineTable({
    provider: v.union(v.literal("stripe"), v.literal("campay")),
    eventId: v.string(),
    type: v.optional(v.string()),
    processedAt: v.number(),
  }).index("by_event", ["provider", "eventId"]),

  messages: defineTable({
    name: v.string(),
    email: v.string(),
    subject: v.optional(v.string()),
    body: v.string(),
    locale: v.optional(v.string()),
    userAgent: v.optional(v.string()),
    createdAt: v.number(),
  }).index("by_email", ["email"]),

  users: defineTable({
    customerId: v.id("customers"),
    email: v.string(),
    username: v.string(),
    passwordHash: v.string(),
    mustChangePassword: v.boolean(),
    createdAt: v.number(),
    updatedAt: v.number(),
  })
    .index("by_username", ["username"])
    .index("by_customer", ["customerId"])
    .index("by_email", ["email"]),
});
