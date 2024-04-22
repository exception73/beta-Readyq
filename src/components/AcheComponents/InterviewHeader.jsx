import React from 'react'

const InterviewHeader = () => {
  return (

    <header className='sticky top-0 z-50'> 
    
  
    <div className='top-0 z-40 flex-col px-4 lg:px-4 backdrop-blur-sm border-b-1 border-gray-700'>
    <nav className="mx-auto flex h-[72px] max-w-[1216px] flex-1 items-center justify-between">
     <div className='flex justify-start items-center'>
        <span>
          <img src="./src/assets/logo.png" alt="" className='w-[50px] h-[50px]'/>
        </span>
        <p className='text-white text-xl ml-2'>ReadyQ</p>
      </div> 
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-white text-sm gap-10 font-medium lg:flex">
            <a href='/' className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>Home</a>
            <a  href="/about" className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>About</a>
            <a href="/interview" className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>Interview</a>
            <a href="/pricing" className='px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]'>Pricing</a>
        </div>
        <div className='flex justify-end'>
         
        </div>
    </nav>
    </div>
    </header>



  )
}

export default InterviewHeader