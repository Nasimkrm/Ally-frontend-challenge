import React, { useState, useEffect, FormEventHandler } from "react";
import questionData from "../data/questionData";
import FormQuestion from "./FormQuestion";

type Props = {
  notify: FormEventHandler;
};

const Form: React.FC<Props> = ({ notify }: Props) => {
  const [questions, setQuestions] = useState<string[]>();

  useEffect(() => {
    setQuestions(questionData("Ancoats Coffee"));
  }, []);
  return (
    <form className="flex flex-col  items-center p-4" onSubmit={notify}>
      <div className="flex flex-col ">
        {questions?.map((question) => (
          <FormQuestion question={question} />
        ))}

        <button className="w-full h-12  self-center rounded-md font-semibold my-8 bg-amber-200 text-gray-900 text-sm shadow-sm ">
          Submit Review
        </button>
      </div>
    </form>
  );
};

export default Form;
