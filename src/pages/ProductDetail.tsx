import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Plus, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "@/components/StarRating";
import ReviewSection from "@/components/ReviewSection";
import { products, Review } from "@/data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [productReviews, setProductReviews] = useState<Review[]>([]);

  const product = products.find(p => p.id === parseInt(id || "0"));

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-4">Product Not Found</h1>
          <Link to="/">
            <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700">
              Back to Home
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  const allReviews = [...product.reviews, ...productReviews];
  const totalReviewCount = allReviews.length;

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of ${product.name} to cart`);
  };

  const handleAddReview = (newReview: Omit<Review, 'id' | 'date'>) => {
    const review: Review = {
      ...newReview,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0]
    };
    setProductReviews(prev => [review, ...prev]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-emerald-50 to-teal-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-slate-200 dark:border-slate-700">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-slate-600 dark:text-slate-300" />
            <span className="font-medium text-slate-700 dark:text-slate-300">Back to Shop</span>
          </Link>
          <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            ShopHub
          </h1>
        </div>
      </header>

      {/* Product Detail */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Image */}
          <div className="space-y-4">
            <Card className="dark:bg-slate-800 border-slate-200 dark:border-slate-700">
              <CardContent className="p-0">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-lg"
                />
              </CardContent>
            </Card>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2 capitalize bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-300">
                {product.category}
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 dark:text-slate-100 mb-4">
                {product.name}
              </h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  <StarRating rating={product.rating} />
                  <span className="ml-2 text-slate-600 dark:text-slate-300">{product.rating}</span>
                </div>
                <span className="text-slate-400">•</span>
                <span className="text-slate-600 dark:text-slate-300">{totalReviewCount} reviews</span>
              </div>
              <p className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-6">
                ${product.price}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Description</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {product.detailedDescription}
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-slate-600 dark:text-slate-300">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-slate-800 dark:text-slate-100 mb-3">Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                    <span className="font-medium text-slate-700 dark:text-slate-300">{key}:</span>
                    <span className="text-slate-600 dark:text-slate-400">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4 pt-6">
              <div className="flex items-center space-x-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="border-slate-300 dark:border-slate-600"
                >
                  -
                </Button>
                <span className="w-12 text-center font-medium text-slate-800 dark:text-slate-100">{quantity}</span>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setQuantity(quantity + 1)}
                  className="border-slate-300 dark:border-slate-600"
                >
                  +
                </Button>
              </div>
              <Button
                onClick={handleAddToCart}
                className="flex-1 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
                size="lg"
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        </div>

        {/* Reviews Section */}
        <ReviewSection reviews={allReviews} onAddReview={handleAddReview} />
      </div>
    </div>
  );
};

export default ProductDetail;
