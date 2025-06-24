import Link from "next/link"
import { Button } from "@/components/ui/button"

interface BlogCTAProps {
  title: string
  description: string
  primaryButton: {
    text: string
    href: string
  }
  secondaryButton?: {
    text: string
    href: string
  }
  sectionVariant?: "dark" | "light"
}

export const BlogCTA = ({
  title,
  description,
  primaryButton,
  secondaryButton,
  sectionVariant = "dark",
}: BlogCTAProps) => {
  const sectionClasses =
    sectionVariant === "dark"
      ? "bg-blue-900 text-white"
      : "bg-white border border-gray-200 rounded-lg shadow-sm text-gray-900"

  const titleClasses = sectionVariant === "dark" ? "text-white" : "text-gray-900"
  const descriptionClasses = sectionVariant === "dark" ? "text-blue-100" : "text-gray-700"

  const primaryButtonClasses =
    sectionVariant === "dark"
      ? "bg-yellow-400 text-blue-900 hover:bg-yellow-500 font-semibold"
      : "bg-blue-600 text-white hover:bg-blue-700 font-semibold"

  const secondaryButtonClasses =
    sectionVariant === "dark"
      ? "bg-white text-blue-900 border-yellow-400 hover:bg-yellow-400 hover:text-blue-900 font-semibold"
      : "bg-blue-50 text-blue-900 border-blue-600 hover:bg-blue-600 hover:text-white font-semibold"

  return (
    <section className={`${sectionClasses} py-16 my-8`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className={`text-3xl font-bold mb-4 ${titleClasses}`}>{title}</h2>
        <p className={`text-xl mb-8 ${descriptionClasses}`}>{description}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg" className={primaryButtonClasses}>
            <Link href={primaryButton.href}>{primaryButton.text}</Link>
          </Button>
          {secondaryButton && (
            <Button asChild variant="outline" size="lg" className={secondaryButtonClasses}>
              <Link href={secondaryButton.href}>{secondaryButton.text}</Link>
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}

export default BlogCTA
