import { useState } from 'react';
import jeep from "../assets/jeep.jpeg"
import luxury from "../assets/luxury.jpeg"
import bmw from "../assets/bmw.png"
import passengers from "../assets/passengers.jpeg"

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ['Passengers', 'Luxury cars', 'Jeep', 'BMW'];
  const content = [
    passengers, luxury, jeep, bmw
  ];

  const vehicleName = [
    "Taxi", "Lamborghini", "Jeep", "BMW"
  ]

  return (
    <div className="w-full max-w-xl mx-auto px-2">
      <div className="flex space-x-4 border border-gray-200 rounded-2xl text-center justify-center">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`py-2 px-4 text-sm font-medium ${activeTab === index
                ? 'text-blue-600 border-b-1 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="mt-4 p-4 border border-gray-200 rounded">
        <img src={content[activeTab]} alt="" className='w-full object-contain' />
      </div>
      <div>
        <h1 className='text-[#873884] text-2xl text-center font-bold mt-2'>{vehicleName[activeTab]}</h1>
      </div>
    </div>
  );
};

export default Tabs;
