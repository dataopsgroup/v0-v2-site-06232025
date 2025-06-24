interface StructuredDataProps {
  type: "Organization" | "Article" | "WebSite"
  data: any
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
      "@type": type,
    }

    switch (type) {
      case "Organization":
        return {
          ...baseSchema,
          name: "DataOps Group",
          url: "https://dataopsgroup.com",
          logo: "https://dataopsgroup.com/images/dataops-logo-horizontal.jpg",
          description: "Expert HubSpot Implementation and Data Operations Consulting",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "customer service",
            url: "https://dataopsgroup.com/contact",
          },
          sameAs: [
            // Add social media URLs when available
          ],
          ...data,
        }

      case "Article":
        return {
          ...baseSchema,
          headline: data.title,
          description: data.excerpt,
          author: {
            "@type": "Person",
            name: data.author,
          },
          publisher: {
            "@type": "Organization",
            name: "DataOps Group",
            logo: {
              "@type": "ImageObject",
              url: "https://dataopsgroup.com/images/dataops-logo-horizontal.jpg",
            },
          },
          datePublished: data.date,
          dateModified: data.date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://dataopsgroup.com/insights/${data.id}`,
          },
          ...data,
        }

      case "WebSite":
        return {
          ...baseSchema,
          name: "DataOps Group",
          url: "https://dataopsgroup.com",
          description: "Expert HubSpot Implementation and Data Operations Consulting",
          potentialAction: {
            "@type": "SearchAction",
            target: "https://dataopsgroup.com/insights?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
          ...data,
        }

      default:
        return baseSchema
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}
