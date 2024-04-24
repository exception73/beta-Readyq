import React from 'react'
import logo from "../assets/logo.png";
import { useNavigate } from 'react-router-dom';
import animation from "../assets/anim3.gif"
const SecondForm = ({ handleSubmit }) => {
  const navigate = useNavigate();

  return (
    <div className='bg-[#071028] px-[4vw] py-[2vh] h-screen   '>

      {/* navbar */}
      <div
        className='flex  items-center'
        onClick={() => { navigate('/') }} >
        <img
          src={logo}
          alt="logo"
          className='h-[6vh] cursor-pointer ' />
        <p className='text-white p-[1vh] cursor-pointer text-2xl font-bold'>ReadyQ</p>
      </div>



      <div className='flex items-center'>
        {/* text */}
        <div className='w-[45vw] mt-[18vh]'>
          {/* heading */}
          <div className='w-[90%] mb-[3vh]'>
            <p className="font-bold text-6xl  bg-gradient-to-r from-pink-800 to-[#2E2EF4] bg-clip-text text-transparent">Get ready to experience interview evolution</p>
          </div>

          
          {/* text */}
          <div>
            <input
              placeholder='Enter your Stack of Interview'
              className='text-white text-xl outline-none border-none focus:outline-none focus:border-none bg-[#071028] mb-[1vh] mt-[5vh]' />
            <hr className='w-1/2' />

          </div>
          {/* buttons */}
          <div className='mt-[4vh]'>
            <button className="mr-[2vw] relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#071028] px-[2vw] py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Beginner
              </span>
            </button>
            <button className="mr-[2vw] relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#071028] px-[2vw] py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Intermediate
              </span>
            </button>
            <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#071028] px-[2vw] py-1 text-sm font-medium text-white backdrop-blur-3xl">
                Advanced
              </span>
            </button>
          </div>
          {/* button */}
          <div>
            <button
           className='bg-white my-[6vh] p-[1vh] px-[3vw] rounded-md font-bold hover:bg-[#071028] hover:border-white hover:border-2 hover:text-white '
              onClick={handleSubmit}>
              Almost There
            </button>

          </div>
        </div>

        {/* animation */}
        <div className='w-[45vw] h-[80vh] px-[1vw]'>
          <img src={animation} className='w-full h-full' alt="animation" />
        </div>

      </div>
    </div>
  )
}

export default SecondForm