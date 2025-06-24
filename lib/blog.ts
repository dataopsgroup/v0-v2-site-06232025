import type { BlogPost } from "@/types/blog"
import { getAllPosts as getAllPostsFromData } from "@/data/blog/index"

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
  try {
    return getAllPostsFromData()
  } catch (error) {
    console.error("Error getting blog posts:", error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  try {
    const posts = getAllPosts()
    return posts.find((post) => post.id === slug)
  } catch (error) {
    console.error("Error getting post by slug:", error)
    return undefined
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  try {
    const posts = getAllPosts()
    return posts.filter((post) => post.category === category)
  } catch (error) {
    console.error("Error getting posts by category:", error)
    return []
  }
}

export function searchPosts(query: string): BlogPost[] {
  try {
    const posts = getAllPosts()
    const lowercaseQuery = query.toLowerCase()
    return posts.filter(
      (post) =>
        post.title.toLowerCase().includes(lowercaseQuery) ||
        post.excerpt.toLowerCase().includes(lowercaseQuery) ||
        post.content.toLowerCase().includes(lowercaseQuery) ||
        post.tags?.some((tag) => tag.toLowerCase().includes(lowercaseQuery)),
    )
  } catch (error) {
    console.error("Error searching posts:", error)
    return []
  }
}

export function getCategories(): string[] {
  try {
    const posts = getAllPosts()
    const categories = [...new Set(posts.map((post) => post.category))]
    return categories.sort()
  } catch (error) {
    console.error("Error getting categories:", error)
    return []
  }
}

export function getRelatedPosts(currentPostId: string, category: string, limit = 3): BlogPost[] {
  try {
    const posts = getAllPosts()
    return posts.filter((post) => post.id !== currentPostId && post.category === category).slice(0, limit)
  } catch (error) {
    console.error("Error getting related posts:", error)
    return []
  }
}
