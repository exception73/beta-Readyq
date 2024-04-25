import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startNewInterview } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';

const stepOneValidation = (name) => {

  const isNameValid = /^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{0,}$/.test(name);

  if(!isNameValid) return "Enter you valid name"
  return null
}

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch(); 

  const [name, setName] = useState("");

  // 0 means nothing , 1 menas 10 min , 2 mens 20 min
  const [interviewTime, setInterviewTime] = useState(0);
  const [techStack, setTechStack] = useState("");
  const [err, setErr] = useState("");

  //0 means nothin, 1 menas noob, 2 means intemediate, 3 mes pro
  const [yourLevel, setYourLevel] = useState(0);
  

  const handleSubmit = (e) => {
    console.log(name, interviewTime, techStack, yourLevel)
    e.preventDefault();
    // Handle form submission logic
    navigate('/startInterview')
      const action = {
        "firstTime" : "true",
        "userQues" : ""
      };
      dispatch(startNewInterview(action))
  
   
  };

  const nextStep = () => {
    if(step == 1){
      const namevalid = stepOneValidation(name);
      // console.log(namevalid, interviewTime);
      if(namevalid){
        setErr(namevalid);
        return;
      }
      if(interviewTime == 0){
        setErr("Select your Interview length.")
        return;
      }
    }
    setErr('')
    if(step == 2){


      // logic ki techstack sahi h ya nahi

    


      if(yourLevel == 0){
        setErr('Select your Level')
        return;
      }
      
    }
    setStep(step + 1);
    if(step == 3){
      handleSubmit();
    }
  };


  const renderStep = () => {
    switch (step) {
      case 1:
        return (

          <div>
             <FirstForm nextStep={nextStep} setName={setName} setInterviewTime = {setInterviewTime} err = {err}/>
          {/* <button onClick={nextStep}>Next</button> */}
          </div>
          
        );
      case 2:
        return (
              <div>
                <SecondForm nextStep={nextStep} setTechStack={setTechStack} setYourLevel={setYourLevel} err = {err}/>
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
