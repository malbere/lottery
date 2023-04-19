import React from 'react'
function Mainpage() {
    return (
        //Promo block
        

        // HOW TO PLAY? blcok
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
    )
}

export default Mainpage