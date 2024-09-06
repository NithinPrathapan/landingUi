import React from "react";
import shoe from "./assets/hero.png";

const Hero = () => {
  return (
    <div className="h-full flex justify-between gap-6 items-center ">
      <div className="w-1/2 flex flex-col gap-8">
        <h1 className="uppercase text-8xl font-bold text-left">
          Your Feet <br /> Deserve <br /> the best
        </h1>
        <p className="w-2/3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
          officia iure natus delectus sit in magni alias aliquid, architecto
          necessitatibus, optio excepturi. Fugit perferendis culpa, optio
          debitis laudantium in autem mollitia porro!
        </p>
        <div className="flex gap-2 ">
          <button className="bg-red-500 hover:bg-opacity-80  rounded-md text-white w-[120px] py-2">
            Shop Now
          </button>
          <button className="border-2 hover:border-red-500 border-black rounded-md text-black w-[120px] py-2">
            Category
          </button>
        </div>
        <p>Also Available On</p>
        <div className="w-1/6 flex  items-center">
          <img
            width={60}
            src="https://i.pinimg.com/736x/aa/70/8d/aa708d1f97a04f6f5a208213f89e1e67.jpg"
            alt=""
          />
          <img
            width={60}
            src="https://upload.wikimedia.org/wikipedia/commons/d/de/Amazon_icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="w-1/2 h-full">
        <img
          className=" hover:-translate-y-6 transition hover:-rotate-12 duration-300  "
          src={shoe}
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
