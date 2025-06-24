import { getAllPosts as getBlogPosts } from "@/data/blog"

export function getAllPostIds() {
  try {
    const posts = getBlogPosts()
    return posts.map((post) => ({
      id: post.id,
    }))
  } catch (error) {
    console.error("Error getting post IDs:", error)
    return []
  }
}

export async function getPostData(id: string) {
  try {
    const posts = getBlogPosts()
    const post = posts.find((post) => post.id === id)

    if (!post) {
      return null
    }

    return {
      id: post.id,
      title: post.title,
      date: post.date,
      contentHtml: post.content,
      ...post,
    }
  } catch (error) {
    console.error("Error getting post data:", error)
    return null
  }
}
