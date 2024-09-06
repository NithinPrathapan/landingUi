import React from "react";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 items-center shadow-sm ">
      <div>
        <h1>NIke</h1>
      </div>
      <div>
        <ul className="flex justify-between items-center text-center gap-8">
          <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">Home</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">About</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">Contact</li>
          <li className="hover:text-yellow-500 cursor-pointer transition-all duration-300">Location</li>
        </ul>
      </div>
      <div>
        <button className="bg-red-500 text-white w-[100px]  py-2 ">
          Login
        </button>
      </div>
    </div>
  );
};

export default Navbar;
