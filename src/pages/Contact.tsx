import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import contactBg from '@/assets/contact-bg.jpg';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Image */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        {/* Section Background Image */}
        <div className="absolute inset-0">
          <img src={contactBg} alt="Contact Us" className="w-full h-full object-cover" />
          {/* Dark overlay for professional contrast */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mb-4 drop-shadow-md">
            Contact Us
          </h1>
          <p className="font-body text-white/90 text-lg max-w-2xl mx-auto drop-shadow-sm">
            Get in touch for orders, enquiries, and bulk pricing.
          </p>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold mb-1">Phone</h3>
                  <a href="tel:9704372273" className="font-body text-foreground hover:text-gold transition-colors">9704372273</a>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold mb-1">Email</h3>
                  <a href="mailto:Kamesh2207@gmail.com" className="font-body text-foreground hover:text-gold transition-colors">Kamesh2207@gmail.com</a>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold mb-1">Address</h3>
                  <p className="font-body text-foreground text-sm leading-relaxed">
                    Venkateswara Rice Traders<br />
                    Opp to Hanuman Temple<br />
                    ST Road<br />
                    Narasaraopet – 522601
                  </p>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="text-gold" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold mb-1">Business Hours</h3>
                  <p className="font-body text-foreground text-sm">
                    Everyday: 8 AM – 10 PM<br />
                    Sunday: 8 AM – 7 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Map / WhatsApp CTA */}
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3835.452669460029!2d80.04620021!3d16.2393005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDE0JzIxLjUiTiA4MMKwMDInNDYuMyJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Location Map"
                />
              </div>

              <div className="bg-gold/10 border border-gold/30 rounded-lg p-8 text-center shadow-sm">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Quick Order via WhatsApp</h3>
                <p className="font-body text-foreground text-sm mb-6">
                  Send us your order list directly on WhatsApp for fast processing and live stock updates.
                </p>
                <a
                  href="https://wa.me/9704372273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-gold-gradient text-primary-foreground px-8 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-md"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;