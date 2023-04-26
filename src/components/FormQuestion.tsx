import React from "react";

type Props = {
  question: string;
};

const FormQuestion: React.FC<Props> = ({ question }: Props) => {
  return (
    <>
      <span className="question text-left">{question}</span>
      <textarea
        className="text_area"
        cols={50}
        placeholder="Write your comment here..."
      ></textarea>
    </>
  );
};

export default FormQuestion;
