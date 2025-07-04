import { useState } from "react";
import { ShoppingCart, Plus, Minus, Filter, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Link } from "react-router-dom";
import StarRating from "@/components/StarRating";
import { products, Product } from "@/data/products";

interface CartItem extends Product {
  quantity: number;
}

const Index = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const categories = ["all", "electronics", "clothing", "accessories"];

  const filteredProducts = selectedCategory === "all" 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(prevCart => prevCart.filter(item => item.id !== id));
    } else {
      setCart(prevCart =>
        prevCart.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-slate-900' : 'bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50'}`}>
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            ShopHub
          </h1>
          
          <div className="flex items-center space-x-4">
            <Link to="/signin">
              <Button variant="outline" size="sm" className="border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300">
                Sign In
              </Button>
            </Link>
            <Button
              variant="outline"
              size="sm"
              onClick={toggleDarkMode}
              className="border-slate-300 dark:border-slate-600"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </Button>
            <div className="relative">
              <Button variant="outline" size="sm" className="relative border-slate-300 dark:border-slate-600">
                <ShoppingCart className="w-4 h-4 mr-2" />
                Cart
                {getTotalItems() > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-emerald-500">
                    {getTotalItems()}
                  </Badge>
                )}
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-emerald-600 to-teal-600 bg-clip-text text-transparent dark:from-slate-100 dark:via-emerald-400 dark:to-teal-400">
            Discover Amazing Products
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
            Shop the latest trends and find everything you need in one place. Quality products, great prices, and fast delivery.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`capitalize ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700"
                    : "border-slate-300 dark:border-slate-600 text-slate-700 dark:text-slate-300"
                }`}
              >
                <Filter className="w-4 h-4 mr-2" />
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link key={product.id} to={`/product/${product.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2 dark:bg-slate-800 dark:hover:bg-slate-700 bg-white">
                  <CardContent className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-white/90 text-slate-800 dark:bg-slate-800/90 dark:text-white">
                          <StarRating rating={product.rating} size={12} />
                          <span className="ml-1">{product.rating}</span>
                        </Badge>
                      </div>
                    </div>
                    <div className="p-6">
                      <Badge variant="secondary" className="mb-2 capitalize bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                        {product.category}
                      </Badge>
                      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-slate-100">
                        {product.name}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-emerald-600 dark:text-emerald-400">
                          ${product.price}
                        </span>
                        <span className="text-sm text-slate-500 dark:text-slate-400">
                          ({product.reviews.length} reviews)
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <Button 
                      onClick={(e) => {
                        e.preventDefault();
                        addToCart(product);
                      }}
                      className="w-full bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-300"
                    >
                      <Plus className="w-4 h-4 mr-2" />
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Cart Summary */}
      {cart.length > 0 && (
        <section className="py-8 px-4 bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700">
          <div className="container mx-auto">
            <div className="max-w-md mx-auto">
              <h3 className="text-lg font-semibold mb-4 text-slate-800 dark:text-slate-100">Shopping Cart</h3>
              <div className="space-y-3">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-700 rounded-lg">
                    <div className="flex-1">
                      <h4 className="font-medium text-sm text-slate-800 dark:text-slate-100">{item.name}</h4>
                      <p className="text-emerald-600 dark:text-emerald-400 font-semibold">${item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="border-slate-300 dark:border-slate-600"
                      >
                        <Minus className="w-3 h-3" />
                      </Button>
                      <span className="w-8 text-center text-slate-800 dark:text-slate-100">{item.quantity}</span>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="border-slate-300 dark:border-slate-600"
                      >
                        <Plus className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-slate-200 dark:border-slate-600 mt-4 pt-4">
                <div className="flex justify-between items-center text-lg font-bold text-slate-800 dark:text-slate-100">
                  <span>Total: ${getTotalPrice()}</span>
                  <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">ShopHub</h3>
          <p className="text-slate-400 mb-8">Your one-stop shop for amazing products</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <h4 className="font-semibold mb-2">Customer Service</h4>
              <p className="text-slate-400">24/7 Support Available</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Free Shipping</h4>
              <p className="text-slate-400">On orders over $50</p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Easy Returns</h4>
              <p className="text-slate-400">30-day return policy</p>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8">
            <p className="text-slate-500">&copy; 2024 ShopHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
