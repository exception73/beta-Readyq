import { createBrowserRouter, RouterProvider } from "react-router-dom"
import StartInterview from "./components/StartInterview"
import Interview from "./components/Interview"
import 'regenerator-runtime/runtime'
import 'regenerator-runtime'
function App() {


  const appRouter = createBrowserRouter([
    {
      path : '/',
      element : <StartInterview />,
    },
    {
      path : '/interview',
      element : <Interview />
    }
  ])

  return (
    <>
   
      <RouterProvider router = {appRouter} />
    </>
  )
}

export default App
