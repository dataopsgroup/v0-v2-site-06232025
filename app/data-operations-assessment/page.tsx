import type { Metadata } from "next"
import { buildCanonicalUrl } from "@/utils/url-builder"
import QuizSchema from "@/components/seo/QuizSchema"
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema"
import AssessmentPageClient from "./AssessmentPageClient"

export const metadata: Metadata = {
  title: "Free DataOps Maturity Assessment - 10-Minute Data Operations Audit | DataOps Group",
  description:
    "Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly.",
  keywords: "dataops assessment, data operations audit, hubspot assessment, data maturity assessment, free assessment",
  alternates: {
    canonical: buildCanonicalUrl("/data-operations-assessment"),
  },
  openGraph: {
    type: "website",
    title: "Free DataOps Maturity Assessment - 10-Minute Data Operations Audit",
    description:
      "Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly.",
    url: buildCanonicalUrl("/data-operations-assessment"),
    images: [
      {
        url: "/images/dataops-assessment-og.png",
        width: 1200,
        height: 630,
        alt: "DataOps Group - Free Data Operations Assessment",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Free DataOps Maturity Assessment - 10-Minute Data Operations Audit",
    description:
      "Take our free 10-minute DataOps assessment to identify gaps in your data operations. Get personalized recommendations instantly.",
    images: ["/images/dataops-assessment-og.png"],
  },
}

const breadcrumbItems = [
  { name: "Home", url: "/" },
  { name: "Data Operations Assessment", url: "/data-operations-assessment" },
]

export default function DataOperationsAssessmentPage() {
  return (
    <>
      <QuizSchema
        name="DataOps Maturity Assessment"
        description="Comprehensive assessment to evaluate your organization's data operations maturity and identify improvement opportunities"
        url="/data-operations-assessment"
        about="Data Operations, HubSpot Implementation, and Business Intelligence"
        educationalLevel="Intermediate to Advanced"
        timeRequired="PT10M"
        numberOfQuestions={25}
      />
      <BreadcrumbSchema items={breadcrumbItems} />
      <AssessmentPageClient />
    </>
  )
}
