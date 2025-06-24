"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface ArticleCardProps {
  post: BlogPost
}

// Enhanced color-coding system for topic tags
const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    Analytics: "bg-blue-600 text-white hover:bg-blue-700",
    Strategy: "bg-purple-600 text-white hover:bg-purple-700",
    Operations: "bg-green-600 text-white hover:bg-green-700",
    HubSpot: "bg-orange-600 text-white hover:bg-orange-700",
    Marketing: "bg-pink-600 text-white hover:bg-pink-700",
    Sales: "bg-red-600 text-white hover:bg-red-700",
    "Data Management": "bg-indigo-600 text-white hover:bg-indigo-700",
    "Revenue Operations": "bg-teal-600 text-white hover:bg-teal-700",
    "Case Study": "bg-blue-700 text-white hover:bg-blue-800",
    "Best Practices": "bg-lime-600 text-white hover:bg-lime-700",
  }
  return categoryColors[category] || "bg-gray-600 text-white hover:bg-gray-700"
}

export default function ArticleCard({ post }: ArticleCardProps) {
  const readTime = calculateReadTime(post.content || "")

  return (
    <Link href={`/insights/${post.id}`} className="group">
      <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
        <CardHeader className="pb-4">
          <div className="mb-4">
            <Badge className={`${getCategoryColor(post.category)} transition-colors duration-200`}>
              {post.category}
            </Badge>
          </div>

          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {readTime} min read
            </div>
          </div>

          <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 leading-tight">
            {post.title}
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-0">
          <CardDescription className="mb-4 line-clamp-3 text-gray-600 leading-relaxed">{post.excerpt}</CardDescription>

          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-1">
              {post.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {post.tags.length > 3 && (
                <Badge variant="secondary" className="text-xs">
                  +{post.tags.length - 3} more
                </Badge>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}
