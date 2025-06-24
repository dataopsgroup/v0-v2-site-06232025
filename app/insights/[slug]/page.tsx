import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug } from "@/data/blog"
import { BlogPostHeader } from "@/components/blog/BlogPostHeader"
import BlogPostContent from "@/components/blog/BlogPostContent"
import { RelatedArticles } from "@/components/blog/RelatedArticles"
import { BlogCTA } from "@/components/blog/BlogCTA"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.id,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: post.seo?.metaTitle || post.title,
    description: post.seo?.metaDescription || post.excerpt,
    keywords: post.seo?.keywords?.join(", "),
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article>
      <BlogPostHeader post={post} />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <BlogPostContent post={post} />

          <div className="mt-16">
            <BlogCTA />
          </div>

          <div className="mt-16">
            <RelatedArticles currentPostId={post.id} category={post.category} />
          </div>
        </div>
      </div>
    </article>
  )
}
