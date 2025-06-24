import type { Metadata } from "next"
import InsightsPageClient from "./InsightsPageClient"

export const metadata: Metadata = {
  title: "Insights & Resources | DataOps Consulting",
  description:
    "Expert insights on data operations, HubSpot optimization, marketing automation, and revenue operations. Learn from our team's experience helping businesses transform their data strategies.",
  keywords:
    "data operations, hubspot consulting, marketing automation, revenue operations, business intelligence, data strategy",
}

export default function InsightsPage() {
  return <InsightsPageClient />
}
