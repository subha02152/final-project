import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="text-2xl font-bold mb-4">
              Neesh <span className="text-amber-400">Interior</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transforming spaces with innovative design solutions for both interior and exterior environments. Your
              trusted partner in creating exceptional spaces.
            </p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-amber-400 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-amber-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>False Ceiling</li>
              <li>Toughened Glass</li>
              <li>Aluminium Fabrication</li>
              <li>SS Railing Works</li>
              <li>Plywood Cupboards</li>
              <li>Exterior Elevation</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-400 mt-0.5" />
                <div className="text-gray-300">
                  <p>Opp. Durga Dying, Ellampillai Main Road</p>
                  <p>Kakapalayam, Salem - 637504, Tamil Nadu</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-400" />
                <a href="tel:+91 9080825986" className="text-gray-300 hover:text-amber-400 transition-colors">
                  +91 9080825986
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-400" />
                <a
                  href="mailto:sarathmcdc1994@gmail.com"
                  className="text-gray-300 hover:text-amber-400 transition-colors"
                >
                  sarathmcdc1994@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom with Developer Credit */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center space-y-2">
          <p className="text-gray-300">
            © 2025 Neesh Interior & Exterior. All rights reserved. |
            <span className="text-amber-400"> Designed with excellence</span>
          </p>
          <p className="text-gray-300 flex justify-center items-center gap-4 text-sm">
            Developed by
            <a href="https://github.com/subha02152/subha02152" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1">
              Subha
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="16" height="16" />
            </a>
            &
            <a href="https://github.com/Saran-ex/ITS-ME" target="_blank" className="hover:text-amber-400 transition flex items-center gap-1">
              Saran
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" width="16" height="16" />
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
