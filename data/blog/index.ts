import type { BlogPost } from "@/types/blog"
// import customerAcquisitionCost from "./customer-acquisition-cost"
import crmCleanupPlan from "./crm-cleanup-plan"
import threeTipsForSmartWorkflows from "./3-tips-for-smart-workflows"
import howToHireAHubspotConsultant from "./how-to-hire-a-hubspot-consultant"
import marketingDataManagement from "./marketing-data-management"

export const allBlogPosts: BlogPost[] = [
  // customerAcquisitionCost, // Temporarily removed to isolate href error
  crmCleanupPlan,
  threeTipsForSmartWorkflows,
  howToHireAHubspotConsultant,
  marketingDataManagement,
]

export function getAllPosts(): BlogPost[] {
  return allBlogPosts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.id === slug)
}

export function getPostsByCategory(category: string): BlogPost[] {
  return allBlogPosts.filter((post) => post.category === category)
}

export function searchPosts(query: string): BlogPost[] {
  const lowercaseQuery = query.toLowerCase()
  return allBlogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
  )
}

export function getCategories(): string[] {
  const categories = [...new Set(allBlogPosts.map((post) => post.category))]
  return categories.sort()
}

export function getRelatedPosts(currentPostId: string, category: string, limit = 3): BlogPost[] {
  return allBlogPosts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, limit)
}
