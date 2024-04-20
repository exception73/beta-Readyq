import { createBrowserRouter, RouterProvider } from "react-router-dom";
import StartInterview from "./components/StartInterview";
import Interview from "./components/Interview";
import "regenerator-runtime/runtime";
import "regenerator-runtime";
import Logo from './image.png'


import {
  ContainerScroll,
  Header,
} from "./components/ui/container-scroll-animation";
import TextToSpeech from "./components/TextToSpeech";
import { SparklesCore } from "./components/ui/sparkles";
import { LayoutGrid } from "./components/ui/layout-grid";
import Testimonial from "./components/Testimonial";




function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <StartInterview />,
      // element: (
       
      // ),
    },
    {
      path: "/interview",
      element: <Interview />,
    },
  ]);

  return (
    <>
    
       <div className="w-screen bg-black overflow-hidden flex flex-col">
           <ContainerScroll
            
            titleComponent={
              <div className="flex flex-col items-center">
                
                <p className=" text-white font-bold text-5xl">
                  Unleash the power of
                </p>
                <p className=" text-[#3B82F6] mt-2 font-bold text-9xl">AI</p>

                <p className="text-white font-bold text-9xl"> Interviewer </p>

             
                  <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
                  <div className="inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
                  <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
                  <div className="inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4 -mt-1 mb-8" />
  
                
             
                
              </div>
            }
            >
              <img 
              height={720}
              width={1400}
               className ="mx-auto z-50 rounded-2xl object-cover h-full object-left-top"
               src={Logo} alt="" />
          </ContainerScroll>
          
       </div>
        
        {/* <LayoutGrid cards = {cards} /> */}
          
        <Testimonial />


{/* 
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              Unleash the power of <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                Scroll Animations
              </span>
            </h1>
          </>
        }
      >
        <img
          src={Logo }
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </ContainerScroll>
    </div> */}
=
      {/* <RouterProvider router={appRouter} /> */}
    </>
  );
}

export default App;
