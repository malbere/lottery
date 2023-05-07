import React, { useState } from 'react';
import Card from '../components/card';
import { useNavigate } from 'react-router-dom';
import '../static/css/footer.scss';

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
    ,
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/5.png',
        alt: 'image of card'
    },
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/6.png',
        alt: 'image of card'
    },
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/7.png',
        alt: 'image of card'
    },
    {
        title: '$448,000,000',
        date: '26 April 19:00',
        description: 'Text',
        price: '$5.00',
        img: '/img/card/8.png',
        alt: 'image of card'
    }
];


function Mainpage() {
    const navigate = useNavigate();

    const handleGetStartedClick = () => {
        navigate('/register');
    };

    const [showAllLotteries, setShowAllLotteries] = useState(false);

    const handleViewAllLotteries = () => {
        setShowAllLotteries(true);
    };

    return (
        <div>

            <div class="" style={{background: 'linear-gradient(83.54deg, rgba(0, 0, 0, 0.49) 4.49%, rgba(0, 0, 0, 0.3332) 51.63%, rgba(0, 0, 0, 0) 94.46%)', height: 883,}}>
                <div class="flex">
                    <div class="w-full md:w-1/2 pl-22" style={{paddingTop: "230px", paddingLeft: '375px'}}>
                        <p class="text-white text-8xl ml-auto pl-12 mb-10 font-extrabold" >
                            Make Your Own<br></br> Luck!
                        </p>
                        <p class="text-white text-2xl ml-auto pl-12 mb-0">
                            Believe it or not... you're luckier
                        </p>
                        <p class="text-white text-2xl ml-auto pl-12 mt-0">than you think!</p>
                        <div class="pl-12 pt-20">
                            <button
                                type="button"
                                onClick={handleGetStartedClick}
                                class="my-button"
                            >
                                Join now
                            </button>
                        </div>
                    </div>
                    <div style={{ position: 'relative', width: '1200px', height: '883px'}} >
                        <img class="w-full" src="img/promopng.png" alt="" style={{ margingRight: "-100px", position: 'absolute', bottom: 0, right: 0,}}/>
                    </div>
                </div>
            </div>
            <div className="flex flex-col items-center justify-center space-y-8 mt-20 mb-20">
                <h1 className="text-4xl font-bold text-white mb-8 " style={{fontStyle: "normal", lineHeight: "140%", fontWeight: 700, fontSize: "42px"}}>HOW TO PLAY?</h1>
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
                        <p className="text-white">Pick a lottery and your lucky numbers to participate in the draw</p>
                    </div >
                    {/* Play block */}

                </div>
            </div >
            <div style={{backgroundColor: "#0B121D"}}>
                < div className="container mx-auto p-10 pt-12" >
                    <h1 className="text-4xl font-bold mb-10 text-white text-center" style={{fontStyle: "normal", fontWeight: 700, fontSize: "42px", lineHeight: "140%", marginBlockEnd: "10%", paddingTop: "3%", backgroundColor: "#0B121D"}}>PLAY LOTTERY ONLINE</h1>
                    <div className="grid grid-cols-2 gap-4 justify-center"> 
                        {data.map((item, index) => (
                            <div className="col-span-1 mb-4 pl-24" key={index}>
                                <Card data={item} />
                            </div>
                        ))}
                    </div>
                    <div>
                        {!showAllLotteries && (
                            <button onClick={handleViewAllLotteries}>View all lotteries</button>
                        )}
                        {showAllLotteries && (
                            <div className="grid grid-cols-2 gap-4 justify-center">
                                {data.map((item, index) => (
                                    <div className="col-span-1 mb-4 pl-24" key={index}>
                                        <Card data={item} />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div >
            </div >

        </div>)
}

export default Mainpage