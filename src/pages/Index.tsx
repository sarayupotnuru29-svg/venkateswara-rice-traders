import { Link } from 'react-router-dom';
import { Truck, ShieldCheck, Wheat, Users } from 'lucide-react';
import logoImg from '@/assets/logo.jpeg';
import riceImg from '@/assets/products/rice/rice-category.jpg';
import branImg from '@/assets/products/bran/bran-category.jpg';
import cattleFeedImg from '@/assets/products/cattle-feed/cattle-feed-category.jpg';
import grainsImg from '@/assets/products/grains/grains-category.jpg';

const features = [
  { icon: Wheat, title: 'Quality Products', desc: 'Premium agricultural products sourced from trusted suppliers.' },
  { icon: Truck, title: 'Reliable Supply', desc: 'Consistent and timely delivery to farmers and traders.' },
  { icon: ShieldCheck, title: 'Fair Pricing', desc: 'Competitive market prices with transparent dealings.' },
  { icon: Users, title: 'Trusted Service', desc: 'Years of trusted service in the agricultural trading industry.' },
];

const categories = [
  { name: 'Rice Products', img: riceImg },
  { name: 'Brans & Husks', img: branImg },
  { name: 'Cattle Feed', img: cattleFeedImg },
  { name: 'Grains & Millets', img: grainsImg },
];

const Index = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        <img src={heroBg} alt="Rice fields" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-overlay" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mb-4 leading-tight">
            Trusted Rice & Cattle Feed Traders
          </h1>
          <p className="font-body text-lg md:text-xl text-secondary-foreground/90 mb-8 max-w-2xl mx-auto">
            Wholesale suppliers of rice, cattle feed, grains, and agricultural products.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/products"
              className="bg-gold-gradient text-primary-foreground px-8 py-3 rounded-md font-body font-semibold text-base hover:opacity-90 transition-opacity"
            >
              View Products
            </Link>
            <Link
              to="/contact"
              className="border-2 border-gold text-gold px-8 py-3 rounded-md font-body font-semibold text-base hover:bg-gold hover:text-primary-foreground transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map(f => (
              <div key={f.title} className="bg-card border border-border/50 rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                <div className="w-14 h-14 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <f.icon className="text-gold" size={28} />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-2">{f.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Preview */}
      <section className="py-16 lg:py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-foreground mb-4">Our Product Categories</h2>
          <p className="text-center text-muted-foreground font-body mb-12 max-w-xl mx-auto">
            We offer a wide range of agricultural products for farmers, traders, and livestock owners.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map(c => (
              <Link
                to="/products"
                key={c.name}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] border border-border/50 shadow-sm"
              >
                {/* Image is now clearly visible without dark shade */}
                <img src={c.img} alt={c.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                {/* Text overlay moved to the bottom with a subtle gradient for readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent flex items-end p-5">
                  <h3 className="font-display text-xl font-bold text-white group-hover:text-gold-light transition-colors">{c.name}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gold-gradient">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Order?
          </h2>
          <p className="font-body text-primary-foreground/80 mb-8 max-w-lg mx-auto">
            Contact us today for bulk orders and competitive wholesale pricing.
          </p>
          <a
            href="tel:9704372273"
            className="inline-block bg-secondary text-secondary-foreground px-8 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
          >
            Call Now: 9704372273
          </a>
        </div>
      </section>
    </div>
  );
};

export default Index;
