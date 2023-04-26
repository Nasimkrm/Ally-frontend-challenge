import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import recommendationData from "../data/recommendationData";
import { Review } from "../types/recommendationTypes";

type Props = {};

const DetailedRecommendation: React.FC = (props: Props) => {
  let { id } = useParams();

  const [detailedRec, setDetailedRec] = useState<Review>();

  useEffect(() => {
    setDetailedRec(
      recommendationData.find((recommendation) => recommendation.id === id)
    );
  }, [id]);

  return detailedRec ? (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <div className="w-2/3 bg-amber-200 p-8 rounded-lg">
        <div className="flex flex-row items-center">
          <img
            src={detailedRec.avatar}
            alt="Avatar"
            className="w-36 h-36 rounded-full shadow-lg"
          />
          <div className=" w-2/3  flex flex-col justify-center p-4">
            <h2 className="question text-center">
              What {detailedRec.user} says about Ancoats Coffee Co.
            </h2>
            <p className="answer">{detailedRec.comment}</p>
          </div>
        </div>
      </div>
      {detailedRec.questions.map((question) => (
        <div className="w-full">
          <p className="question text-center text-2xl">{question.question}</p>
          <p className="answer">{question.answer}</p>
          <hr />
        </div>
      ))}
    </div>
  ) : null;
};

export default DetailedRecommendation;
