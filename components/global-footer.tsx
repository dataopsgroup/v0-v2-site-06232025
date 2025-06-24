import Link from "next/link"

export default function GlobalFooter() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-5 gap-8">
          <div className="space-y-4">
            <div className="mb-6">
              <img
                src="/images/dataops-logo-white-footer.png"
                alt="DataOps Group - Expert HubSpot Implementation and Data Operations Consulting"
                className="w-[160px] h-[54px] object-contain"
                loading="lazy"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Transforming portfolio operations into profit drivers through expert HubSpot implementation and data
              operations consulting.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services/analytics-bi" className="text-sm text-gray-400 hover:text-white">
                  Analytics & BI
                </Link>
              </li>
              <li>
                <Link href="/services/dataops-implementation" className="text-sm text-gray-400 hover:text-white">
                  DataOps Implementation
                </Link>
              </li>
              <li>
                <Link href="/services/team-training" className="text-sm text-gray-400 hover:text-white">
                  HubSpot Training
                </Link>
              </li>
              <li>
                <Link href="/services/marketing-operations-revops" className="text-sm text-gray-400 hover:text-white">
                  Marketing Operations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/insights" className="text-sm text-gray-400 hover:text-white">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/guides/hubspot-expert" className="text-sm text-gray-400 hover:text-white">
                  How to Hire a HubSpot Expert
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/insights/hubspot-for-private-equity" className="text-sm text-gray-400 hover:text-white">
                  PE Value Creation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold text-white mb-4">FAQs</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Placeholder FAQ 1
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Placeholder FAQ 2
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Placeholder FAQ 3
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-gray-400 hover:text-white">
                  Placeholder FAQ 4
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div className="text-sm text-gray-400">
              <p>© 2025 DataOps Group. All rights reserved.</p>
            </div>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-sm text-gray-400 hover:text-white">
                Privacy
              </Link>
              <Link href="/terms" className="text-sm text-gray-400 hover:text-white">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
