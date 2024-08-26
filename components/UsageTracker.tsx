"use client"
import posthog from "posthog-js";

export interface UsageTrackerProps {
  usageFacts: {
    quoteYear: number;
    factYear: number;
    birthYear: number;
  }
}

export function UsageTracker({ usageFacts }: UsageTrackerProps) {
  posthog.capture("usageEvent", usageFacts)
  posthog.capture("usage.birthYear", { value: usageFacts.birthYear })
  posthog.capture("usage.factYear", { value: usageFacts.factYear })
  posthog.capture("usage.quoteYear", { value: usageFacts.quoteYear })
  return null
}
