import {useNavigate} from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { startNewInterview } from '../Redux/userSlice';

const StartInterview = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
    const handleInterviewClick = () => {
      
      navigate('/interview')
      const action = {
        "firstTime" : "true",
        "userQues" : "Hello"
      };
      dispatch(startNewInterview(action))
    }
    

  return (
    <div>

    <button onClick={handleInterviewClick} className= "bg-blue-100">
       Start Interview
    </button>

    </div>
  )
}

export default StartInterview;