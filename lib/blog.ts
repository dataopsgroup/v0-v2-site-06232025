export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export function calculateReadTime(content: string): number {
  const wordsPerMinute = 200
  const words = content.trim().split(/\s+/).length
  const readTime = Math.ceil(words / wordsPerMinute)
  return readTime
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w ]+/g, "")
    .replace(/ +/g, "-")
}
