import type { BlogPost } from "@/types/blog"

const crmCleanupPlan: BlogPost = {
  id: "crm-cleanup-plan",
  title: "The Ultimate CRM Cleanup Plan",
  excerpt: "Step-by-step guide to cleaning up your CRM data and improving data quality for better business insights.",
  date: "2023-05-10",
  author: "Geoff Tucker",
  category: "Data Management",
  content: `
    <h2>Why CRM Cleanup Matters</h2>
    <p>Dirty data costs businesses millions in lost opportunities and poor decision-making. A clean CRM is the foundation of effective sales and marketing operations.</p>
    <h3>The 5-Step Cleanup Process</h3>
    <ol>
      <li><strong>Audit your current data quality</strong> - Identify duplicates, incomplete records, and inconsistencies</li>
      <li><strong>Identify duplicate records</strong> - Use automated tools and manual review to find duplicates</li>
      <li><strong>Standardize data formats</strong> - Create consistent formatting rules for all data fields</li>
      <li><strong>Implement validation rules</strong> - Prevent future data quality issues</li>
      <li><strong>Create ongoing maintenance processes</strong> - Regular audits and cleanup procedures</li>
    </ol>
    <h3>Tools and Techniques</h3>
    <p>Modern CRM platforms offer built-in data quality tools, but manual processes are often necessary for comprehensive cleanup.</p>
  `,
  tags: ["crm cleanup", "data quality", "database management", "hubspot optimization"],
  seo: {
    metaDescription: "Complete CRM cleanup guide for better data quality and business insights.",
    keywords: "CRM cleanup, data quality, data management, HubSpot cleanup",
    ogTitle: "The Ultimate CRM Cleanup Plan",
    ogDescription: "Step-by-step guide to cleaning up your CRM data",
    twitterTitle: "Ultimate CRM Cleanup Plan",
    twitterDescription: "Step-by-step CRM data cleanup guide",
  },
}

export default crmCleanupPlan
