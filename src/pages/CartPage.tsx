import { useCart } from '@/context/CartContext';
import { Trash2, Plus, Minus, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import cartBg from '@/assets/cart-bg.jpg';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCart();

  const handleCheckout = () => {
    const message = items
      .map(i => `• ${i.name} x${i.quantity} — ${i.price}`)
      .join('\n');
    const text = encodeURIComponent(`Hi, I'd like to order:\n\n${message}\n\nPlease confirm availability and total.`);
    window.open(`https://wa.me/9704372273?text=${text}`, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-background px-4 relative">
        <img src={cartBg} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
        <div className="absolute inset-0 bg-background/90 -z-10" />
        <ShoppingBag className="text-muted-foreground mb-4" size={64} />
        <h1 className="font-display text-2xl font-bold text-foreground mb-2">Your Cart is Empty</h1>
        <p className="font-body text-foreground mb-6">Add some products to get started.</p>
        <Link
          to="/products"
          className="bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity"
        >
          Browse Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 relative">
      <img src={cartBg} alt="" className="fixed inset-0 w-full h-full object-cover -z-10" />
      <div className="fixed inset-0 bg-background/92 -z-10" />
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">Shopping Cart</h1>

        <div className="space-y-4">
          {items.map(item => (
            <div key={item.id} className="bg-card border border-border/50 rounded-lg p-4 flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 lg:w-20 lg:h-20 object-cover rounded-md" />
              <div className="flex-1 min-w-0">
                <h3 className="font-display text-foreground font-semibold text-sm lg:text-base truncate">{item.name}</h3>
                <p className="font-body text-gold-dark font-bold text-sm">{item.price}</p>
                <span className="text-xs text-foreground font-body">{item.category}</span>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="w-8 h-8 rounded border border-border flex items-center justify-center text-foreground hover:bg-muted">
                  <Minus size={14} />
                </button>
                <span className="font-body text-foreground font-semibold w-8 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="w-8 h-8 rounded border border-border flex items-center justify-center text-foreground hover:bg-muted">
                  <Plus size={14} />
                </button>
              </div>
              <button onClick={() => removeFromCart(item.id)} className="text-destructive hover:text-destructive/80 transition-colors">
                <Trash2 size={18} />
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-card border border-border/50 rounded-lg p-6">
          <div className="flex justify-between items-center mb-4">
            <span className="font-body text-foreground">Total Items</span>
            <span className="font-display text-foreground font-bold">{items.reduce((s, i) => s + i.quantity, 0)}</span>
          </div>
          <p className="text-sm text-foreground font-body mb-6">
            Final pricing will be confirmed on WhatsApp based on current market rates.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleCheckout}
              className="flex-1 bg-gold-gradient text-primary-foreground px-6 py-3 rounded-md font-body font-semibold hover:opacity-90 transition-opacity text-center"
            >
              Checkout via WhatsApp
            </button>
            <button
              onClick={clearCart}
              className="px-6 py-3 rounded-md border border-border text-foreground font-body font-medium hover:bg-muted transition-colors"
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
