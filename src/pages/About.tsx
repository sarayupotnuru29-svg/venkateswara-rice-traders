import { CheckCircle } from 'lucide-react';
import aboutBg from '@/assets/about-bg.jpg';

const values = [
  'Quality agricultural feed',
  'Reliable supply chain',
  'Fair market pricing',
  'Trusted local service',
];

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <img src={aboutBg} alt="Agricultural warehouse" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-dark-overlay" />
        <div className="relative z-10 text-center px-4">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-gold-light mb-2">About Us</h1>
          <p className="font-body text-secondary-foreground/80 text-lg">Know our story and values</p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-6">About Venkateswara Rice Traders</h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-4">
            Venkateswara Rice Traders is a trusted supplier dealing in <strong className="text-foreground">rice, cattle feeds, bran, and agricultural products</strong>. We provide quality products to farmers and traders at competitive market prices.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            With years of experience in the agricultural trading industry, we have built a reputation for reliability, quality, and fair pricing. Our commitment to excellence has made us a preferred partner for farmers and businesses across the region.
          </p>

          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Our Business Focuses On</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map(v => (
              <div key={v} className="flex items-center gap-3 bg-card border border-border/50 rounded-lg p-4">
                <CheckCircle className="text-gold shrink-0" size={24} />
                <span className="font-body text-foreground font-medium">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
