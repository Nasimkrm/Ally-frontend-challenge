import React from "react";

const User: React.FC = () => {
  return (
    <div className=" w-3/5 flex flex-row p-2 ml-16 mt-12 ">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/1.webp"
        alt="Avatar"
        className="w-12 rounded-full shadow-lg"
      />
      <div className="flex flex-col ml-4">
        <p className="font-bold text-gray-700">Simon</p>
        <p className="text-sm text-gray-400">4 minutes ago</p>
      </div>
    </div>
  );
};

export default User;
