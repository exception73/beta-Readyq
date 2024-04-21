import React from 'react'

const InterviewHeader = () => {
  return (
     <div>
        {/* this is navbar */}
     <div className="w-screen flex py-4 px-2 items-center md:px-12  drop-shadow-sm shadow-md shadow-gray-100/20  justify-between">
     {/* navbar div */}
     {/* image (readyq)
         interview name  */}

     <div className="flex items-center">
       <img
         src="https://res.cloudinary.com/dycitvrpg/image/upload/v1713721463/zpgquxmaicmkztzxpj3f.png"
         alt="logo"
         className=" h-10"
       />
       <p className="text-white text-2xl font-bold pl-2">
         Ready<span className="text-[#3b82f6]">Q</span>
       </p>
     </div>

     <div>
       {/* dummy data */}
       <p className="text-white text-lg font-semibold">
         FullStack Interview
       </p>
     </div>
   </div>
     </div>


  )
}

export default InterviewHeader