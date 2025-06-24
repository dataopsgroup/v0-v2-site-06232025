// app/blog/[id]/page.tsx
import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// This function tells Next.js which blog posts exist, so it can pre-render them at build time.
export async function generateStaticParams() {
  return getAllPostIds();
}

export default async function Post({ params }: { params: { id: string } }) {
  // Fetch the specific post data based on the id from the URL
  const postData = await getPostData(params.id);

  // If no post is found, show a 404 page
  if (!postData) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-4xl font-bold">{postData.title}</CardTitle>
          <div className="text-gray-500 mt-2">
            {new Date(postData.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </div>
        </CardHeader>
        <CardContent>
          {/* We use prose to get nice typography for the blog content */}
          <article className="prose lg:prose-xl max-w-none">
            <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
          </article>
        </CardContent>
      </Card>
    </div>
  );
}
