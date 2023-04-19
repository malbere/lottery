import React from 'react';

const Card = ({ title, imageUrl, description }) => {
    return (
        <div className="bg-opacity-5 backdrop-filter backdrop-blur-lg rounded-lg w-498 h-229 bg-gray-800 flex items-center">
            <img src="/img/card/1.png" alt="Card Image" className="h-full rounded-l-lg" />
            <div className="flex flex-col justify-center ml-6">
                <p className="text-3xl text-white font-bold">$1000</p>
                <p className="text-sm text-gray-400">Created on 19 Apr 2023</p>
                <p className="text-sm text-gray-400">$10 per play</p>
                <p className="text-sm text-gray-400">About this card</p>
                <button className="mt-4 py-2 px-4 rounded-md bg-blue-500 hover:bg-blue-600 text-white text-sm">Play Now</button>
            </div>
        </div>

    );
};

export default Card;
