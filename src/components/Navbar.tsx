import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import logo from '@/assets/logo.jpeg';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/products', label: 'Products' },
  { to: '/cart', label: 'Cart' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const { totalItems } = useCart();

  return (
    <nav className="sticky top-0 z-50 bg-secondary border-b border-border/30 shadow-lg">
      <div className="container mx-auto px-4 flex items-center justify-between h-16 lg:h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Venkateswara Rice Traders" className="h-12 w-auto lg:h-16 object-contain" />
          <span className="font-display text-lg lg:text-xl font-bold text-gold hidden sm:block">
            Venkateswara Rice Traders
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`font-body text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold ${
                location.pathname === link.to ? 'text-gold' : 'text-secondary-foreground'
              }`}
            >
              {link.label === 'Cart' ? (
                <span className="relative flex items-center gap-1">
                  <ShoppingCart size={18} />
                  Cart
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-4 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                      {totalItems}
                    </span>
                  )}
                </span>
              ) : link.label}
            </Link>
          ))}
          <a
            href="tel:9704372273"
            className="flex items-center gap-2 bg-gold-gradient text-white px-4 py-2 rounded-md font-body text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-4 lg:hidden">
          <Link to="/cart" className="relative text-secondary-foreground">
            <ShoppingCart size={22} />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-gold text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {totalItems}
              </span>
            )}
          </Link>
          <button onClick={() => setOpen(!open)} className="text-secondary-foreground">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-secondary border-t border-border/30 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block px-6 py-3 font-body text-sm font-medium uppercase tracking-wider transition-colors hover:text-gold ${
                location.pathname === link.to ? 'text-gold' : 'text-secondary-foreground'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:9704372273"
            className="mx-6 mt-2 flex items-center justify-center gap-2 bg-gold-gradient text-white px-4 py-2 rounded-md font-body text-sm font-semibold"
          >
            <Phone size={16} />
            Call Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
