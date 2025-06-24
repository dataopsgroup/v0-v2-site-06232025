// HTML sanitization utility to prevent XSS attacks
export function sanitizeHtml(html: string): string {
  // Basic HTML sanitization - removes dangerous elements and attributes
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/<object\b[^<]*(?:(?!<\/object>)<[^<]*)*<\/object>/gi, "")
    .replace(/<embed\b[^<]*(?:(?!<\/embed>)<[^<]*)*<\/embed>/gi, "")
    .replace(/javascript:/gi, "")
    .replace(/on\w+\s*=/gi, "")
    .replace(/style\s*=\s*["'][^"']*["']/gi, "")
}

export function createSafeHtml(content: string) {
  return { __html: sanitizeHtml(content) }
}
