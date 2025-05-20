import React from "react";
import logo from "../assets/logo.png";

const LogoHolder = () => {
  return (
    <footer className="border-t-4 border-gray-200 fixed bottom-0 left-0 w-full bg-white z-10 p-2">
      <div className="flex items-center justify-center h-full">
        <img src={logo} alt="logo" className="w-28" />
      </div>
    </footer>
  );
};

export default LogoHolder;
