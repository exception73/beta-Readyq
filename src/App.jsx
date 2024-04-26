import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "regenerator-runtime/runtime";
import "regenerator-runtime";



import InterviewWindow from "./components/InterviewWindow";
import Home from './components/Home'
import MultiStepForm from "./components/MultiStepForm";
import EvaluationReport from "./components/Evaluation report";
import MultiStepLoaderDemo from "./components/MultiStepLoader";



function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Home />,
      // element: (
       
      // ),
    },
    {
      path: "/interview",
      element: <MultiStepForm />,
      // element : <Interview />
    },{
      path : "/startInterview",
      element : <InterviewWindow />
    },{
      path : "/report",
      element : <EvaluationReport />
    },{
      path : "/loader",
      element : <MultiStepLoaderDemo />
    }
  ]);

  return (
    <>
{/*     
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
          
       </div> */}
        
        {/* <LayoutGrid cards = {cards} /> */}
          
        {/* <Testimonial /> */}



      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
