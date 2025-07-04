
import React, { useState } from 'react';
import { X, CreditCard } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/hooks/use-toast';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  total: number;
}

const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose, total }) => {
  const { clearCart, closeCart } = useCart();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.address) {
      toast({
        title: "Missing information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast({
      title: "Order placed successfully!",
      description: `Thank you ${formData.name}! Your order for $${total.toFixed(2)} has been confirmed.`,
    });
    
    clearCart();
    closeCart();
    onClose();
    setIsSubmitting(false);
    setFormData({ name: '', email: '', address: '' });
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-[60] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-2xl w-full max-w-md mx-auto transform transition-all">
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <h2 className="text-xl font-semibold text-gray-900 flex items-center">
            <CreditCard className="mr-2" size={20} />
            Checkout
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <X size={20} />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="space-y-4">
            <div>
              <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                Full Name *
              </Label>
              <Input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div>
              <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div>
              <Label htmlFor="address" className="text-sm font-medium text-gray-700">
                Shipping Address *
              </Label>
              <Textarea
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="mt-1"
                placeholder="Enter your full shipping address"
                rows={3}
                required
              />
            </div>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center text-lg font-semibold text-gray-900">
              <span>Order Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex space-x-3 mt-6">
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processing...' : 'Place Order'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CheckoutModal;
