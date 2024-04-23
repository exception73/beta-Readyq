import React from 'react'
import { useSelector } from 'react-redux'

const PasscodeModal = ({x}) => {

    const userPasscode = useSelector(store => store?.user?.passcode);
    const handleClick = () => {
        x(false);
    } 
  return (  



    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-2 absolute w-[40vw] top-[35vh] left-[75vh] md:p-6 shadow-input bg-white dark:bg-black">
    <div className="flex justify-between items-center">
      <div className="max-w-md w-full flex flex-col items-center mx-auto rounded-none md:rounded-2xl p-2 md:p-8 shadow-input bg-white dark:bg-black">
       
        <p className="text-lg text-gray-800 font-bold my-[2vh]  dark:text-white">
          Snap a screenshot or jot down these codes for password recovery.
        </p>

        <p className="text-xl font-bold text-blue-600 dark:text-blue-300">
          {userPasscode.join('-')}
        </p>

        <button
          onClick={handleClick}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full mt-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Ok
        </button>

      </div>
    </div>
  </div>
  
    
        
        )
  
}

export default PasscodeModal