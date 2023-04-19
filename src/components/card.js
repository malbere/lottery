import React from "react";

const data = [
    {
      title: 'Syper loto',
      date: 'Created on: 19th April 2023',
      description: 'Text',
      price : 'Price: $9.99'
    }
  ];


const Card = () => {
  return (
    <div className="flex flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 ">
      <img
        className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
        src="/img/card/1.png"
        alt=""
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {data[0].title}
        </h5>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {data[0].description}
        </p>
        <div className="flex justify-between items-center">
          <p className="text-gray-500 text-sm">{data[0].date}</p>
          <p className="text-gray-500 text-sm">{data[0].price}</p>
        </div>
        <div className="flex justify-between items-center">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            About
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Play Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
