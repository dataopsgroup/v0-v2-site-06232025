export const CANONICAL_DOMAIN = "https://dataopsgroup.com"

export function buildAbsoluteUrl(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith("/") ? path.slice(1) : path

  // Handle empty path (home page)
  if (!cleanPath) {
    return CANONICAL_DOMAIN
  }

  return `${CANONICAL_DOMAIN}/${cleanPath}`
}

export function buildCanonicalUrl(path: string): string {
  return buildAbsoluteUrl(path)
}
