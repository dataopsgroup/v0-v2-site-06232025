import type React from "react"

interface RelatedArticlesProps {
  currentPostId?: string
  category?: string
}

export const RelatedArticles: React.FC<RelatedArticlesProps> = ({ currentPostId, category }) => {
  return (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
      <p className="text-gray-600">Related articles will appear here.</p>
    </div>
  )
}
