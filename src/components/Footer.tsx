import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-dark text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <img 
                src={logo} 
                alt="Nana Export & Import" 
                className="h-28 w-auto brightness-0 invert"
              />
            </div>
            <p className="font-body text-primary-foreground/80 leading-relaxed max-w-md mb-6">
              Premium quality Egyptian agricultural products for the global market. 
              We specialize in potatoes and citrus fruits, delivering excellence since 1990.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {['About Us', 'Products', 'Export', 'Quality', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="font-body text-primary-foreground/80 hover:text-accent transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Head Office */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-6">Head Office</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-accent mt-1 flex-shrink-0" />
                <span className="font-body text-primary-foreground/80 text-sm">
                  9 El Nasr St., El Manshia Alex. Egypt.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+2034868859"
                  className="font-body text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  (+203) 486 8859
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-accent flex-shrink-0" />
                <a
                  href="tel:+2034869139"
                  className="font-body text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  (+203) 486 9139
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-accent flex-shrink-0" />
                <a
                  href="mailto:info@ahmedabdallahnanah.com"
                  className="font-body text-primary-foreground/80 hover:text-accent transition-colors text-sm"
                >
                  info@ahmedabdallahnanah.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-body text-primary-foreground/60 text-sm">
            © {currentYear} Ahmed Abdalla Nanah. All rights reserved.
          </p>
          <p className="font-body text-primary-foreground/60 text-sm">
            Quality Egyptian Produce for the World
          </p>
        </div>
      </div>
    </footer>
  );
}
