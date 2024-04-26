import { useEffect, useRef, useState } from "react";
import {  askNextQuestion, startNewInterview } from "../Redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import MultiStepLoader from "./MultiStepLoader";
import InterviewWindow from "./InterviewWindow";
import SpeechRecognition from "react-speech-recognition";
import TextSpeech from "../utils/TextSpeech";
import { stepOneValidation } from "../utils/Validations";



const MultiStepForm = () => {

  
  const [whatToShow, setWhatToShow] = useState(1);
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [interviewTime, setInterviewTime] = useState(0);
  const [techStack, setTechStack] = useState("");
  const [err, setErr] = useState("");
  const [yourLevel, setYourLevel] = useState(0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const userMessage = useSelector(store => store?.user?.message); 
  const userData = useSelector((store) => store.user)

  const userRef = useRef(null);
  let flag = true;

  useEffect(() => {
    console.log(userData);
    if(flag == true && userData) {
      userRef.current = userData;
      flag = false;
    }
  },[userData])


  const handleSubmit = (e) => {
    console.log('helo')
    e.preventDefault();
    const action = {
      firstTime: "true",
      name,
      interviewTime,
      techStack,
      yourLevel,
      userQues: "",
    };
    dispatch(startNewInterview(action));

    if(userMessage == "") {
      setWhatToShow(3)
   

    } else {
      console.log(userRef.current)
      setWhatToShow(4);
    } 


    setTimeout(() => {
   
      window.alert(
        `${interviewTime} time has finished. Complete your answer fast.`
      );

    }, interviewTime * 60 * 1000);

    setTimeout(() => {
   
      const sendtobackend = {
        firstTime: "false",
        userQues: "",
        creationTime: userRef.current?.creationTime,
        assistant_id: userRef.current?.assistant_id,
        thread_id: userRef.current?.thread_id,
        interviewTime: 0,
      };
  
      SpeechRecognition.stopListening();
      dispatch(askNextQuestion(sendtobackend));
      TextSpeech("Thankyou for interweing with us we will get back to you with the report")
  
      setTimeout(() => {
        navigate('/reportloader');
      }, 2000)
    }, (interviewTime + 0.1) * 60 * 1000);

  };

  const nextStep = (e) => {
    if (step === 1) {
      const namevalid = stepOneValidation(name);
      if (namevalid) {
        setErr(namevalid);
        return;
      }
      if (interviewTime === 0) {
        setErr("Select your Interview length.");
        return;
      }
    }
    setErr("");
    if (step === 2) {
      if (yourLevel === 0) {
        setErr("Select your Level");
        return;
      }
    }
    if (step === 2) {
      handleSubmit(e);
    }
   setWhatToShow(whatToShow+1); 
    setStep(step + 1);
   
  };


  switch(whatToShow){
    case 1 :
      return (
        <FirstForm
              nextStep={nextStep}
              setName={setName}
              setInterviewTime={setInterviewTime}
              err={err}
            />
      )
    case 2 :
      return (
        <SecondForm
        nextStep={nextStep}
        setTechStack={setTechStack}
        setYourLevel={setYourLevel}
        err={err}
      />
      )

    case 3 : 
      return <MultiStepLoader />
    
    case 4 : 
      return <InterviewWindow />
  }
     
  
};

export default MultiStepForm;
