import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout - Responsive Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info - Full width on mobile, then normal */}
          <div className="md:col-span-2 lg:col-span-1 text-center md:text-left">
            <h2 className="text-2xl font-bold mb-2">Digital Vraddhi</h2>
            <p className="text-gray-400 mb-4">Empowering Your Brand Digitally</p>
            
            {/* Social Icons - Centered on mobile, left on desktop */}
            <div className="flex justify-center md:justify-start space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-indigo-400 transition-colors">
                <FaFacebookF size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-pink-400 transition-colors">
                <FaInstagram size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-400 transition-colors">
                <FaLinkedinIn size={18} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-sky-400 transition-colors">
                <FaTwitter size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links - Centered content */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors block">Home</a></li>
              <li><a href="#" className="hover:text-white transition-colors block">Services</a></li>
              <li><a href="#" className="hover:text-white transition-colors block">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors block">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info - Centered content */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center justify-center md:justify-start">
                <FaEnvelope className="mr-2 flex-shrink-0" size={14} />
                <span>digitalvraddhi@gmail.com</span>
              </li>
              <li className="flex items-center justify-center md:justify-start">
                <FaPhoneAlt className="mr-2 flex-shrink-0" size={14} />
                <span>+91-XXX-XXX-XXXX</span>
              </li>
              <li className="mt-4 text-sm">
                <p> India 🇮🇳</p>
              </li>
            </ul>
          </div>

          {/* Newsletter - Full width on mobile, then normal */}
          <div className="md:col-span-2 lg:col-span-1">
  <div className="text-center md:text-left">
    <h3 className="text-lg font-semibold mb-3">Newsletter</h3>
    <p className="text-gray-400 mb-4 text-sm">Subscribe for updates and offers</p>
    
    <div className="flex flex-col items-center md:items-start gap-3 max-w-xs mx-auto md:mx-0">
      <input 
        type="email" 
        placeholder="Your email" 
        className="px-4 py-2 w-full text-sm text-gray-800 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors w-full md:w-auto">
        Subscribe
      </button>
    </div>
  </div>
</div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Digital Vraddhi. All rights reserved.
            </p>
            <div className="flex justify-center space-x-4 text-sm">
  <Link to="/terms" className="hover:text-gray-300 transition-colors">Terms</Link>
  <span>|</span>
  <Link to="/privacy" className="hover:text-gray-300 transition-colors">Privacy</Link>
  <span>|</span>
  <Link to="/cookies" className="hover:text-gray-300 transition-colors">Cookies</Link>
  <Link to="/business-assistant" className="...">Business Assistant</Link>
</div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;