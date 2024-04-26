import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { askNextQuestion, startNewInterview } from '../Redux/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const stepOneValidation = (name) => {
  const isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);
  if (!isNameValid) return "Enter you valid name";
  return null;
}


function TextToSpeech(str) {
  const speakChunks = async () => {
    const utterance = new SpeechSynthesisUtterance(str);
    const voices = speechSynthesis.getVoices();
    utterance.voice = voices[2]; // Set male voice

    await new Promise((resolve) => {
      utterance.onend = resolve;
      window.speechSynthesis.speak(utterance);
    });
  };

  speakChunks();



};
const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);
  const [name, setName] = useState("");
  const [interviewTime, setInterviewTime] = useState(0);
  const [techStack, setTechStack] = useState("");
  const [err, setErr] = useState("");
  const [yourLevel, setYourLevel] = useState(0);
  const [ended , setEnded ] = useState(true);

  const sendToBackendRef = useRef({
    firstTime: "false",
    userQues: "",
    creationTime: userData?.creationTime,
    assistant_id: userData?.assistant_id,
    thread_id: userData?.thread_id,
    interviewTime: 0,
    message1 : null,
    completed: userData?.completed
  });

  useEffect(() => {
    sendToBackendRef.current = {
      firstTime: "false",
      userQues: "",
      creationTime: userData?.creationTime,
      assistant_id: userData?.assistant_id,
      thread_id: userData?.thread_id,
      interviewTime: 0,
      completed : userData?.completed
    };
  }, [userData, interviewTime]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const action = {
      "firstTime": "true",
      name,
      interviewTime,
      techStack,
      yourLevel,
      "userQues": ""
    };
    await dispatch(startNewInterview(action))
    navigate('/startInterview')
    setTimeout(() => {
      window.alert(`${interviewTime} has finished. Complete your answer fast.`);
    }, interviewTime * 60 * 1000);

    setTimeout(async () => {
      if (sendToBackendRef.current?.completed == false  &&  ended) {
        SpeechRecognition.stopListening();
        TextToSpeech("Thankyou for interweing with us we will get back to you with the report")
        setEnded(false);
        dispatch(askNextQuestion(sendToBackendRef.current));
        setTimeout(() => {
          navigate('/report');
        }, 5000)
      }
    }, (interviewTime + 0.4) * 60 * 1000);
  };

  const nextStep = (e) => {
    if (step == 1) {
      const namevalid = stepOneValidation(name);
      if (namevalid) {
        setErr(namevalid);
        return;
      }
      if (interviewTime == 0) {
        setErr("Select your Interview length.")
        return;
      }
    }
    setErr('')
    if (step == 2) {
      if (yourLevel == 0) {
        setErr('Select your Level')
        return;
      }
    }
    if (step == 2) {
      handleSubmit(e);
    }
    setStep(step + 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <FirstForm nextStep={nextStep} setName={setName} setInterviewTime={setInterviewTime} err={err} />
          </div>
        );
      case 2:
        return (
          <div>
            <SecondForm nextStep={nextStep} setTechStack={setTechStack} setYourLevel={setYourLevel} err={err} />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderStep()}
    </div>
  );
};

export default MultiStepForm;
