"use client"

import { Button } from "@/components/ui/button"

interface CategoryFilterProps {
  categories: string[]
  selectedCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 justify-center mb-8">
      <Button
        variant={selectedCategory === "All Topics" ? "default" : "outline"}
        onClick={() => onCategoryChange("All Topics")}
        className="mb-2"
      >
        All Topics
      </Button>
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          onClick={() => onCategoryChange(category)}
          className="mb-2"
        >
          {category}
        </Button>
      ))}
    </div>
  )
}
