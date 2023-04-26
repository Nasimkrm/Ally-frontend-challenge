import React, { useState, useEffect } from "react";
import recommendationData from "../data/recommendationData";
import RecommendationPreview from "./RecommendationPreview";
import { Review } from "../types/recommendationTypes";

const RecommendationPreviewList: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>();

  useEffect(() => {
    const fetchRecommendations = () => {
      return recommendationData;
    };
    setReviews(fetchRecommendations);
  }, []);

  return (
    <div>
      <header className="p-4">
        <h1 className="text-2xl font-medium text-center">
          Other Recommendations
        </h1>
      </header>
      {reviews &&
        reviews.map((review) => (
          <RecommendationPreview review={review} key={review.id} />
        ))}
    </div>
  );
};

export default RecommendationPreviewList;
