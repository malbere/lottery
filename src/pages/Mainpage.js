import React from 'react'
import Card from '../components/card';

const data = [
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/1.png',
        alt: 'image of card'
    },
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/3.png',
        alt: 'image of card'
    },
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/2.png',
        alt: 'image of card'
    },
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/4.png',
        alt: 'image of card'
    },
];

function Mainpage() {
    return (
        <div>
            {/* HOW TO PLAY? blcok */}
            <div className="flex flex-col items-center justify-center h-screen space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8 ">HOW TO PLAY?</h1>
                <div className="flex justify-center space-x-8">
                    <div className="w-80 p-4 flex items-center bg-opacity-75 bg-zinc-900 rounded-lg">
                        <p className="text-white font-bold text-8xl mr-4">1</p>
                        <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
                    </div>
                    <div className="w-80 p-4 flex items-center bg-opacity-75 bg-zinc-900 rounded-lg">
                        <p className="text-white font-bold text-8xl mr-4">2</p>
                        <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
                    </div>
                    <div className="w-80 p-4 flex items-center bg-opacity-75 bg-zinc-900 rounded-lg">
                        <p className="text-white font-bold text-8xl mr-4">3</p>
                        <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
                    </div>
                </div>
            </div>
            {/* Play block */}
            <div className="container mx-auto p-4">
                <h1 className="text-4xl font-bold mb-4 text-white text-center">PLAY LOTTERY ONLINE</h1>
                <div className="grid grid-cols-2 gap-4 justify-center">
                    {data.map((item, index) => (
                        <div className="col-span-1 mb-4" key={index}>
                            <Card data={item} />
                        </div>
                    ))}
                </div>
            </div>

        </div>
    )
}

export default Mainpage