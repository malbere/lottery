import React from "react";
import { useNavigate } from 'react-router-dom';
import '../static/css/footer.scss';

const Card = ({ data }) => {

    const navigate = useNavigate();

    const handlePlayClick = () => {
        navigate('/play');
    }

    return (
        <div className="flex flex-col items-center md:flex-row md:max-w-xl dark:bg-gray-800  rounded-lg shadow"  style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px', backdropFilter:'blur(8.5px)', height:"229px" }}>
            <img
                className="object-contain md:h-auto md:w-48 md:rounded-l-lg md:rounded-t-none rounded-t-lg"
                src={data.img}
                alt={data.alt}
                style={{ backgroundColor: "rgba(11, 18, 29, 0.7)", width: "229px", height: "250px", borderRadius: '13px' }}
            />

            <div className="flex flex-col justify-between p-4 md:flex-grow">
                <h5 style={{color: "white", fontStyle: "normal", fontWeight: 600, fontSize: "20px", lineHeight: "110%", textAlign: "center"}}>
                    {data.title}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    <br></br>
                    {data.date}
                    <br></br>
                    {data.price}
                    <br></br>
                    <p>About</p>
                </p>

                <div>
                    <button onClick={handlePlayClick} className="my-button2" style={{margingTop: "59%", textAlign: "center"}}>
                        Play Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
