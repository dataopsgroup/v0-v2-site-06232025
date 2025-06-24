import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar } from "lucide-react"
import type { BlogPost } from "@/types/blog"
import { formatDate } from "@/lib/blog"

interface RelatedArticlesProps {
  posts: BlogPost[]
}

// Enhanced color-coding system for topic tags with unique colors
const getCategoryColor = (category: string): string => {
  const categoryColors: Record<string, string> = {
    // Core Topics
    Analytics: "bg-blue-600 text-white hover:bg-blue-700",
    Strategy: "bg-purple-600 text-white hover:bg-purple-700",
    Operations: "bg-green-600 text-white hover:bg-green-700",
    HubSpot: "bg-orange-600 text-white hover:bg-orange-700",
    Marketing: "bg-pink-600 text-white hover:bg-pink-700",
    Sales: "bg-red-600 text-white hover:bg-red-700",

    // Data & Management
    "Data Management": "bg-indigo-600 text-white hover:bg-indigo-700",
    "Data Quality": "bg-stone-700 text-white hover:bg-stone-800",
    "Data Operations": "bg-slate-700 text-white hover:bg-slate-800",
    "Data Strategy": "bg-zinc-700 text-white hover:bg-zinc-800",

    // Revenue & Operations
    "Revenue Operations": "bg-teal-600 text-white hover:bg-teal-700",
    "Marketing Operations": "bg-cyan-700 text-white hover:bg-cyan-800",
    "Sales Operations": "bg-emerald-700 text-white hover:bg-emerald-800",
    RevOps: "bg-teal-700 text-white hover:bg-teal-800",

    // Business & Industry
    "Private Equity": "bg-slate-600 text-white hover:bg-slate-700",
    "Case Study": "bg-blue-700 text-white hover:bg-blue-800",
    Implementation: "bg-rose-600 text-white hover:bg-rose-700",
    Consulting: "bg-sky-600 text-white hover:bg-sky-700",

    // Best Practices & Tips
    "Best Practices": "bg-lime-600 text-white hover:bg-lime-700",
    "Tips & Tricks": "bg-fuchsia-600 text-white hover:bg-fuchsia-700",
    Insights: "bg-green-700 text-white hover:bg-green-800",
    "Thought Leadership": "bg-indigo-700 text-white hover:bg-indigo-800",
  }

  return categoryColors[category] || "bg-gray-600 text-white hover:bg-gray-700"
}

export function RelatedArticles({ posts }: RelatedArticlesProps) {
  if (!posts || posts.length === 0) {
    return null
  }

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Related Articles</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.id} href={`/insights/${post.id}`} className="group">
                <Card className="h-full hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                  <CardHeader className="pb-4">
                    <div className="mb-4">
                      <Badge className={`${getCategoryColor(post.category)} transition-colors duration-200`}>
                        {post.category}
                      </Badge>
                    </div>

                    <div className="flex items-center gap-1 text-sm text-gray-500 mb-2">
                      <Calendar className="w-4 h-4" />
                      {formatDate(post.date)}
                    </div>
                    <CardTitle className="group-hover:text-blue-600 transition-colors duration-300 leading-tight">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <CardDescription className="mb-4 line-clamp-3 text-gray-600 leading-relaxed">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
