// eslint-disable-next-line no-unused-vars
import React from "react";
import Tabs from "./Tabs";
import bmw from "../assets/bmw.png";
import { FaCar, FaClock, FaMap } from "react-icons/fa";

const Booking = () => {
  return (
    <>
      <div className="mt-7" id="vehicles">
        <h1 className="text-center font-bold text-3xl mb-3 text-wrap px-3">
          Book your Favourite vehicle
        </h1>
        <Tabs />
        <h1 className="text-center mt-3 ">Starting at $500/Day</h1>
        <div className="flex justify-center space-x-4 mt-3 ">
          <button className="text-[#873884] border-2 border-[#873884] rounded-3xl px-5 py-1 hover:bg-[#873884] hover:text-white transition-all duration-500">
            Detail
          </button>
          <button className="text-white bg-[#873884] rounded-3xl px-5 py-1 hover:bg-[#941c90]">
            Book Now
          </button>
        </div>
      </div>
      <div className="mt-8">
        <h1 className="text-center font-semibold text-3xl my-5">
          Your Gateway to <span className="text-[#873884]">Unforgettable</span>{" "}
          Journeys
        </h1>
        <div className="flex flex-col md:flex-row mt-3">
          <img src={bmw} alt="bmw car" className="w-full md:w-[50%]" />
          <div className="w-full md:w-[60%] my-4 mx-4 px-5">
            <div className="flex space-x-2">
              <FaCar className="w-16 h-16 bg-[#955293] text-white rounded-full p-1" />
              <div className="mx-12 w-full">
                <h1 className="font-semibold text-xl">Large Modern Fleet</h1>
                <p className="px-2 text">
                  we take pride in offering one of the largest and most modern
                  fleets of vehicles.  
                </p>
              </div>
            </div>
            <div className="flex space-x-2 my-4">
              <FaClock className="w-16 h-16 bg-[#955293] text-white rounded-full p-1" />
              <div className="mx-12 w-full">
                <h1 className="font-semibold text-xl">24/7 Availability</h1>
                <p className="px-2 text">
                 You can find us whenever you like it, at each our of the day.
                </p>
              </div>
            </div>
            <div className="flex space-x-2 my-4">
              <FaMap className="w-16 h-16 bg-[#955293] text-white rounded-full p-1" />
              <div className="mx-12 w-full">
                <h1 className="font-semibold text-xl">Border to Border</h1>
                <p className="px-2 text">
                  Our service are available in all country. We cross all borders to provide better services. 
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Booking;
