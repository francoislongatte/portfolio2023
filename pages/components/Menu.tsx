import React from "react";

function Menu() {
  return (
    <div
      id="menu1"
      className="flex z-10 justify-center fixed h-screen w-40 left-12 flex-col  items-start pb-1 "
    >
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p className="text-base leading-4  "><span className="text-lime-500 pr-2 font-bold">00.</span>About</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p className="text-base leading-4  "><span className="text-lime-500 pr-2 font-bold">01.</span>Experience</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2 w-full md:w-52">
        <p className="text-base leading-4  "><span className="text-lime-500 pr-2 font-bold">02.</span>Work</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p className="text-base leading-4  "><span className="text-lime-500 pr-2 font-bold">03.</span>Contact</p>
      </button>
      <button className="flex justify-start items-center space-x-6 hover:text-white focus:bg-gray-700 focus:text-white hover:bg-gray-700 text-gray-400 rounded px-3 py-2  w-full md:w-52">
        <p className="text-base leading-4  "><span className="text-lime-500 pr-2 font-bold">04.</span>Resume</p>
      </button>
    </div>
  );
}

export default Menu;
