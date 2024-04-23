  import React, { useState, useEffect, useRef } from 'react';
  import { MovingBorderBtn } from './ui/Moving-border';
  import SignUp from './SignUp.jsx';

import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { startNewInterview } from '../Redux/userSlice.js';
import PasscodeModal from './PasscodeModal.jsx';

  function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const token = localStorage.getItem('token');
    const userToken = useSelector(store => store?.user?.userToken);

    const handleClick = () => {
      navigate('/interview')
    }

    const [modalOpen, setModalOpen] = useState(false);
    const [PasscodeModalOpen, setPasscodeModalOpen] = useState(false);
  
    const modalRef = useRef(null);
    
    useEffect(() => {

      console.log("hello im begin called")
      if(modalOpen == true ){
        console.log(userToken)
       if(userToken) {setPasscodeModalOpen(true); console.log('bahdiyaan')}
      }

    },[userToken])


    

    useEffect(() => {
      // Function to handle clicks outside of the modal
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) {
          // If the click is outside of the modal, close it
          setModalOpen(false);
        }
      };

      // Add event listener to detect clicks on the document body
      document.addEventListener('mousedown', handleClickOutside);

      // Cleanup function to remove event listener
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

    const handleSignupButton = () => {
      setModalOpen(!modalOpen);
    };  

    

    return (
      <header className="sticky top-0 z-50">
        <div className="cursor-pointer bg-gradient-to-r from-pink-800 to-[#2E2EF4] flex text-center justify-center gap-5 p-2 font-medium  text-white">
          Try ReadyQ free for 30 days 🚀 |{' '}
          <span className="font-semibold rounded-full px-2 py-1 text-[13px] bg-gradient-to-b from-white/[.105] to-white/[.15] backdrop-[20px] text-[#fff] sm:block opacity-100 no-underline">
            <a href="Try for free">Try for free</a>
          </span>
        </div>
        <div className="top-0 z-40 flex-col px-4 lg:px-4 backdrop-blur-sm border-b-1 border-gray-700">
          <nav className="mx-auto flex h-[72px] max-w-[1216px] flex-1 items-center justify-between">
            <div className="flex justify-start">
              <span>
                <img src="./src/assets/logo.png" alt="" className="w-[50px] h-[50px]" />
              </span>
            </div>
            <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl text-white text-sm gap-10 font-medium lg:flex">
              <a href="/" className="px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]">
                Home
              </a>
              <a href="/about" className="px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]">
                About
              </a>
              <p onClick={handleClick} className="px-4 cursor-pointer py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]">
                Interview
              </p>
              {/* <StartInterview /> */}
              <a href="/pricing" className="px-4 py-1 transition-colors duration-300 hover:bg-white rounded-full hover:text-[#3247F5]">
                Pricing
              </a>
            </div>
           {  token ? <> </>  : <div className="flex justify-end">
              <MovingBorderBtn onClick={handleSignupButton} borderRadius="1.5rem" className="p-2 text-[13px]">
                Sign Up
              </MovingBorderBtn>
            </div>}
          </nav>
        </div>

        {/* Modal */}
        {modalOpen && (
          <div ref={modalRef} className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <SignUp setModalOpen = {setModalOpen} />
          </div>
        )}

        {
          PasscodeModalOpen ? <PasscodeModal x={setPasscodeModalOpen} /> : <></>
        }
      </header>
    );
  }

  export default Header;
