
import { useState } from "react";
import { Star } from "lucide-react";

interface StarRatingProps {
  rating: number;
  onRatingChange?: (rating: number) => void;
  interactive?: boolean;
  size?: number;
}

const StarRating = ({ rating, onRatingChange, interactive = false, size = 20 }: StarRatingProps) => {
  const [hoverRating, setHoverRating] = useState(0);

  const handleClick = (starRating: number) => {
    if (interactive && onRatingChange) {
      onRatingChange(starRating);
    }
  };

  const handleMouseEnter = (starRating: number) => {
    if (interactive) {
      setHoverRating(starRating);
    }
  };

  const handleMouseLeave = () => {
    if (interactive) {
      setHoverRating(0);
    }
  };

  return (
    <div className="flex items-center space-x-1">
      {[1, 2, 3, 4, 5].map((star) => {
        const isFilled = star <= (hoverRating || rating);
        return (
          <Star
            key={star}
            size={size}
            className={`${
              isFilled
                ? "fill-amber-400 text-amber-400"
                : "text-slate-300 dark:text-slate-600"
            } ${
              interactive
                ? "cursor-pointer hover:scale-110 transition-transform"
                : ""
            }`}
            onClick={() => handleClick(star)}
            onMouseEnter={() => handleMouseEnter(star)}
            onMouseLeave={handleMouseLeave}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
