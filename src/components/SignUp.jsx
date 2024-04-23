
import React, { useEffect, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "../utils/cn";
import { useDispatch, useSelector } from "react-redux";
import { loginUserAction, registerUserAction } from "../Redux/userSlice";





export default function SignupFormDemo({setModalOpen}) {

  const dispatch = useDispatch();

  const [signIn, setSignIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');

  let user = useSelector(store => store?.user);

  useEffect(() => {
    let userToken = user?.userToken;
    if(userToken){localStorage.setItem('token', userToken);setModalOpen(false);}
  },[user]);



  const handleSubmit = async(e) => {
    e.preventDefault();

   
    if(signIn){
      //api call for signIn with userName, and password

       await dispatch(loginUserAction({username, password}))
      console.log(user);
     
      // console.log(userToken)
      // if(userToken){ localStorage.setItem('token', userToken);setModalOpen(false);}
    }else{
      //api clal for signUp 
      await dispatch(registerUserAction({username, password}));
     
    }
  };
  return (
    <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input  bg-white dark:bg-black">
    <div className="flex justify-between items-center">
    <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to ReadyQ
      </h2>
      <button onClick = {() => {setModalOpen(false)}} className="font-bold text-black">X</button>
    </div>
      {
        signIn ? <></> : <><p className="text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
        Unlock Your Future with a Single Signup
        </p></>
      }
      <form className="my-8" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
         
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Username</Label>
          <Input onChange={(e) => setUsername(e.target.value)} id="email" placeholder="exception73" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="password">Password</Label>
          <Input onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" type="password" />
        </LabelInputContainer>

        {
          signIn ? <> </> :
        
        <LabelInputContainer className="mb-8">
          <Label   htmlFor="twitterpassword">Confirm Password</Label>
          <Input
            onChange={(e) => setConfirmPassword(e.target.value)}
            id="twitterpassword"
            placeholder="••••••••"
            type="text"
          />
        </LabelInputContainer>
}
        <button
          
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
        {signIn ? 'Sign In' : "Sign Up"}&rarr;
          <BottomGradient />
        </button>


        <div className="flex justify-end">
        <p  onClick={() => setSignIn(!signIn)} className="text-right cursor-pointer w-fit   text-black pt-[2vh]">{!signIn ? 'Sign In' : "Sign Up"}</p>
        </div>

       

      </form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
 className,
 children
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};


