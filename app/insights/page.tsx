import { getAllPosts, getCategories } from "@/lib/blog"
import type { Metadata } from "next"
import InsightsPageClient from "./InsightsPageClient"

export const metadata: Metadata = {
  title: "Insights & Resources | DataOps Group",
  description:
    "Expert insights on data operations, marketing analytics, and business intelligence. Learn from our team of data professionals.",
  keywords: ["data operations", "marketing analytics", "business intelligence", "data insights"],
}

export default function InsightsPage() {
  let posts = []
  let categories = []

  try {
    posts = getAllPosts()
    categories = getCategories()
  } catch (error) {
    console.error("Error loading blog data:", error)
    // Provide fallback data
    posts = []
    categories = ["Marketing Analytics", "Data Management", "Business Intelligence"]
  }

  return <InsightsPageClient initialPosts={posts} categories={categories} />
}
