import React from "react";

const Card = ({ data }) => {
    return (
        <div className="flex flex-col items-center md:flex-row md:max-w-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow">
            <img
                className="object-cover w-full h-96 md:h-auto md:w-48 md:rounded-l-lg md:rounded-t-none rounded-t-lg"
                src={data.img}
                alt={data.alt}
                style={{ backgroundColor: "rgba(11, 18, 29, 0.7)", width: "229px", height: "210px" }}
            />

            <div className="flex flex-col justify-between p-4 leading-normal md:flex-grow">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {data.description}
                    {data.date}
                    {data.price}
                </p>
                <div className="flex justify-between items-center md:items-end">
                    <p className="text-gray-500 text-sm">{data.date}</p>
                    <p className="text-gray-500 text-sm">{data.price}</p>
                </div>
                <div className="flex justify-between items-center mt-4 md:mt-0">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                        About
                    </button>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-md">
                        Play Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
