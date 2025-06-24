"use client"

import type React from "react"

import { useState, useEffect } from "react"
import type { Post } from "@/app/types"
import CategoryFilter from "@/components/CategoryFilter"
import SearchBar from "@/components/SearchBar"
import ArticleCard from "@/components/ArticleCard"

interface InsightsPageClientProps {
  posts: Post[]
}

const InsightsPageClient: React.FC<InsightsPageClientProps> = ({ posts }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>("All Topics")
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(posts)

  useEffect(() => {
    let filtered = posts

    if (selectedCategory !== "All Topics") {
      filtered = filtered.filter((post) => post.category === selectedCategory)
    }

    if (searchQuery) {
      filtered = filtered.filter(
        (post) =>
          post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          post.content.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    }

    setFilteredPosts(filtered)
  }, [selectedCategory, searchQuery, posts])

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Insights</h1>

      <div className="flex flex-col md:flex-row items-center justify-between mb-4">
        <CategoryFilter
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
          categories={["All Topics", ...Array.from(new Set(posts.map((post) => post.category)))]}
        />
        <SearchBar setSearchQuery={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
      {filteredPosts.length === 0 && (
        <div className="text-center mt-4">
          <p>No articles found.</p>
        </div>
      )}
    </div>
  )
}

export default InsightsPageClient
