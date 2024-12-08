import clsx from "clsx";
import { Star } from "lucide-react";

type StarRatingProps = {
  rating: number;
};

const StarRating = (props: StarRatingProps) => {
  return (
    <div className="flex">
      {Array.from({ length: 5 }, (_, index) => (
        <Star
          key={index}
          className={clsx("h-5 w-5", {
            "text-yellow-500 fill-yellow-500": index < props.rating,
            "text-gray-300": index >= props.rating,
          })}
        />
      ))}
    </div>
  );
};

export default StarRating;
