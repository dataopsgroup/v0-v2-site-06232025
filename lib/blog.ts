import type { BlogPost } from "@/types/blog"
import { allBlogPosts } from "@/data/blog"

// Safe blog post retrieval with error handling
export function getAllPosts(): BlogPost[] {
  try {
    if (!allBlogPosts || !Array.isArray(allBlogPosts)) {
      console.warn("Blog posts array is not available or invalid")
      return []
    }

    return allBlogPosts
      .filter((post) => post && typeof post === "object" && post.id && post.title)
      .sort((a, b) => {
        try {
          const dateA = new Date(a.date || "")
          const dateB = new Date(b.date || "")

          if (isNaN(dateA.getTime()) || isNaN(dateB.getTime())) {
            return 0 // Keep original order if dates are invalid
          }

          return dateB.getTime() - dateA.getTime()
        } catch (error) {
          console.error("Error sorting posts by date:", error)
          return 0
        }
      })
  } catch (error) {
    console.error("Error getting all posts:", error)
    return []
  }
}

export function getPostBySlug(slug: string): BlogPost | null {
  try {
    if (!slug || typeof slug !== "string") {
      return null
    }

    const posts = getAllPosts()
    const post = posts.find((post) => post?.id === slug)

    return post || null
  } catch (error) {
    console.error("Error getting post by slug:", error)
    return null
  }
}

export function getPostsByCategory(category: string): BlogPost[] {
  try {
    if (!category || typeof category !== "string") {
      return []
    }

    const posts = getAllPosts()
    return posts.filter((post) => post?.category === category)
  } catch (error) {
    console.error("Error getting posts by category:", error)
    return []
  }
}

export function searchPosts(query: string): BlogPost[] {
  try {
    if (!query || typeof query !== "string") {
      return getAllPosts()
    }

    const posts = getAllPosts()
    const searchTerm = query.toLowerCase().trim()

    return posts.filter((post) => {
      if (!post) return false

      const searchableText = [
        post.title || "",
        post.excerpt || "",
        post.content || "",
        post.category || "",
        ...(post.tags || []),
      ]
        .join(" ")
        .toLowerCase()

      return searchableText.includes(searchTerm)
    })
  } catch (error) {
    console.error("Error searching posts:", error)
    return []
  }
}

export function getCategories(): string[] {
  try {
    const posts = getAllPosts()
    const categories = posts
      .map((post) => post?.category)
      .filter((category): category is string => Boolean(category))
      .filter((category, index, array) => array.indexOf(category) === index)

    return categories.sort()
  } catch (error) {
    console.error("Error getting categories:", error)
    return []
  }
}

export function getRelatedPosts(currentPost: BlogPost, limit = 3): BlogPost[] {
  try {
    if (!currentPost?.id) {
      return []
    }

    const posts = getAllPosts()
    const related = posts
      .filter((post) => post?.id !== currentPost.id)
      .filter((post) => {
        if (!post) return false

        // Match by category first
        if (post.category === currentPost.category) {
          return true
        }

        // Match by tags
        if (post.tags && currentPost.tags) {
          const commonTags = post.tags.filter((tag) => currentPost.tags?.includes(tag))
          return commonTags.length > 0
        }

        return false
      })
      .slice(0, limit)

    return related
  } catch (error) {
    console.error("Error getting related posts:", error)
    return []
  }
}
