import React from "react";

const Hero = () => {
  return (
    <main className="flex items-center h-screen px-8 py-0">
      <div className="flex flex-col gap-9">
        <h1 className="font-extrabold text-9xl leading-[102px]">
          YOUR FEET DESERVE THE BEST
        </h1>
        <p className="font-semibold text-gray-500 max-w-xs">
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>

        <div className="flex gap-10">
          <button className="text-lg py-2 px-6 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Shop Now
          </button>
          <button className="text-lg py-2 px-6 border-2 border-gray-500 text-gray-700 rounded-md hover:bg-gray-100">
            Category
          </button>
        </div>

        <div className="mt-8">
          <p className="text-sm">Also Available On</p>
          <div className="flex gap-6 mt-2">
            <img src="/images/amazon.png" alt="amazon-logo" className="w-24" />
            <img src="/images/flipkart.png" alt="flipkart-logo" className="w-24" />
          </div>
        </div>
      </div>
      <div className="ml-auto">
        <img src="/images/shoe_image.png" alt="hero-image" className="w-full max-w-lg" />
      </div>
    </main>
  );
};

export default Hero;
