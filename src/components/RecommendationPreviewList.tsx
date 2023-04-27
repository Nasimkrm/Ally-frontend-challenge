import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import recommendationData from "../data/recommendationData";
import RecommendationPreview from "./RecommendationPreview";
import { Review } from "../types/recommendationTypes";

const RecommendationPreviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    setReviews(recommendationData);
  }, []);

  return (
    <div>
      <header className="p-4">
        <Link to="/recommendations/cafe">
          <h1 className="text-2xl font-medium text-center text-gray-00">
            Other Recommendations
          </h1>
        </Link>
      </header>
      {reviews &&
        reviews.map((review) => (
          <RecommendationPreview review={review} key={review.id} />
        ))}

      <Link to="/recommendations/cafe">
        <p className="text-center text-sm font-semibold text-gray-500 mt-12">
          View similar recommendations
        </p>
      </Link>
    </div>
  );
};

export default RecommendationPreviewList;
