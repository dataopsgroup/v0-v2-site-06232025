import { Skeleton } from "@/components/ui/skeleton"

export default function InsightsLoading() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section Skeleton */}
      <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Skeleton className="h-8 w-32 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-16 w-3/4 mx-auto mb-6 bg-white/20" />
            <Skeleton className="h-6 w-2/3 mx-auto mb-8 bg-white/20" />
            <Skeleton className="h-32 w-full bg-white/10" />
          </div>
        </div>
      </section>

      {/* Search Section Skeleton */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <Skeleton className="h-12 flex-1" />
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Skeleton key={i} className="h-8 w-20" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid Skeleton */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <div key={i} className="border rounded-lg p-6">
                <Skeleton className="h-6 w-20 mb-4" />
                <Skeleton className="h-4 w-24 mb-2" />
                <Skeleton className="h-8 w-full mb-4" />
                <Skeleton className="h-20 w-full" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
