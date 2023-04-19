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

            <div className="flex ">
                <div className="w-1/2 pl-4">
                    <p className="text-white text-8xl ml-auto pl-12 mb-10 font-extrabold">Make Your Own Luck!</p>
                    <p className="text-white text-2xl ml-auto pl-12 mb-0">Believe it or not... you're luckier</p> <br /> <p className="text-white text-2xl ml-auto pl-12 mt-0">than you think!</p>
                    <div className="pl-12 pt-20">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="float-right" src="img/promo.png" alt="" />
                </div>
            </div>
            <div className="flex flex-col items-center justify-center h-screen space-y-8">
                <h1 className="text-4xl font-bold text-white mb-8 ">HOW TO PLAY?</h1>
                <div className="flex justify-center space-x-8">
                    <div className="w-80 p-4 flex items-center bg-opacity-75 bg-zinc-900 rounded-lg">

                        <p className="text-white font-bold text-8xl mr-4 pb-2">1</p>
                        <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
                    </div >
                    <div className="w-80 p-4 flex items-center bg-opacity-75 bg-zinc-900 rounded-lg">
                        <p className="text-white font-bold text-8xl mr-4 pb-2">2</p>
                        <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
                    </div>
                    <div className="w-80 p-4 flex items-center bg-opacity-75 bg-zinc-900 rounded-lg">
                        <p className="text-white font-bold text-8xl mr-4 pb-2">3</p>
                    </div >
                    {/* Play block */}
                
                </div>
            </div >
            < div className="container mx-auto p-4" >
                        <h1 className="text-4xl font-bold mb-4 text-white text-center">PLAY LOTTERY ONLINE</h1>
                        <div className="grid grid-cols-2 gap-4 justify-center">
                            {data.map((item, index) => (
                                <div className="col-span-1 mb-4" key={index}>
                                    <Card data={item} />
                                </div>
                            ))}
                        </div>
                    </div >
        </div>    )
}

export default Mainpage