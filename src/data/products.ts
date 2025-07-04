
export interface Review {
  id: number;
  userName: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
  rating: number;
  description: string;
  detailedDescription: string;
  features: string[];
  specifications: { [key: string]: string };
  reviews: Review[];
}

export const products: Product[] = [
  {
    id: 1,
    name: "Premium Wireless Headphones",
    price: 299,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=600&h=400&fit=crop",
    category: "electronics",
    rating: 4.8,
    description: "High-quality wireless headphones with noise cancellation",
    detailedDescription: "Experience premium audio quality with our state-of-the-art wireless headphones. Featuring advanced noise cancellation technology, these headphones deliver crystal-clear sound while blocking out unwanted ambient noise. Perfect for music lovers, professionals, and anyone who values superior audio quality.",
    features: ["Active Noise Cancellation", "30-hour battery life", "Premium sound quality", "Comfortable over-ear design", "Quick charge feature"],
    specifications: {
      "Battery Life": "30 hours",
      "Charging Time": "2 hours",
      "Weight": "250g",
      "Connectivity": "Bluetooth 5.0",
      "Driver Size": "40mm"
    },
    reviews: [
      {
        id: 1,
        userName: "Alex Johnson",
        rating: 5,
        comment: "Amazing sound quality! The noise cancellation works perfectly on flights.",
        date: "2024-06-15"
      },
      {
        id: 2,
        userName: "Sarah Chen",
        rating: 4,
        comment: "Great headphones, very comfortable for long listening sessions. Battery life is excellent.",
        date: "2024-06-10"
      },
      {
        id: 3,
        userName: "Mike Rodriguez",
        rating: 5,
        comment: "Best headphones I've ever owned. Worth every penny!",
        date: "2024-06-05"
      },
      {
        id: 4,
        userName: "Emma Wilson",
        rating: 4,
        comment: "Love the design and comfort. Sound quality is top-notch.",
        date: "2024-05-28"
      }
    ]
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: 199,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&h=400&fit=crop",
    category: "electronics",
    rating: 4.6,
    description: "Advanced fitness tracking with heart rate monitor",
    detailedDescription: "Stay on top of your health and fitness goals with this advanced smartwatch. Monitor your heart rate, track workouts, and receive notifications right on your wrist. Water-resistant design makes it perfect for any activity.",
    features: ["Heart rate monitoring", "GPS tracking", "Water resistant", "Sleep tracking", "Smart notifications"],
    specifications: {
      "Display": "1.4 inch AMOLED",
      "Battery Life": "7 days",
      "Water Resistance": "50m",
      "Connectivity": "Bluetooth, WiFi",
      "Sensors": "Heart Rate, GPS, Accelerometer"
    },
    reviews: [
      {
        id: 1,
        userName: "David Park",
        rating: 5,
        comment: "Perfect for tracking my runs. GPS is very accurate and battery lasts all week!",
        date: "2024-06-12"
      },
      {
        id: 2,
        userName: "Lisa Thompson",
        rating: 4,
        comment: "Great fitness features. The sleep tracking is surprisingly detailed.",
        date: "2024-06-08"
      },
      {
        id: 3,
        userName: "James Miller",
        rating: 5,
        comment: "Love the heart rate monitoring during workouts. Very reliable!",
        date: "2024-06-03"
      }
    ]
  },
  {
    id: 3,
    name: "Organic Cotton T-Shirt",
    price: 29,
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=600&h=400&fit=crop",
    category: "clothing",
    rating: 4.4,
    description: "Comfortable organic cotton t-shirt in various colors",
    detailedDescription: "Made from 100% organic cotton, this comfortable t-shirt is perfect for everyday wear. Soft, breathable, and environmentally friendly, it's available in multiple colors to suit your style.",
    features: ["100% organic cotton", "Soft and breathable", "Multiple colors available", "Pre-shrunk fabric", "Eco-friendly"],
    specifications: {
      "Material": "100% Organic Cotton",
      "Fit": "Regular",
      "Care": "Machine wash cold",
      "Origin": "Ethically sourced",
      "Sizes": "XS - XXL"
    },
    reviews: [
      {
        id: 1,
        userName: "Rachel Green",
        rating: 4,
        comment: "Very soft and comfortable. Great quality for the price!",
        date: "2024-06-14"
      },
      {
        id: 2,
        userName: "Tom Anderson",
        rating: 5,
        comment: "Love that it's organic cotton. Fits perfectly and feels great.",
        date: "2024-06-09"
      },
      {
        id: 3,
        userName: "Sophie Brown",
        rating: 4,
        comment: "Nice basic tee. The fabric is really soft and doesn't shrink.",
        date: "2024-06-01"
      }
    ]
  },
  {
    id: 4,
    name: "Leather Backpack",
    price: 89,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=600&h=400&fit=crop",
    category: "accessories",
    rating: 4.7,
    description: "Stylish leather backpack perfect for work or travel",
    detailedDescription: "Crafted from premium genuine leather, this backpack combines style and functionality. With multiple compartments and a padded laptop sleeve, it's perfect for professionals and travelers alike.",
    features: ["Genuine leather", "Laptop compartment", "Multiple pockets", "Comfortable straps", "Durable construction"],
    specifications: {
      "Material": "Genuine Leather",
      "Laptop Size": "Up to 15 inches",
      "Capacity": "25L",
      "Dimensions": "45 x 30 x 15 cm",
      "Weight": "1.2kg"
    },
    reviews: [
      {
        id: 1,
        userName: "Mark Stevens",
        rating: 5,
        comment: "Excellent quality leather and craftsmanship. Perfect for business trips!",
        date: "2024-06-11"
      },
      {
        id: 2,
        userName: "Jennifer Lee",
        rating: 4,
        comment: "Beautiful backpack with lots of space. The leather feels premium.",
        date: "2024-06-07"
      },
      {
        id: 3,
        userName: "Chris Wang",
        rating: 5,
        comment: "Love the design and functionality. Fits my laptop perfectly.",
        date: "2024-06-02"
      }
    ]
  },
  {
    id: 5,
    name: "Smartphone Case",
    price: 19,
    image: "https://images.unsplash.com/photo-1601593346740-925612772716?w=600&h=400&fit=crop",
    category: "accessories",
    rating: 4.3,
    description: "Protective phone case with premium materials",
    detailedDescription: "Protect your smartphone with this durable case made from high-quality materials. Features shock absorption and precise cutouts for all ports and buttons.",
    features: ["Shock absorption", "Precise cutouts", "Easy installation", "Wireless charging compatible", "Premium materials"],
    specifications: {
      "Material": "TPU + PC",
      "Protection": "Drop protection up to 2m",
      "Compatibility": "Multiple phone models",
      "Features": "Wireless charging ready",
      "Colors": "Black, Clear, Blue"
    },
    reviews: [
      {
        id: 1,
        userName: "Anna Davis",
        rating: 4,
        comment: "Good protection and fits perfectly. Dropped my phone several times with no damage!",
        date: "2024-06-13"
      },
      {
        id: 2,
        userName: "Kevin Liu",
        rating: 4,
        comment: "Solid case for the price. Easy to install and remove.",
        date: "2024-06-06"
      }
    ]
  },
  {
    id: 6,
    name: "Running Shoes",
    price: 129,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&h=400&fit=crop",
    category: "clothing",
    rating: 4.9,
    description: "Comfortable running shoes with advanced cushioning",
    detailedDescription: "Engineered for performance, these running shoes feature advanced cushioning technology and breathable materials. Perfect for runners of all levels, from casual joggers to marathon athletes.",
    features: ["Advanced cushioning", "Breathable mesh upper", "Lightweight design", "Durable outsole", "Responsive midsole"],
    specifications: {
      "Upper Material": "Breathable mesh",
      "Midsole": "EVA foam",
      "Outsole": "Rubber with traction pattern",
      "Weight": "280g (size 9)",
      "Drop": "10mm"
    },
    reviews: [
      {
        id: 1,
        userName: "Michael Chen",
        rating: 5,
        comment: "Best running shoes I've ever owned! Completed my first marathon in these.",
        date: "2024-06-16"
      },
      {
        id: 2,
        userName: "Sarah Johnson",
        rating: 5,
        comment: "Super comfortable and lightweight. My feet don't hurt after long runs anymore!",
        date: "2024-06-11"
      },
      {
        id: 3,
        userName: "Robert Kim",
        rating: 4,
        comment: "Great cushioning and support. Perfect for daily training runs.",
        date: "2024-06-04"
      },
      {
        id: 4,
        userName: "Emily Martinez",
        rating: 5,
        comment: "Love the breathable material. My feet stay cool during summer runs.",
        date: "2024-05-30"
      }
    ]
  }
];
