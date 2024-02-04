"use client";
import React from "react";

const Footer = () => {
  return (
    <>
      <br />
      <div className="relative mx-auto max-w-7xl mt-"> 
        <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 blur transition duration-1000 "></div>
        <div className="items-top flex flex-col md:flex-row justify-center space-x-6 rounded-lg bg-white px-7 py-6 leading-none ring-1 ring-gray-900/5">
          <div className="space-y-2 text-center">
            <p className="text-neutral-600 font-semibold text-sm md:ml-0">Copyright © Chandra Prakash</p>
          </div>
        </div>
      </div>
      <br />
    </>
  );
  
};

export default Footer;  