
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import StarRating from "./StarRating";
import { Review } from "@/data/products";

interface ReviewSectionProps {
  reviews: Review[];
  onAddReview: (review: Omit<Review, 'id' | 'date'>) => void;
}

const ReviewSection = ({ reviews, onAddReview }: ReviewSectionProps) => {
  const [newReview, setNewReview] = useState({
    userName: "",
    rating: 0,
    comment: ""
  });
  const [showReviewForm, setShowReviewForm] = useState(false);

  const handleSubmitReview = () => {
    if (newReview.userName && newReview.rating > 0 && newReview.comment) {
      onAddReview(newReview);
      setNewReview({ userName: "", rating: 0, comment: "" });
      setShowReviewForm(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-slate-100">
          Customer Reviews
        </h3>
        <Button
          onClick={() => setShowReviewForm(!showReviewForm)}
          className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white"
        >
          Write a Review
        </Button>
      </div>

      {showReviewForm && (
        <Card className="dark:bg-slate-800 border-slate-200 dark:border-slate-700">
          <CardContent className="p-6 space-y-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Name
              </label>
              <Input
                value={newReview.userName}
                onChange={(e) => setNewReview({ ...newReview, userName: e.target.value })}
                placeholder="Enter your name"
                className="dark:bg-slate-700 dark:border-slate-600"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Rating
              </label>
              <StarRating
                rating={newReview.rating}
                onRatingChange={(rating) => setNewReview({ ...newReview, rating })}
                interactive={true}
                size={24}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">
                Your Review
              </label>
              <Textarea
                value={newReview.comment}
                onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
                placeholder="Share your experience with this product..."
                className="dark:bg-slate-700 dark:border-slate-600"
                rows={4}
              />
            </div>
            <div className="flex space-x-3">
              <Button onClick={handleSubmitReview} className="bg-emerald-500 hover:bg-emerald-600">
                Submit Review
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowReviewForm(false)}
                className="border-slate-300 dark:border-slate-600"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <Card key={review.id} className="dark:bg-slate-800 border-slate-200 dark:border-slate-700">
            <CardContent className="p-6">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-semibold text-slate-800 dark:text-slate-100">
                    {review.userName}
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    {new Date(review.date).toLocaleDateString()}
                  </p>
                </div>
                <StarRating rating={review.rating} />
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {review.comment}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ReviewSection;
