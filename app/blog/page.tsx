import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Blog() {
  const allPostsData = getSortedPostsData();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {allPostsData.map(({ id, date, title }) => (
          <Card key={id}>
            <CardHeader>
              <CardTitle>
                <Link href={`/blog/${id}`} className="text-2xl font-semibold text-blue-600 hover:underline">
                  {title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <small className="text-gray-500">
                {new Date(date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </small>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
