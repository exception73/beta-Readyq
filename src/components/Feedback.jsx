import React, { useState } from "react";
import { SparklesCore } from "./ui/sparkles";

function Feedback() {
    const [Name, setName] = useState("");
    const [Feedback, setFeedback] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (


      <div className="h-[50rem] w-full dark:bg-black bg-[#1028]  dark:bg-grid-white bg-grid-white/10 relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-[#030917] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className=" font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
       
      {/* <Feedback /> */}
      <div className="flex py-[15vh] px-[18vw] items-center justify-between relative">
            {/* left */}
         
            <div className="w-[30vw]">
                {/* heading */}
                <div className="">
                    <p className="text-white/80 text-6xl font-extrabold">Feedback</p>
                </div>
                {/* text */}
                <div className="mt-[2vh]">
                    <p className="text-gray-400 ">We Welcome all of your's feedback and criticism . It really keeps us motivated to be better at each iterations.So you can contribute in our growth by your valuable time and suggestions.</p>
                </div>
                {/* hashtag */}
                <div>
                    <p className=" mt-[15vh] font-extrabold text-3xl bg-gradient-to-r from-pink-800 to-[#2E2EF4] bg-clip-text text-transparent">#GrowWithReadyQ</p>
                </div>
            </div>
            {/* right */}
            <div>
                {/* name */}
                <div className=" bg-transparent">
                    <input
                        placeholder="Your Name"
                        className=" bg-[#1f2430b9] p-[1vmin] m-[0.8vmin] rounded-sm w-[25vw] border border-gray-500 text-white/80" />
                </div>
                {/* feedback */}
                <div>
                    <textarea
                        placeholder="Your Feedback"
                        className=" bg-[#1f2430ab] p-[1vmin] m-[1vmin] rounded-sm w-[25vw] h-[25vh] border border-gray-500  text-white/80" >

                    </textarea>
                </div>
                {/* submit button */}
                <div className="flex items-center justify-center">
                    <button
                        onClick={handleSubmit}
                        className="bg-[#322def] text-white mt-[4vh] m-[1vmin] px-[3vw] w-[25vw] rounded-full py-[0.6vh] ">Submit</button>
                </div>
            </div>
            
        </div>
    
      </p>
    </div>
        
    )
};

export default Feedback;
