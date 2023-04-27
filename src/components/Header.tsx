import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <div className="flex flex-row justify-around py-4 px-2 bg-white border-b-2 border-gray-100">
      <Link to="/">
        <img
          className="w-12 rounded-full shadow-lg"
          src="https://getally.ai/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fally-circle.948b8c0c.png&w=64&q=75"
          alt=""
        />
      </Link>
      <input
        type="search"
        className="w-2/5 px-2 font-normal rounded-lg border border-solid border-blue-300 bg-transparent text-neutral-700
        "
        placeholder="Search"
      />
      <div className=" flex flex-row-reverse items-center justify-center">
        <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
          <span className="font-medium text-gray-600 dark:text-gray-300">
            JL
          </span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="w-6 h-6 mr-4"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
