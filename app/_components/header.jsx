import Link from "next/link"
import { Menu, Search } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <span className="text-2xl font-bold text-purple-700">MediBook</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <Link href="#" className="text-gray-700 hover:text-purple-700 transition-colors">
                Find Doctors
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-700 transition-colors">
                Specialties
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-700 transition-colors">
                About Us
              </Link>
              <Link href="#" className="text-gray-700 hover:text-purple-700 transition-colors">
                Contact
              </Link>
            </nav>

            <div className="flex items-center space-x-3">
              <Button variant="ghost" size="icon">
                <Search className="h-5 w-5 text-gray-700" />
              </Button>
              <Button variant="outline" className="border-purple-700 text-purple-700 hover:bg-purple-50">
                Log In
              </Button>
              <Button className="bg-purple-700 text-white hover:bg-purple-800">Sign Up</Button>
            </div>
          </div>

          <div className="flex md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}
