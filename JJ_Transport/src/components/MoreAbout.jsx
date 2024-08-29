// eslint-disable-next-line no-unused-vars
import React from "react";
import mountain from "../assets/mountain.png";
import truck from "../assets/truck.png";

const MoreAbout = () => {
  return (
    <div
      style={{ backgroundImage: `url(${mountain})` }}
      className="bg-cover bg-center w-full p-5" id="about"
    >
      <h1 className="text-center font-semibold text-2xl p-7">About Us</h1>
      <div className="flex flex-col justify-center items-center w-full md:flex-row px-6">
        <div className="w-full md:w-[50%]">
          <p className="text-start md:text-start w-full">
            Welcome to J&J, where passion for excellence drives everything we
            do. Established in 2024, our company has grown to become a trusted
            name in the automotive industry.
          </p>
          <div className="flex justify-center items-center md:justify-start space-x-12 my-4">
            <div>
              <h1 className="text-2xl text-[#873884]">4.7</h1>
              <p className="font-semibold">Customer <br /> Reviews</p>
            </div>
            <div>
              <h1 className="text-2xl text-[#873884]">35+</h1>
              <p className="font-semibold">Awards <br />Gained</p>
            </div>
            <div>
              <h1 className="text-2xl text-[#873884]">120</h1>
              <p className="font-semibold">Highlights</p>
            </div>
          </div>
            <button className="border-2 border-[#873884] px-4 py-1 text-[#873884] rounded-2xl hover:bg-[#873884] hover:text-white transition-all duration-500">
              Explore More
            </button>
        </div>
        <img src={truck} alt="" className="w-full md:w-[50%] mt-6" />
      </div>
    </div>
  );
};

export default MoreAbout;
