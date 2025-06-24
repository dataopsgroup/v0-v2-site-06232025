import type { BlogPost } from "@/types/blog"
import { allBlogPosts } from "@/data/blog/index"

export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return Math.max(1, readTime)
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}

export function getAllPosts(): BlogPost[] {
  // Sort posts by date (newest first)
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
