import React from 'react'
import "regenerator-runtime";
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import appStore from './Redux/appStore.js';
// import regeneratorRuntime from "regenerator-runtime";

import {Provider} from 'react-redux';
import { SparklesCore } from './components/ui/sparkles.tsx';

ReactDOM.createRoot(document.getElementById('root')).render(

  <Provider store = {appStore}>
    {/* <React.StrictMode> */}
        <>
        {/* <div className="w-screen absolute inset-0 h-[2000px] ">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1}
            particleDensity={100}
            className="w-full h-full"
            particleColor="#FFFFFF"
          />
         </div> */}
        <App />
        </>
    {/* </React.StrictMode> */}
  </Provider>
  
)
