import { getPostData, getAllPostIds } from "@/lib/posts"
import { notFound } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

// Generate static params for all blog posts
export async function generateStaticParams() {
  const postIds = getAllPostIds()
  return postIds.map((post) => ({
    id: post.params.id,
  }))
}

// Generate metadata for each post
export async function generateMetadata({ params }: { params: { id: string } }) {
  try {
    const postData = await getPostData(params.id)
    return {
      title: postData.title,
      description: `Blog post: ${postData.title}`,
    }
  } catch (error) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }
}

export default async function Post({ params }: { params: { id: string } }) {
  let postData

  try {
    postData = await getPostData(params.id)
  } catch (error) {
    console.error("Error loading post:", error)
    notFound()
  }

  if (!postData) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-4xl font-bold mb-4">{postData.title}</CardTitle>
          <time className="text-gray-500 text-lg">
            {new Date(postData.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
        </CardHeader>
        <CardContent>
          <article className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-a:hover:text-blue-800">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </CardContent>
      </Card>
    </div>
  )
}
