"use client"

import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SearchBarProps {
  searchQuery: string
  onSearchChange: (query: string) => void
  placeholder?: string
}

export default function SearchBar({ searchQuery, onSearchChange, placeholder = "Search articles..." }: SearchBarProps) {
  return (
    <div className="relative max-w-md mx-auto mb-8">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
      <Input
        type="text"
        placeholder={placeholder}
        value={searchQuery}
        onChange={(e) => onSearchChange(e.target.value)}
        className="pl-10 pr-4 py-2 w-full"
      />
    </div>
  )
}
