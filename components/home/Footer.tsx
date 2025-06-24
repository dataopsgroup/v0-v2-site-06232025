import type React from "react"
import Link from "next/link"
import Image from "next/image"

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Image
              src="/images/dataops-logo-white-footer.png"
              alt="DataOps Group"
              width={200}
              height={60}
              className="mb-4"
            />
            <p className="text-gray-300 mb-4">
              Helping businesses optimize their data operations and marketing technology stack.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/insights" className="text-gray-300 hover:text-white transition-colors">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/guides/hubspot-expert" className="text-gray-300 hover:text-white transition-colors">
                  HubSpot Expert Guide
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-300">Ready to optimize your data operations?</p>
            <Link
              href="/contact"
              className="inline-block mt-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">© {new Date().getFullYear()} DataOps Group. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
