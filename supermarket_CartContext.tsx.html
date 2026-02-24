import React, { createContext, useContext, useEffect, useState } from 'react';
import { CartItem, CartState, Product, ProductContext } from '../types';

interface CartContextType {
  cart: CartState;
  addToCart: (product: Product, quantity: number) => void;
  removeFromCart: (cartId: string) => void;
  updateQuantity: (cartId: string, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartState>({
    items: [],
    retailSubtotal: 0,
    wholesaleSubtotal: 0,
    total: 0,
  });

  // Simulate Database Load
  useEffect(() => {
    const savedCart = localStorage.getItem('orient_cart_v1');
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  // Simulate Database Save
  useEffect(() => {
    localStorage.setItem('orient_cart_v1', JSON.stringify(cart));
  }, [cart]);

  const calculateTotals = (items: CartItem[]): CartState => {
    const retail = items
      .filter((i) => i.context === 'RETAIL')
      .reduce((acc, i) => acc + i.price * i.quantity, 0);
    
    const wholesale = items
      .filter((i) => i.context === 'WHOLESALE')
      .reduce((acc, i) => acc + i.price * i.quantity, 0);

    return {
      items,
      retailSubtotal: retail,
      wholesaleSubtotal: wholesale,
      total: retail + wholesale,
    };
  };

  const addToCart = (product: Product, quantity: number) => {
    setCart((prev) => {
      const existingItem = prev.items.find(
        (i) => i.id === product.id && i.context === product.context
      );

      let newItems;
      if (existingItem) {
        newItems = prev.items.map((i) =>
          i.cartId === existingItem.cartId
            ? { ...i, quantity: i.quantity + quantity }
            : i
        );
      } else {
        const newItem: CartItem = {
          ...product,
          cartId: `${product.id}-${Date.now()}`,
          quantity,
          addedAt: Date.now(),
        };
        newItems = [...prev.items, newItem];
      }

      return calculateTotals(newItems);
    });
  };

  const removeFromCart = (cartId: string) => {
    setCart((prev) => calculateTotals(prev.items.filter((i) => i.cartId !== cartId)));
  };

  const updateQuantity = (cartId: string, quantity: number) => {
    if (quantity < 1) {
        removeFromCart(cartId);
        return;
    }
    setCart((prev) =>
      calculateTotals(
        prev.items.map((i) => (i.cartId === cartId ? { ...i, quantity } : i))
      )
    );
  };

  const clearCart = () => {
    setCart(calculateTotals([]));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within a CartProvider');
  return context;
};
