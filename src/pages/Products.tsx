import { useState } from 'react';
import { products, categories } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { AlertTriangle } from 'lucide-react';
import productsBg from '@/assets/products-bg.jpg';

const Products = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const filtered = activeCategory === 'All' ? products : products.filter(p => p.category === activeCategory);

  return (
    <div className="min-h-screen relative">
      {/* Background */}
      <img src={productsBg} alt="" className="fixed inset-0 w-full h-full object-cover -z-10" />
      <div className="fixed inset-0 bg-background/92 -z-10" />

      {/* Header */}
      <section className="bg-secondary py-12 lg:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground mb-2">Our Products</h1>
          <p className="font-body text-foreground max-w-xl mx-auto">
            Browse our complete range of agricultural products, cattle feed, grains, and more.
          </p>
        </div>
      </section>

      {/* Price notice */}
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-gold/10 border border-gold/30 rounded-lg p-4 flex items-start gap-3">
          <AlertTriangle className="text-gold shrink-0 mt-0.5" size={20} />
          <p className="font-body text-sm text-foreground">
            <strong>Note:</strong> All prices are variable depending on the market conditions. Please contact us for the latest pricing.
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="container mx-auto px-4 mt-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActiveCategory('All')}
            className={`px-4 py-2 rounded-md font-body text-sm font-medium transition-colors ${
              activeCategory === 'All' ? 'bg-gold-gradient text-primary-foreground' : 'bg-card border border-border text-foreground hover:bg-muted'
            }`}
          >
            All Products
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-md font-body text-sm font-medium transition-colors ${
                activeCategory === cat ? 'bg-gold-gradient text-primary-foreground' : 'bg-card border border-border text-foreground hover:bg-muted'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="container mx-auto px-4 py-8 pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 lg:gap-6">
          {filtered.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <p className="text-center text-foreground text-sm mt-8 font-body">
          Showing {filtered.length} of {products.length} products
        </p>
      </div>
    </div>
  );
};

export default Products;
