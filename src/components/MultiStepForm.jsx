import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { startNewInterview } from '../Redux/userSlice';
import { useDispatch } from 'react-redux';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    navigate('/startInterview')

  
      const action = {
        "firstTime" : "true",
        "userQues" : ""
      };
      dispatch(startNewInterview(action))
  
    console.log('Form submitted:', formData);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (

          <div>
             <FirstForm nextStep={nextStep}/>
          {/* <button onClick={nextStep}>Next</button> */}
          </div>
          
        );
      case 2:
        return (
              <div>
                <SecondForm handleSubmit={handleSubmit} />
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
