import { notFound } from "next/navigation"
import { getPostBySlug, calculateReadTime } from "@/lib/blog"
import BlogPostHeader from "@/components/blog/BlogPostHeader"
import SafeBlogPostContent from "@/components/blog/SafeBlogPostContent"
import RelatedArticles from "@/components/blog/RelatedArticles"
import BlogCTA from "@/components/blog/BlogCTA"
import StructuredData from "@/components/seo/StructuredData"
import type { Metadata } from "next"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    return {
      title: "Blog Post Not Found",
      description: "The requested blog post could not be found.",
    }
  }

  return {
    title: `${post.seo.ogTitle} | DataOps Insights`,
    description: post.seo.metaDescription,
    keywords: post.seo.keywords,
    openGraph: {
      title: post.seo.ogTitle,
      description: post.seo.ogDescription,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: post.coverImage ? [post.coverImage] : [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.twitterTitle,
      description: post.seo.twitterDescription,
      images: post.coverImage ? [post.coverImage] : [],
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const readTime = calculateReadTime(post.content)

  return (
    <>
      <StructuredData type="Article" data={post} />
      <article className="min-h-screen bg-white">
        <BlogPostHeader
          title={post.title}
          excerpt={post.excerpt}
          date={post.date}
          author={post.author}
          category={post.category}
          readTime={readTime}
          coverImage={post.coverImage}
        />

        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <SafeBlogPostContent post={post} />
            <BlogCTA />
          </div>
        </div>

        <RelatedArticles currentPostId={post.id} category={post.category} />
      </article>
    </>
  )
}
