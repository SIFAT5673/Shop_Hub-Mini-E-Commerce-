
import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart } from 'lucide-react';
import { Product } from '@/data/products';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { toast } from '@/hooks/use-toast';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addItem } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    toast({
      title: "Added to cart",
      description: `${product.title} has been added to your cart.`,
    });
  };

  return (
    <Card className="group cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 bg-white border border-gray-200 w-[200px]">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square overflow-hidden rounded-t-lg">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
      
      <CardContent className="p-3">
        <Link to={`/product/${product.id}`}>
          <h3 className="font-medium text-gray-900 mb-2 text-sm line-clamp-2 hover:text-blue-600 transition-colors">
            {product.title}
          </h3>
        </Link>
        
        <div className="flex items-center justify-between mb-2">
          <span className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          <div className="flex items-center">
            <Star size={12} className="text-yellow-400 fill-current" />
            <span className="text-xs text-gray-600 ml-1">({product.rating})</span>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="p-3 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-colors text-sm py-2"
          size="sm"
        >
          <ShoppingCart size={14} className="mr-1" />
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
