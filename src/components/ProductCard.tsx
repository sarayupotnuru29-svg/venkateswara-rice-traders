import { useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';
import { toast } from 'sonner';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [selectedVariant, setSelectedVariant] = useState(0);

  const currentPrice = product.variants
    ? product.variants[selectedVariant].price
    : product.price;

  const currentQuantity = product.variants
    ? product.variants[selectedVariant].label
    : product.quantity;

  const handleAdd = () => {
    addToCart({
      id: product.variants ? `${product.id}-${product.variants[selectedVariant].label}` : product.id,
      name: product.variants ? `${product.name} (${product.variants[selectedVariant].label})` : product.name,
      price: currentPrice || 'Contact for Price',
      image: product.image,
      category: product.category,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <div className="bg-card rounded-lg overflow-hidden border border-border/50 shadow-sm hover:shadow-md transition-shadow group">
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <span className="text-xs font-body text-gold font-semibold uppercase tracking-wider">{product.category}</span>
        <h3 className="font-display text-foreground font-semibold mt-1 text-sm lg:text-base">{product.name}</h3>

        {product.variants ? (
          <div className="mt-2">
            <select
              value={selectedVariant}
              onChange={(e) => setSelectedVariant(Number(e.target.value))}
              className="w-full px-3 py-1.5 rounded-md border border-border bg-background text-foreground font-body text-sm focus:outline-none focus:ring-2 focus:ring-gold/50"
            >
              {product.variants.map((v, i) => (
                <option key={v.label} value={i}>
                  {v.label} — {v.price}
                </option>
              ))}
            </select>
            <p className="font-body text-gold-dark font-bold mt-2 text-sm">Price: {currentPrice}</p>
          </div>
        ) : (
          <>
            <p className="font-body text-muted-foreground text-xs mt-1">Quantity: {currentQuantity}</p>
            {currentPrice && (
              <p className="font-body text-gold-dark font-bold mt-1 text-sm">Price: {currentPrice}</p>
            )}
          </>
        )}

        <button
          onClick={handleAdd}
          className="mt-3 w-full flex items-center justify-center gap-2 bg-gold-gradient text-primary-foreground px-3 py-2 rounded-md font-body text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <ShoppingCart size={16} />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
