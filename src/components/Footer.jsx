import { Facebook, Youtube, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#4B2E2B] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Logo and Social Links */}
          <div className="space-y-6">
            <div className="bg-white rounded-lg px-6 py-4 inline-block">
                         <img
            src='/logo.jpg'
             className="text-xl font-semibold text-gray-900"/>

            </div>
            
            <div className="flex items-center space-x-4">
              <a 
                href="#" 
                className="w-10 h-10 rounded border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded border border-white/30 flex items-center justify-center hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-3 text-gray-300">
              <p className="hover:text-white transition-colors cursor-pointer">
                050 909 1032
              </p>
              <p className="text-sm leading-relaxed">
                4557 Umm Al Qoura, As Safa District, JDSA6784,<br />
                6784, Jeddah 23455
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Equipment
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Book a Slot
                </a>
              </li>
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Business Hours</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Sunday: 7:30 AM - 11:00 PM</li>
              <li>Monday: 7:30 AM - 11:00 PM</li>
              <li>Tuesday: 7:30 AM - 11:00 PM</li>
              <li>Wednesday: 7:30 AM - 11:00 PM</li>
              <li>Thursday: 7:30 AM - 11:00 PM</li>
              <li>Friday: 4:00 PM - 11:00 PM</li>
              <li>Saturday: 7:30 AM - 11:00 PM</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-300 text-sm">
            © 2025 <span className="italic">Coffee Labs</span>. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}