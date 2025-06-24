"use client"

import { useState, useMemo } from "react"
import type { BlogPost } from "@/types/blog"
import { BlogCard } from "@/components/blog/BlogCard"
import { SearchBar } from "@/components/SearchBar"
import { CategoryFilter } from "@/components/CategoryFilter"

interface InsightsPageClientProps {
  initialPosts: BlogPost[]
  categories: string[]
}

export default function InsightsPageClient({ initialPosts = [], categories = [] }: InsightsPageClientProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Topics")

  const filteredPosts = useMemo(() => {
    if (!Array.isArray(initialPosts)) {
      return []
    }

    let filtered = initialPosts

    // Filter by category
    if (selectedCategory !== "All Topics") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase()
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(query) ||
          post.excerpt.toLowerCase().includes(query) ||
          post.tags?.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    return filtered
  }, [initialPosts, selectedCategory, searchQuery])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Insights & Resources</h1>
            <p className="text-xl text-gray-600 mb-8">
              Expert insights on data operations, marketing analytics, and business intelligence
            </p>

            {/* Search and Filter */}
            <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
              <SearchBar value={searchQuery} onChange={setSearchQuery} placeholder="Search articles..." />
              <CategoryFilter
                categories={["All Topics", ...categories]}
                selectedCategory={selectedCategory}
                onCategoryChange={setSelectedCategory}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No articles found</h3>
              <p className="text-gray-600">
                {searchQuery || selectedCategory !== "All Topics"
                  ? "Try adjusting your search or filter criteria"
                  : "Check back soon for new content"}
              </p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
