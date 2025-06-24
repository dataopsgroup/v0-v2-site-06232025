import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import Link from "next/link"
import type { BlogPost } from "@/types/blog"
import { formatDate, calculateReadTime } from "@/lib/blog"

interface BlogPostHeaderProps {
  post: BlogPost
}

export default function BlogPostHeader({ post }: BlogPostHeaderProps) {
  const readTime = calculateReadTime(post.content || "")

  // Category color mapping
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Analytics: "bg-blue-600 text-white",
      Operations: "bg-green-600 text-white",
      "Tips & Tricks": "bg-purple-600 text-white",
      "Case Studies": "bg-orange-600 text-white",
      Guides: "bg-indigo-600 text-white",
      Strategy: "bg-red-600 text-white",
      "Private Equity": "bg-gray-700 text-white",
      HubSpot: "bg-yellow-600 text-white",
    }
    return colors[category] || "bg-slate-600 text-white"
  }

  return (
    <header className="py-20 bg-gradient-to-br from-blue-900 to-blue-700">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center text-white">
          <Badge className={`mb-6 ${getCategoryColor(post.category)}`}>{post.category}</Badge>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">{post.title}</h1>

          <p className="text-xl md:text-2xl mb-8 text-white/90">{post.excerpt}</p>

          <div className="flex items-center justify-center gap-6 text-white/80 flex-wrap">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>{formatDate(post.date)}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>{readTime} min read</span>
            </div>
            <Link href="/insights">
              <Button
                variant="outline"
                className="bg-white hover:bg-gray-50 border-white hover:border-gray-200 transition-colors text-blue-900"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Insights
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
