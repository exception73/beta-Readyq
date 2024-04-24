import React from 'react';
import { ContainerScroll } from './ui/container-scroll-animation';
import Header from './Header';
import { BackgroundBeams } from '../components/ui/Background';
import { InfiniteMovingCardsDemo } from '../components/ui/InfiniteMovingCardsDemo';
import Footer from '../components/Footer';
import { CardHoverEffect } from './CardHoverEffect';


function Home() {
  return (
    <div className='bg-[#030917]'>
      <Header />
      <BackgroundBeams />
      <ContainerScroll
        titleComponent={
          <div className="text-center">
            <p className="text-white font-bold text-4xl md:text-5xl">
              Unleash the power of
            </p>
            <p className="font-bold text-6xl md:text-9xl bg-gradient-to-r from-pink-800 to-[#2E2EF4] bg-clip-text text-transparent">ReadyQ</p>
            <p className="text-white font-bold text-6xl md:text-9xl"> Interviewer </p>
          </div>
        }
      >
        <img src="https://res.cloudinary.com/dycitvrpg/image/upload/v1713851939/qu03sb8aywirikc2l7xi.jpg" alt="" className='w-full h-full' />
      </ContainerScroll>
      <div className='p-[5vh]'>
        <p className='text-center text-white font-semibold text-3xl md:text-2xl'>What we Flex</p>
        <p className='text-center font-bold text-6xl bg-gradient-to-r from-pink-500 to-[#0e0ebb] bg-clip-text text-transparent'>Standouts</p>
        <CardHoverEffect />
      </div>
      <div className='text-center mt-[2vh]'>
        <p className='font-bold text-6xl md:text-5xl bg-gradient-to-r from-pink-500 to-[#0e0ebb] bg-clip-text text-transparent'>Hundreds of People</p>
        <p className='text-white font-semibold text-3xl md:text-2xl'> already love us</p>

      </div>
      <div>
        <InfiniteMovingCardsDemo />
      </div>
      <div className='flex flex-col justify-center p-[100px]'>

        <div className='relative mt-[50px] sm:mt-[136px] sm:px-4 lg:mt-[200px]'>
          <div className='flex justify-center items-center bg-gradient-to-b from-pink-500 to-[#0e0ebb] px-1 py-[100px] sm:rounded-2xl lg:px-4'>
            <div className=''>
              <h2 className='text-center text-[32px] leading-[40px] tracking-[-.02em] text-white sm:text-[40px] sm:leading-[48px]'>
                We're making Interviews
                <br />
                more fun and easy
              </h2>
              <div className='flex justify-center pt-8'>
                <button className='font-semibold rounded-full px-2 py-1 text-[13px] bg-gradient-to-b from-white/[.105] to-white/[.15] backdrop-[20px] text-[#fff] sm:block opacity-100 no-underline transition-colors duration-300 hover:bg-white hover:text-[#3247F5]'>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
