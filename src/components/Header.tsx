import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import GeneralInquiryDialog from '@/components/GeneralInquiryDialog';
import logo from '@/assets/logo.png';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '/products', label: 'Products' },
  { href: '#export', label: 'Export' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href === '/') {
      // If we're not on the home page, navigate there first
      if (location.pathname !== '/') {
        navigate('/');
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else if (href.startsWith('#')) {
      // On other pages, navigate to the home page with hash so the section exists
      if (location.pathname !== '/') {
        navigate('/' + href);
      } else {
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/95 backdrop-blur-md shadow-md py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="container-custom flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-3 group"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <img 
            src={logo} 
            alt="Nana Export & Import" 
            className={`h-28 sm:h-32 w-auto transition-all ${
              isScrolled ? '' : 'brightness-0 invert'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                <Link
                  to={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`font-body text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`font-body text-sm font-medium transition-colors hover:text-accent ${
                    isScrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
                >
                  {link.label}
                </button>
              )}
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <GeneralInquiryDialog>
          <Button variant="accent" className="hidden md:inline-flex">
            Inquire
          </Button>
        </GeneralInquiryDialog>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={`md:hidden p-2 transition-colors ${
            isScrolled ? 'text-foreground' : 'text-primary-foreground'
          }`}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-card border-t border-border"
          >
            <ul className="container-custom py-6 space-y-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith('/') && !link.href.startsWith('/#') ? (
                    <Link
                      to={link.href}
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left font-body text-foreground hover:text-accent transition-colors py-2"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <button
                      onClick={() => handleNavClick(link.href)}
                      className="block w-full text-left font-body text-foreground hover:text-accent transition-colors py-2"
                    >
                      {link.label}
                    </button>
                  )}
                </li>
              ))}
              <li className="pt-4">
                <GeneralInquiryDialog>
                  <Button variant="accent" className="w-full">
                    Inquire
                  </Button>
                </GeneralInquiryDialog>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
