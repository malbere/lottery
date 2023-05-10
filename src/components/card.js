import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../static/css/footer.scss";
import Clock from "../static/img/card/icons/clock.svg";
import Tag from "../static/img/card/icons/tag.svg";
import Info from "../static/img/card/icons/info.svg";

const CardSkeleton = () => {
    return (
        <div
            role="status"
            className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center"
        >
            <div className="flex items-center justify-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                    className="w-12 h-12 text-gray-200"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                </svg>
            </div>
            <div className="w-full">
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[440px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[460px] mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
            </div>
            <span className="sr-only">Loading...</span>
        </div>
    );
};

const Card = ({ data }) => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        setLoading(false);
    }, []);

    const handlePlayClick = () => {
        navigate('/play');
    }
    
    return (
        // <div className="card" onClick={() => handleClick(data.id)}>
        <div className="card">
            {loading ? (
                <CardSkeleton />
            ) : (
                <>
                    <div className="flex flex-col items-center md:flex-row md:max-w-xl dark:bg-gray-800  rounded-lg shadow" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', backdropFilter: 'blur(8.5px)', height: "229px" }}>
                        <img
                            className="object-contain md:h-auto md:w-48 md:rounded-l-lg md:rounded-t-none rounded-t-lg"
                            src={data.img}
                            alt={data.alt}
                            style={{ backgroundColor: "rgba(11, 18, 29, 0.7)", width: "229px", height: "250px", borderRadius: '13px' }}
                        />

                        <div className="flex flex-col justify-between p-4 md:flex-grow">
                            <h5 style={{ color: "white", fontStyle: "normal", fontWeight: 600, fontSize: "20px", lineHeight: "110%", textAlign: "center" }}>
                                {data.title}
                            </h5>
                            <p className="mb-3 font-normal text-gray-700">
                                <br></br>
                                <img src={Clock} alt="Clock" style={{ display: 'inline-block', marginRight: '6px' }} />
                                {data.date}
                                <br></br>
                                <img src={Tag} alt="Tag" style={{ display: 'inline-block', marginRight: '6px' }} />
                                {data.price}
                                <br></br>
                                <img src={Info} alt="Info" style={{ display: 'inline-block', marginRight: '6px', }} />
                                <span>About</span>
                            </p>



                            <div>
                                <button onClick={handlePlayClick} className="my-button2" style={{ margingTop: "59%", textAlign: "center" }}>
                                    Play Now
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Card;
