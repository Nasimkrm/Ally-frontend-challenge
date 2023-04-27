import React from "react";
import { Review } from "../types/recommendationTypes";

type Props = {
  review: Review;
};

const RecommendationPreview: React.FC<Props> = ({ review }: Props) => {
  return (
    <div className="flex flex-row p-4 items-end mb-4">
      <img
        src={review.user.avatar}
        alt="Avatar"
        className="w-16 rounded-full shadow-lg"
      />
      <div className="flex flex-col ml-8 items-start">
        <p className="font-bold text-gray-700">{review.user.name}</p>
        <p>{review.name}</p>
      </div>
    </div>
  );
};

export default RecommendationPreview;
