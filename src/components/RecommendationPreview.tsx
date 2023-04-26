import React from "react";
import { Review } from "../types/recommendationTypes";
import { Link } from "react-router-dom";

type Props = {
  review: Review;
};

const RecommendationPreview: React.FC<Props> = ({ review }: Props) => {
  return (
    <Link to={`recommendation/${review.id}`}>
      <div className="flex flex-row p-4 items-center mb-4">
        <img
          src={review.avatar}
          alt="Avatar"
          className="w-16 rounded-full shadow-lg"
        />
        <div className="flex flex-col ml-8 items-start">
          <p className="font-bold">{review.user}</p>
          <p>{review.summary}</p>
          <p className="text-gray-400 font-semibold text-sm pt-2 ">
            Read More...
          </p>
        </div>
      </div>
    </Link>
  );
};

export default RecommendationPreview;
