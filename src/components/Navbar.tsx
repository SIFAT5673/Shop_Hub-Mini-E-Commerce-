
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Home } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const { toggleCart, getTotalItems } = useCart();
  const location = useLocation();
  const totalItems = getTotalItems();

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
              ShopHub
            </Link>
            <div className="hidden md:flex space-x-6">
              <Link
                to="/"
                className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  location.pathname === '/'
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                }`}
              >
                <Home size={18} />
                <span>Home</span>
              </Link>
            </div>
          </div>

          <Button
            onClick={toggleCart}
            variant="outline"
            size="sm"
            className="relative flex items-center space-x-2 hover:bg-blue-50 hover:border-blue-300 transition-colors"
          >
            <ShoppingCart size={18} />
            <span className="hidden sm:inline">Cart</span>
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-medium">
                {totalItems > 99 ? '99+' : totalItems}
              </span>
            )}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
