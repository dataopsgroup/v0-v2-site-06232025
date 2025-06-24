// app/blog/layout.tsx - AFTER
import { BlogCTA } from '@/components/blog/BlogCTA' // You can leave the import
import { Footer } from '@/components/home/Footer'
import { Navbar } from '@/components/home/Navbar'

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="text-black">
      <Navbar />
      <main>{children}</main>
      {/* <BlogCTA /> */} {/* <-- Comment this line out */}
      <Footer />
    </div>
  )
}
