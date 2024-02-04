"use client";
import React from "react";

const Header = () => {

  return (
    <>
      <br />
      <div className="group relative mx-auto max-w-7xl">
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-600 to-pink-400 opacity-30 blur transition duration-1000 "></div>
        <div className="items-top flex flex-col md:flex-row justify-center space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
          <div className="space-y-2 text-center">
            <p className="text-neutral-600 font-bold text-2xl md:ml-0">RandomePlash-15</p>
          </div>
        </div>
      </div>
    </>
  );
  
};

export default Header;