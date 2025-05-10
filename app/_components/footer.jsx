import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-purple-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MediBook</h3>
            <p className="text-purple-200 mb-4">
              Connecting patients with the best healthcare professionals for quality medical care.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Find Doctors
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Medical Specialties
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Health Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">For Doctors</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Join as a Doctor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Doctor Dashboard
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Practice Management
                </Link>
              </li>
              <li>
                <Link href="#" className="text-purple-200 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 mr-2 mt-0.5 text-purple-300" />
                <span className="text-purple-200">support@medibook.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 mr-2 mt-0.5 text-purple-300" />
                <span className="text-purple-200">+1 (800) 123-4567</span>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">Subscribe to our newsletter</h4>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="px-3 py-2 bg-purple-800 text-white placeholder-purple-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-400 flex-1"
                />
                <button className="bg-white text-purple-900 px-4 py-2 rounded-r-md font-medium hover:bg-purple-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-12 pt-6 text-center text-purple-300 text-sm">
          <p>© {new Date().getFullYear()} MediBook. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="hover:text-white transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
