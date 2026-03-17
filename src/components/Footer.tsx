// import { Link } from 'react-router-dom';
// import { ArrowUp, Phone, Mail, MapPin } from 'lucide-react';
// import logo from '@/assets/logo.jpeg';

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

//   return (
//     <footer className="bg-secondary text-secondary-foreground relative">
//       <div className="container mx-auto px-4 py-12 lg:py-16">
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
//               <span className="font-display text-lg font-bold text-gold">Venkateswara Rice Traders</span>
//             </div>
//             <p className="text-muted-foreground text-sm leading-relaxed">
//               Trusted wholesale suppliers of rice, cattle feed, grains, and agricultural products.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display text-gold font-semibold mb-4">Quick Links</h4>
//             <ul className="space-y-2">
//               {[
//                 { to: '/', label: 'Home' },
//                 { to: '/about', label: 'About' },
//                 { to: '/products', label: 'Products' },
//                 { to: '/contact', label: 'Contact' },
//               ].map(l => (
//                 <li key={l.to}>
//                   <Link to={l.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h4 className="font-display text-gold font-semibold mb-4">Our Products</h4>
//             <ul className="space-y-2 text-sm text-muted-foreground">
//               <li><Link to="/products" className="hover:text-gold transition-colors">Rice & Rice Products</Link></li>
//               <li><Link to="/products" className="hover:text-gold transition-colors">Brans & Husks</Link></li>
//               <li><Link to="/products" className="hover:text-gold transition-colors">Cattle Feed & Pellets</Link></li>
//               <li><Link to="/products" className="hover:text-gold transition-colors">Grains & Millets</Link></li>
//               <li><Link to="/products" className="hover:text-gold transition-colors">Supplements</Link></li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display text-gold font-semibold mb-4">Contact Info</h4>
//             <ul className="space-y-3 text-sm text-muted-foreground">
//               <li className="flex items-start gap-2">
//                 <Phone size={16} className="text-gold mt-0.5 shrink-0" />
//                 <a href="tel:9704372273" className="hover:text-gold transition-colors">9704372273</a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <Mail size={16} className="text-gold mt-0.5 shrink-0" />
//                 <a href="mailto:Kamesh2207@gmail.com" className="hover:text-gold transition-colors">Kamesh2207@gmail.com</a>
//               </li>
//               <li className="flex items-start gap-2">
//                 <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
//                 <span>Opp to Hanuman Temple, ST Road, Narasaraopet – 522601</span>
//               </li>
//             </ul>
//           </div>
//         </div>

//         <div className="mt-12 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground">
//           © {new Date().getFullYear()} Venkateswara Rice Traders. All rights reserved.
//         </div>
//       </div>

//       {/* Scroll to top */}
//       <button
//         onClick={scrollToTop}
//         className="fixed bottom-6 right-6 z-40 bg-gold-gradient text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
//         aria-label="Scroll to top"
//       >
//         <ArrowUp size={20} />
//       </button>
//     </footer>
//   );
// };

// export default Footer;




import { Link } from 'react-router-dom';
import { ArrowUp, Phone, Mail, MapPin, Heart } from 'lucide-react';
import logo from '@/assets/logo.jpeg';

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-secondary text-secondary-foreground relative">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Logo" className="h-12 w-12 rounded-full object-cover" />
              <span className="font-display text-lg font-bold text-gold">Venkateswara Rice Traders</span>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Trusted wholesale suppliers of rice, cattle feed, grains, and agricultural products.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About' },
                { to: '/products', label: 'Products' },
                { to: '/contact', label: 'Contact' },
              ].map(l => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-muted-foreground hover:text-gold transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-4">Our Products</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/products" className="hover:text-gold transition-colors">Rice & Rice Products</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Brans & Husks</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Cattle Feed & Pellets</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Grains & Millets</Link></li>
              <li><Link to="/products" className="hover:text-gold transition-colors">Supplements</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-gold font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-gold mt-0.5 shrink-0" />
                <a href="tel:9704372273" className="hover:text-gold transition-colors">9704372273</a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-gold mt-0.5 shrink-0" />
                <a href="mailto:Kamesh2207@gmail.com" className="hover:text-gold transition-colors">Kamesh2207@gmail.com</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span>Opp to Hanuman Temple, ST Road, Narasaraopet – 522601</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section with Credits */}
        <div className="mt-12 pt-6 border-t border-border/30 text-center text-sm text-muted-foreground space-y-4">
          <p>© {new Date().getFullYear()} Venkateswara Rice Traders. All rights reserved.</p>
          
          <div className="flex justify-center items-center gap-1 flex-wrap">
            Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
            <a
              href="https://staffarc.in"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-orange-600 hover:underline font-semibold"
            >
              <img
                src="/staffarclogo.jpg" 
                alt="StaffArc logo"
                className="h-5 w-5 object-contain rounded-sm"
              />
              StaffArc
            </a>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 bg-gold-gradient text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
};

export default Footer;