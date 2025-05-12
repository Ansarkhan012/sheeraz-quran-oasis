
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, BookOpen } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);
  
  // Check if route is active
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container-custom flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <BookOpen className="h-8 w-8 text-primary mr-2" />
          <div>
            <span className="font-heading text-primary font-bold text-xl">Al Sheeraz</span>
            <span className="block text-xs text-muted-foreground">Quran Academy</span>
          </div>
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link to="/" className={`nav-link ${isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            Home
          </Link>
          <Link to="/tutors" className={`nav-link ${isActive('/tutors') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            Tutors
          </Link>
          <Link to="/learning-path" className={`nav-link ${isActive('/learning-path') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            Learning Path
          </Link>
          <Link to="/pricing" className={`nav-link ${isActive('/pricing') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            Pricing
          </Link>
          <Link to="/blog" className={`nav-link ${isActive('/blog') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            Blog
          </Link>
          <Link to="/about" className={`nav-link ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            About
          </Link>
          <Link to="/contact" className={`nav-link ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'}`}>
            Contact
          </Link>
          <Link to="#" className="btn btn-primary py-2 px-4">
            Free Trial
          </Link>
        </div>
        
        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu}
          className="lg:hidden text-primary p-2"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`lg:hidden absolute w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-screen py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <div className="container-custom flex flex-col space-y-4 px-4">
          <Link to="/" className={`py-2 ${isActive('/') ? 'text-primary font-medium' : 'text-foreground'}`}>
            Home
          </Link>
          <Link to="/tutors" className={`py-2 ${isActive('/tutors') ? 'text-primary font-medium' : 'text-foreground'}`}>
            Tutors
          </Link>
          <Link to="/learning-path" className={`py-2 ${isActive('/learning-path') ? 'text-primary font-medium' : 'text-foreground'}`}>
            Learning Path
          </Link>
          <Link to="/pricing" className={`py-2 ${isActive('/pricing') ? 'text-primary font-medium' : 'text-foreground'}`}>
            Pricing
          </Link>
          <Link to="/blog" className={`py-2 ${isActive('/blog') ? 'text-primary font-medium' : 'text-foreground'}`}>
            Blog
          </Link>
          <Link to="/about" className={`py-2 ${isActive('/about') ? 'text-primary font-medium' : 'text-foreground'}`}>
            About
          </Link>
          <Link to="/contact" className={`py-2 ${isActive('/contact') ? 'text-primary font-medium' : 'text-foreground'}`}>
            Contact
          </Link>
          <Link to="#" className="btn btn-primary py-2 px-4 text-center">
            Free Trial
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
