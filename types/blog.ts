export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content?: string
  author: string
  date: string
  category: string
  tags?: string[]
  readTime?: number
  featured?: boolean
  published?: boolean
}

export interface BlogCategory {
  id: string
  name: string
  description: string
  count: number
}
