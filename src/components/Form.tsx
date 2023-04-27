import React, { useState, useEffect, FormEventHandler } from "react";
import questionData from "../data/questionData";
import FormQuestion from "./FormQuestion";
import User from "./User";

type Props = {
  notify: FormEventHandler;
};

const Form: React.FC<Props> = ({ notify }: Props) => {
  const [questions, setQuestions] = useState<string[]>();

  useEffect(() => {
    setQuestions(questionData("cafe"));
  }, []);
  return (
    <form className="flex flex-col items-center p-4" onSubmit={notify}>
      <div className="flex flex-col ">
        <User />
        {questions?.map((question) => (
          <FormQuestion question={question} />
        ))}

        <button className="w-full h-12  self-center rounded-md font-semibold my-8 bg-amber-200 text-gray-700 text-sm shadow-sm ">
          Send
        </button>
      </div>
    </form>
  );
};

export default Form;
