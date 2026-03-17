import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import contactBg from '@/assets/contact-bg.jpg';

const businessHours = [
  { day: 'Monday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Tuesday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Wednesday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Thursday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Friday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Saturday', hours: '8:00 AM – 10:00 PM' },
  { day: 'Sunday', hours: '8:00 AM – 7:00 PM' },
];

const Contact = () => {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <img src={contactBg} alt="Contact Us" className="w-full h-full object-cover" />
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

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold mb-1">Phone</h3>
                  <a href="tel:9704372273" className="font-body text-foreground hover:text-gold transition-colors">9704372273</a>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h3 className="font-display text-foreground font-semibold mb-1">Email</h3>
                  <a href="mailto:Kamesh2207@gmail.com" className="font-body text-foreground hover:text-gold transition-colors">Kamesh2207@gmail.com</a>
                </div>
              </div>

              <div className="bg-card border border-border/50 rounded-lg p-6 flex items-start gap-4 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={22} />
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

              {/* WhatsApp CTA */}
              <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center shadow-sm">
                <h3 className="font-display text-xl font-bold text-foreground mb-3">Quick Order via WhatsApp</h3>
                <p className="font-body text-foreground text-sm mb-6">
                  Send us your order list directly on WhatsApp for fast processing.
                </p>
                <a
                  href="https://wa.me/9704372273"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-gradient text-primary-foreground px-8 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-all hover:-translate-y-1 shadow-md"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-6">
              <div className="bg-card border border-border/50 rounded-lg overflow-hidden shadow-sm">
                <div className="bg-green-gradient px-6 py-4 flex items-center gap-3">
                  <Clock className="text-primary-foreground" size={24} />
                  <h3 className="font-display text-xl font-bold text-primary-foreground">Business Hours</h3>
                </div>
                <div className="p-6">
                  <div className="space-y-0">
                    {businessHours.map((item) => (
                      <div
                        key={item.day}
                        className={`flex items-center justify-between py-3 px-4 rounded-md transition-colors ${
                          today === item.day
                            ? 'bg-gold/10 border border-gold/30'
                            : 'border border-transparent'
                        }`}
                      >
                        <span className={`font-body font-semibold text-sm ${
                          today === item.day ? 'text-gold-dark' : 'text-foreground'
                        }`}>
                          {item.day}
                          {today === item.day && (
                            <span className="ml-2 text-xs bg-gold text-white px-2 py-0.5 rounded-full">Today</span>
                          )}
                        </span>
                        <span className={`font-body text-sm ${
                          today === item.day ? 'text-gold-dark font-semibold' : 'text-muted-foreground'
                        }`}>
                          {item.hours}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional info card */}
              <div className="bg-gold/10 border border-gold/30 rounded-lg p-6 text-center">
                <p className="font-body text-foreground text-sm leading-relaxed">
                  <strong className="text-gold-dark">Holiday Hours:</strong> We may have modified hours during national holidays. Please call ahead to confirm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
