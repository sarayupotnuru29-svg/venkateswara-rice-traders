import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import type { Product } from '@/data/products';
import { toast } from 'sonner';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  const handleAdd = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price || 'Contact for Price',
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
        <p className="font-body text-muted-foreground text-xs mt-1">Quantity: {product.quantity}</p>
        {product.price && (
          <p className="font-body text-gold-dark font-bold mt-1 text-sm">Price: {product.price}</p>
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
