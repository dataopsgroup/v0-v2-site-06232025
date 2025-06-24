"use client"

import { useState, useEffect, useMemo } from "react"
import BlogCard from "./BlogCard"
import type { BlogPost } from "@/types/blog"

interface LazyBlogGridProps {
  posts: BlogPost[]
  searchQuery: string
  selectedCategory: string
}

const POSTS_PER_PAGE = 12

export default function LazyBlogGrid({ posts, searchQuery, selectedCategory }: LazyBlogGridProps) {
  const [displayedPosts, setDisplayedPosts] = useState<BlogPost[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)

  // Filter posts based on search and category
  const filteredPosts = useMemo(() => {
    let filtered = posts

    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    if (selectedCategory !== "All Topics") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    return filtered
  }, [posts, searchQuery, selectedCategory])

  // Load initial posts
  useEffect(() => {
    const initialPosts = filteredPosts.slice(0, POSTS_PER_PAGE)
    setDisplayedPosts(initialPosts)
    setCurrentPage(1)
  }, [filteredPosts])

  // Load more posts
  const loadMore = async () => {
    if (loading) return

    setLoading(true)

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 300))

    const nextPage = currentPage + 1
    const startIndex = (nextPage - 1) * POSTS_PER_PAGE
    const endIndex = startIndex + POSTS_PER_PAGE
    const newPosts = filteredPosts.slice(startIndex, endIndex)

    setDisplayedPosts((prev) => [...prev, ...newPosts])
    setCurrentPage(nextPage)
    setLoading(false)
  }

  const hasMore = displayedPosts.length < filteredPosts.length

  return (
    <div className="space-y-8">
      {/* Results count */}
      <div className="text-center">
        <p className="text-gray-600">
          Showing {displayedPosts.length} of {filteredPosts.length} articles
        </p>
      </div>

      {/* Blog grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {displayedPosts.map((post) => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>

      {/* Load more button */}
      {hasMore && (
        <div className="text-center">
          <button
            onClick={loadMore}
            disabled={loading}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            {loading ? "Loading..." : "Load More Articles"}
          </button>
        </div>
      )}

      {/* No results message */}
      {filteredPosts.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No articles found matching your criteria.</p>
          <p className="text-gray-500 mt-2">Try adjusting your search or category filter.</p>
        </div>
      )}
    </div>
  )
}
