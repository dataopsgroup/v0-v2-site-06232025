"use client"
import type { BlogPost } from "@/types/blog"
import { Badge } from "@/components/ui/badge"

interface BlogPostHeaderProps {
  post: BlogPost
}

export function BlogPostHeader({ post }: BlogPostHeaderProps) {
  // Safe date formatting with error handling
  const formatDate = (dateString?: string) => {
    try {
      if (!dateString) return "Date not available"

      const date = new Date(dateString)
      if (isNaN(date.getTime())) return "Invalid date"

      return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    } catch (error) {
      console.error("Error formatting date:", error)
      return "Date not available"
    }
  }

  // Safe category color mapping
  const getCategoryColor = (category?: string) => {
    if (!category) return "default"

    const colorMap: Record<string, string> = {
      "Data Strategy": "blue",
      HubSpot: "orange",
      "Marketing Analytics": "green",
      CRM: "purple",
      Automation: "red",
    }

    return colorMap[category] || "default"
  }

  return (
    <header className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {post?.category && (
            <Badge variant="secondary" className={`mb-4 bg-white/20 text-white hover:bg-white/30`}>
              {post.category}
            </Badge>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-4">{post?.title || "Untitled Post"}</h1>

          {post?.excerpt && <p className="text-xl text-blue-100 mb-6 max-w-3xl mx-auto">{post.excerpt}</p>}

          <div className="flex flex-wrap justify-center items-center gap-4 text-blue-100">
            {post?.author && <span>By {post.author}</span>}

            <span>•</span>

            <time dateTime={post?.date}>{formatDate(post?.date)}</time>

            {post?.tags && post.tags.length > 0 && (
              <>
                <span>•</span>
                <div className="flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map((tag, index) => (
                    <Badge key={`${tag}-${index}`} variant="outline" className="bg-white/10 text-white border-white/20">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
