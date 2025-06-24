"use client"
import type { BlogPost } from "@/types/blog"

interface BlogPostContentProps {
  post: BlogPost
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  // Safely render HTML content with error handling
  const renderContent = () => {
    try {
      if (!post?.content) {
        return <p>Content not available.</p>
      }

      // Process content to add null checks for links
      const processedContent = post.content.replace(/<a([^>]*?)>/g, (match, attributes) => {
        // Extract href if it exists
        const hrefMatch = attributes.match(/href=["']([^"']*?)["']/)
        const href = hrefMatch?.[1] || "#"

        // Preserve other attributes but ensure href exists
        const otherAttributes = attributes.replace(/href=["'][^"']*?["']/, "").trim()

        return `<a href="${href}"${otherAttributes ? " " + otherAttributes : ""}>`
      })

      return <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: processedContent }} />
    } catch (error) {
      console.error("Error rendering blog content:", error)
      return (
        <div className="p-4 bg-red-50 border border-red-200 rounded-md">
          <p className="text-red-600">Error loading content. Please try again later.</p>
        </div>
      )
    }
  }

  return <div className="blog-post-content">{renderContent()}</div>
}
