import React from "react";

const NodeComponent = () => {
  return (
    <div className="bg-[#1e1e1e] py-4 px-2 rounded-xl w-full max-w-md shadow-lg ">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-white">
          Website Url <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          defaultValue="https://quotes.toscrape.com/login"
          className="w-full bg-black text-white border border-gray-600 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-purple-600"
        />
      </div>
    </div>
  );
};

export default NodeComponent;
