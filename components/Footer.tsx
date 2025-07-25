import { Phone, Mail, MapPin, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="bg-blue-600 p-3 rounded-lg mr-4">
                <div className="text-xl font-bold">MD</div>
              </div>
              <div>
                <h2 className="text-xl font-bold">Mega Diagnostics</h2>
                <p className="text-sm text-gray-300">Udaipur</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm">
              First-ever diagnostic and interventional center in Rajasthan, 
              bringing advanced medical care to Southern Rajasthan.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <Twitter className="h-5 w-5 text-gray-300 hover:text-blue-400 cursor-pointer transition-colors duration-300" />
              <Instagram className="h-5 w-5 text-gray-300 hover:text-pink-400 cursor-pointer transition-colors duration-300" />
              <Linkedin className="h-5 w-5 text-gray-300 hover:text-blue-500 cursor-pointer transition-colors duration-300" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/diagnostic-services" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Diagnostic Services
                </Link>
              </li>
              <li>
                <Link href="/interventional-radiology" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Interventional Radiology
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Blog & Testimonials
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-300 hover:translate-x-1 transform inline-block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Clinical Biochemistry</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Histopathology</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Interventional Radiology</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Molecular Biology</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Hematology</li>
              <li className="hover:text-white transition-colors duration-300 cursor-pointer">Home Test Collection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3 group">
                <MapPin className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-300 text-sm">
                  <p>Mega Diagnostics Udaipur</p>
                  <p>Udaipur, Rajasthan</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-300 text-sm">
                  <p className="hover:text-white transition-colors cursor-pointer">+91-XXXX-XXXXXX</p>
                  <p className="hover:text-white transition-colors cursor-pointer">Emergency: +91-XXXX-XXXXXX</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3 group">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-300 text-sm hover:text-white transition-colors cursor-pointer">
                  info@megadiagnosticsudaipur.com
                </p>
              </div>
              
              <div className="flex items-start space-x-3 group">
                <Clock className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Sat: 8:00 AM - 8:00 PM</p>
                  <p>Sunday: 9:00 AM - 5:00 PM</p>
                  <p className="text-blue-400 font-medium">Emergency: 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © 2024 Mega Diagnostics Udaipur. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300 hover:underline">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300 hover:underline">
                Terms of Service
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors duration-300 hover:underline">
                NABL Accreditation
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;