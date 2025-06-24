"use client"
import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
  className?: string
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
  className = "",
}: CategoryFilterProps) {
  // Category color mapping
  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      Analytics: "bg-blue-600 hover:bg-blue-700 text-white",
      Operations: "bg-green-600 hover:bg-green-700 text-white",
      "Tips & Tricks": "bg-purple-600 hover:bg-purple-700 text-white",
      "Case Studies": "bg-orange-600 hover:bg-orange-700 text-white",
      Guides: "bg-indigo-600 hover:bg-indigo-700 text-white",
      Strategy: "bg-red-600 hover:bg-red-700 text-white",
      "Private Equity": "bg-gray-700 hover:bg-gray-800 text-white",
      HubSpot: "bg-yellow-600 hover:bg-yellow-700 text-white",
    }
    return colors[category] || "bg-slate-600 hover:bg-slate-700 text-white"
  }

  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      <Button
        variant={selectedCategory === null ? "default" : "outline"}
        size="sm"
        onClick={() => onCategoryChange(null)}
        className="text-sm"
      >
        All Categories
      </Button>

      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onCategoryChange(category)}
          className={`text-sm ${selectedCategory === category ? getCategoryColor(category) : "hover:bg-gray-100"}`}
        >
          {category}
        </Button>
      ))}
    </div>
  )
}

export default CategoryFilter
