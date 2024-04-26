import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "regenerator-runtime/runtime";
import "regenerator-runtime";
import InterviewWindow from "./components/InterviewWindow";
import Home from './components/Home'
import MultiStepForm from "./components/MultiStepForm";
import EvaluationReport from "./components/Evaluation report";
import MultiStepLoaderDemo from "./components/MultiStepLoader";
import InterviewEndLoader from "./components/InterviewEndLoader";



function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element : <Home />,
    
    },
    {
      path: "/interview",
      element: <MultiStepForm />,
     
    },{
      path : "/startInterview",
      element : <InterviewWindow />
    },{
      path : "/report",
      element : <EvaluationReport />
    },{
      path : "/loader",
      element : <MultiStepLoaderDemo />
    },{
      path : '/reportloader',
      element : <InterviewEndLoader />
    }
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
}

export default App;
