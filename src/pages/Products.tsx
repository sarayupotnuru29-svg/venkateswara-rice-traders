import { useState } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { AlertTriangle } from 'lucide-react';
import productsBg from '@/assets/products-bg.jpg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      {/* Header with Background Image */}
      <section className="relative py-20 lg:py-24 overflow-hidden">
        {/* Section Background Image */}
        <div className="absolute inset-0">
          <img src={productsBg} alt="Products Background" className="w-full h-full object-cover" />
          {/* Darker overlay for text legibility */}
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
        </div>

        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-gold-light mb-4 drop-shadow-md">
            Our Products
          </h1>
          <p className="font-body text-white/90 text-lg max-w-2xl mx-auto drop-shadow-sm">
            Browse our complete range of agricultural products, cattle feed, grains, and more.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="container mx-auto px-4">
        {/* Price notice */}
        <div className="mt-12">
          <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-start gap-3">
            <AlertTriangle className="text-gold shrink-0 mt-0.5" size={20} />
            <p className="font-body text-sm text-foreground">
              <strong>Note:</strong> All prices are variable depending on the market conditions. Please contact us for the latest pricing.
            </p>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mt-10">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-6 py-2.5 rounded-full font-body text-sm font-semibold transition-all shadow-sm ${
                activeCategory === 'All' 
                  ? 'bg-green-gradient text-primary-foreground' 
                  : 'bg-card border border-border text-foreground hover:bg-muted'
              }`}
            >
              All Products
            </button>
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full font-body text-sm font-semibold transition-all shadow-sm ${
                  activeCategory === cat 
                    ? 'bg-green-gradient text-primary-foreground' 
                    : 'bg-card border border-border text-foreground hover:bg-muted'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="py-12 pb-24">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 lg:gap-8">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
          
          <div className="mt-12 pt-8 border-t border-border/50">
            <p className="text-center text-muted-foreground text-sm font-body italic">
              Showing {filtered.length} of {products.length} products
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;