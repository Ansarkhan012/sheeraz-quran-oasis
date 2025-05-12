
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Send, BookOpen } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* About column */}
          <div>
            <div className="flex items-center mb-4">
              <BookOpen className="h-8 w-8 mr-2" />
              <div>
                <h3 className="font-heading text-xl font-bold">Al Sheeraz</h3>
                <p className="text-xs opacity-80">Quran Academy</p>
              </div>
            </div>
            <p className="mb-4 text-sm opacity-90">
              Dedicated to providing high-quality Quranic education to students worldwide through 
              experienced tutors and a structured curriculum.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 pb-2 border-b border-accent/30">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Home
                </Link>
              </li>
              <li>
                <Link to="/tutors" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Our Tutors
                </Link>
              </li>
              <li>
                <Link to="/learning-path" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Learning Path
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Pricing Plans
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Blog Articles
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors flex items-center">
                  <span className="mr-2">›</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 pb-2 border-b border-accent/30">
              Contact Information
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <span className="mr-2 mt-1">›</span>
                <span>123 Academy Street, Islamabad, Pakistan</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">›</span>
                <span>+92 123 456 7890</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">›</span>
                <span>info@alsheerazquran.com</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2 mt-1">›</span>
                <span>WhatsApp: +92 123 456 7890</span>
              </li>
              <li className="mt-4">
                <Link to="/contact" className="btn btn-outline py-2 px-4 text-sm text-primary-foreground border-primary-foreground hover:bg-primary-foreground hover:text-primary">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="font-heading text-lg font-semibold mb-4 pb-2 border-b border-accent/30">
              Newsletter
            </h3>
            <p className="mb-4 text-sm opacity-90">
              Subscribe to our newsletter to receive updates on new courses, events, and articles.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your Email"
                className="py-2 px-3 text-sm bg-white/10 border border-white/20 rounded-l-md focus:outline-none focus:ring-1 focus:ring-accent flex-grow"
              />
              <button
                type="submit"
                className="bg-accent hover:bg-accent/80 text-accent-foreground p-2 rounded-r-md transition-colors"
              >
                <Send className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="pt-8 mt-8 border-t border-white/10 text-center text-sm opacity-80">
          <p>
            &copy; {currentYear} Al Sheeraz Quran Academy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
