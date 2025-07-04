
import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CheckoutModal from './CheckoutModal';

const CartSidebar = () => {
  const { state, closeCart, updateQuantity, removeItem, getTotalPrice } = useCart();
  const [showCheckout, setShowCheckout] = useState(false);

  if (!state.isOpen) return null;

  const handleQuantityChange = (id: number, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeItem(id);
    } else {
      updateQuantity(id, newQuantity);
    }
  };

  const total = getTotalPrice();

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={closeCart} />
      
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-in-out">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center">
              <ShoppingBag className="mr-2" size={20} />
              Shopping Cart ({state.items.length})
            </h2>
            <Button
              onClick={closeCart}
              variant="ghost"
              size="sm"
              className="p-1 hover:bg-gray-100 rounded-full"
            >
              <X size={20} />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6">
            {state.items.length === 0 ? (
              <div className="text-center py-12">
                <ShoppingBag size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-500 text-lg">Your cart is empty</p>
                <p className="text-gray-400 text-sm mt-2">Add some products to get started</p>
              </div>
            ) : (
              <div className="space-y-4">
                {state.items.map((item) => (
                  <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-16 h-16 object-cover rounded-md flex-shrink-0"
                    />
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="font-medium text-gray-900 text-sm line-clamp-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1">
                        ${item.price.toFixed(2)} each
                      </p>
                      
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center space-x-2">
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 rounded-full"
                          >
                            <Minus size={14} />
                          </Button>
                          
                          <span className="font-medium text-gray-900 min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          
                          <Button
                            onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                            variant="outline"
                            size="sm"
                            className="h-8 w-8 p-0 rounded-full"
                          >
                            <Plus size={14} />
                          </Button>
                        </div>
                        
                        <div className="text-right">
                          <p className="font-semibold text-gray-900">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                          <Button
                            onClick={() => removeItem(item.id)}
                            variant="ghost"
                            size="sm"
                            className="text-red-600 hover:text-red-700 hover:bg-red-50 p-1 h-auto"
                          >
                            Remove
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          {state.items.length > 0 && (
            <div className="border-t border-gray-200 p-6 bg-gray-50">
              <div className="mb-4">
                <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
                  <span>Total:</span>
                  <span>${total.toFixed(2)}</span>
                </div>
              </div>
              
              <Button
                onClick={() => setShowCheckout(true)}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-medium transition-colors"
              >
                Checkout
              </Button>
            </div>
          )}
        </div>
      </div>

      <CheckoutModal
        isOpen={showCheckout}
        onClose={() => setShowCheckout(false)}
        total={total}
      />
    </>
  );
};

export default CartSidebar;
