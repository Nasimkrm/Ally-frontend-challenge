import React, { FormEvent } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Form from "../components/Form";
import RecommendationPreviewList from "../components/RecommendationPreviewList";

const Request: React.FC = () => {
  const notify = (e: FormEvent) => {
    e.preventDefault();
    toast("Your review is submitted!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    const target = e.target as HTMLFormElement;
    target.reset();
  };

  return (
    <div>
      <header className="flex justify-center items-center py-16 bg-amber-200">
        <h1 className="text-3xl text-gray-900 font-bold">
          Jack has requested your recommendation for Ancoats Coffee Co.
        </h1>
      </header>
      <div className="flex flex-row">
        <div className="flex-grow">
          <Form notify={notify} />
        </div>
        <div className="w-3/12">
          <div className="flex flex-col mt-12">
            <RecommendationPreviewList />
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};

export default Request;
