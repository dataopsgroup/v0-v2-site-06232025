"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import GlobalFooter from "@/components/global-footer"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center space-x-8">
              <Link href="/" className="flex items-center py-2">
                <img
                  src="/images/dataops-logo-horizontal.jpg"
                  alt="DataOps Group - Home"
                  className="w-[200px] h-[68px] object-contain"
                />
              </Link>
              <nav className="hidden md:flex space-x-6">
                <div className="relative group">
                  <button className="text-sm text-gray-700 hover:text-blue-600 flex items-center">
                    Services <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/services/analytics-bi"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Analytics & BI
                      </Link>
                      <Link
                        href="/services/dataops-implementation"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        DataOps Implementation
                      </Link>
                      <Link
                        href="/services/team-training"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Team Training
                      </Link>
                      <Link
                        href="/services/marketing-operations-revops"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        Marketing Operations & RevOps
                      </Link>
                    </div>
                  </div>
                </div>
                <Link href="/about" className="text-sm text-gray-700 hover:text-blue-600">
                  About
                </Link>
                <Link href="/approach" className="text-sm text-gray-700 hover:text-blue-600">
                  Approach
                </Link>
                <div className="relative group">
                  <button className="text-sm text-gray-700 hover:text-blue-600 flex items-center">
                    Insights <ChevronDown className="ml-1 h-3 w-3" strokeWidth={1.5} />
                  </button>
                  <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                    <div className="py-2">
                      <Link
                        href="/insights/hubspot-for-private-equity"
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      >
                        HubSpot for Private Equity
                      </Link>
                    </div>
                  </div>
                </div>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <Button className="text-white hover:bg-blue-400 rounded-none bg-blue-300">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button className="text-gray-900 hover:bg-yellow-500 rounded-none bg-yellow-400">
                <Link href="/book">📖 Copy Our Playbook</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Privacy Policy Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
              <p className="text-gray-600">Last updated: January 1, 2025</p>
            </div>

            <div className="prose prose-lg max-w-none space-y-8">
              <div className="text-gray-700 leading-relaxed space-y-6">
                <p>
                  This Privacy Policy describes Our policies and procedures on the collection, use and disclosure of
                  Your information when You use the Service and tells You about Your privacy rights and how the law
                  protects You.
                </p>
                <p>
                  We use Your Personal data to provide and improve the Service. By using the Service, You agree to the
                  collection and use of information in accordance with this Privacy Policy.
                </p>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Interpretation and Definitions</h3>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Interpretation</h4>
                <p>
                  The words of which the initial letter is capitalized have meanings defined under the following
                  conditions. The following definitions shall have the same meaning regardless of whether they appear in
                  singular or in plural.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Definitions</h4>
                <p>For the purposes of this Privacy Policy:</p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>Account</strong> means a unique account created for You to access our Service or parts of
                    our Service.
                  </li>
                  <li>
                    <strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this
                    Agreement) refers to DataOps Group.
                  </li>
                  <li>
                    <strong>Cookies</strong> are small files that are placed on Your computer, mobile device or any
                    other device by a website, containing the details of Your browsing history on that website among its
                    many uses.
                  </li>
                  <li>
                    <strong>Device</strong> means any device that can access the Service such as a computer, a cellphone
                    or a digital tablet.
                  </li>
                  <li>
                    <strong>Personal Data</strong> is any information that relates to an identified or identifiable
                    individual.
                  </li>
                  <li>
                    <strong>Service</strong> refers to the Website.
                  </li>
                  <li>
                    <strong>Usage Data</strong> refers to data collected automatically, either generated by the use of
                    the Service or from the Service infrastructure itself (for example, the duration of a page visit).
                  </li>
                  <li>
                    <strong>Website</strong> refers to DataOps Group, accessible from https://dataopsgroup.com
                  </li>
                  <li>
                    <strong>You</strong> means the individual accessing or using the Service, or the company, or other
                    legal entity on behalf of which such individual is accessing or using the Service, as applicable.
                  </li>
                </ul>

                <h3 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Collecting and Using Your Personal Data</h3>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Types of Data Collected</h4>

                <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Personal Data</h5>
                <p>
                  While using Our Service, We may ask You to provide Us with certain personally identifiable information
                  that can be used to contact or identify You. Personally identifiable information may include, but is
                  not limited to:
                </p>
                <ul className="space-y-2 ml-6">
                  <li>Email address</li>
                  <li>First name and last name</li>
                  <li>Company name</li>
                  <li>Usage Data</li>
                </ul>

                <h5 className="text-lg font-semibold text-gray-900 mt-6 mb-3">Usage Data</h5>
                <p>Usage Data is collected automatically when using the Service.</p>
                <p>
                  Usage Data may include information such as Your Device's Internet Protocol address (e.g. IP address),
                  browser type, browser version, the pages of our Service that You visit, the time and date of Your
                  visit, the time spent on those pages, unique device identifiers and other diagnostic data.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Use of Your Personal Data</h4>
                <p>The Company may use Personal Data for the following purposes:</p>
                <ul className="space-y-3 ml-6">
                  <li>
                    <strong>To provide and maintain our Service</strong>, including to monitor the usage of our Service.
                  </li>
                  <li>
                    <strong>To contact You:</strong> To contact You by email regarding updates or informative
                    communications related to our services.
                  </li>
                  <li>
                    <strong>To provide You</strong> with news, special offers and general information about our services
                    unless You have opted not to receive such information.
                  </li>
                  <li>
                    <strong>To manage Your requests:</strong> To attend and manage Your requests to Us.
                  </li>
                </ul>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Retention of Your Personal Data</h4>
                <p>
                  The Company will retain Your Personal Data only for as long as is necessary for the purposes set out
                  in this Privacy Policy. We will retain and use Your Personal Data to the extent necessary to comply
                  with our legal obligations, resolve disputes, and enforce our legal agreements and policies.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Security of Your Personal Data</h4>
                <p>
                  The security of Your Personal Data is important to Us, but remember that no method of transmission
                  over the Internet, or method of electronic storage is 100% secure. While We strive to use commercially
                  acceptable means to protect Your Personal Data, We cannot guarantee its absolute security.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Children's Privacy</h4>
                <p>
                  Our Service does not address anyone under the age of 13. We do not knowingly collect personally
                  identifiable information from anyone under the age of 13.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Links to Other Websites</h4>
                <p>
                  Our Service may contain links to other websites that are not operated by Us. If You click on a third
                  party link, You will be directed to that third party's site. We strongly advise You to review the
                  Privacy Policy of every site You visit.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Changes to this Privacy Policy</h4>
                <p>
                  We may update Our Privacy Policy from time to time. We will notify You of any changes by posting the
                  new Privacy Policy on this page and updating the "Last updated" date at the top of this Privacy
                  Policy.
                </p>

                <h4 className="text-xl font-semibold text-gray-900 mt-8 mb-4">Contact Us</h4>
                <p>If you have any questions about this Privacy Policy, You can contact us:</p>
                <ul className="space-y-2 ml-6">
                  <li>
                    By visiting our contact page:{" "}
                    <Link href="/contact" className="text-blue-600 hover:underline">
                      Contact Us
                    </Link>
                  </li>
                  <li>By email: admin@dataopsgroup.com</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <GlobalFooter />
    </div>
  )
}
