import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
// import useClipboard from "react-use-clipboard";
import { useState, useEffect } from "react";
import TextToSpeech from "./TextToSpeech";
import "./Interview.css"
import { useDispatch, useSelector } from 'react-redux';
import { askNextQuestion } from '../Redux/userSlice';

const Interview = () => {
    const [textToCopy, setTextToCopy] = useState();
    const [dataFromBackend, setDataFromBackend] = useState("this is dummy data from backend");

    const dispatch = useDispatch();
    const userData = useSelector(store => store.user);
   
    const [listeningTimeout, setListeningTimeout] = useState(null);


    let { transcript,  browserSupportsSpeechRecognition, stopListening, resetTranscript} = useSpeechRecognition();
    // console.log(transcript);

    const startListening = () => {
        
        SpeechRecognition.startListening({ continuous: true, language: 'en-GB' });
    };

    useEffect(() => {
        if (transcript) {
            clearTimeout(listeningTimeout);
            // Set a new timeout
            setListeningTimeout(setTimeout(() => {
                SpeechRecognition.stopListening();
            }, 6000)); 
        }
    }, [transcript]);

    useEffect(() => {
        if (!browserSupportsSpeechRecognition) {
            return null;
        }
        // Cleanup on unmount
        return () => clearTimeout(listeningTimeout);
    }, []);

    const handleSendData = () => {
        stopListening;
        console.log(transcript);
        const sendtobackend = {
            "firstTime" : "false",
            "userQues" : transcript,
            "creationTime" : userData?.creationTime,
            "assistant_id":  userData?.assistant_id,
            "thread_id" : userData?.thread_id,
        }
       
        SpeechRecognition.stopListening();
        resetTranscript();
    setTextToCopy("");
        
        
        dispatch(askNextQuestion(sendtobackend));
    }

  return (
    <>
       
    <div className="container">

      <div style={{"border" : "2px solid black", "padding" : "40px"}}>

      
        <h2>Speech to Text Converter</h2>
        <br />

        <div  className="main-content" onClick={() => setTextToCopy(transcript)}>
            {transcript}
        </div>

        <div className="btn-style">
        
            <button onClick={startListening}>Start Listening</button>
            <button onClick={handleSendData}> Send Data</button>
      </div>

      </div>

      <div>

      </div>

      <div style={{"border" : "2px solid black" , "padding" : "40px"}}>

        <h2>Text to Speech Converter</h2>
        <br />
        

       <div className=' bg-white border border-black my-2 '>
       <p className='text-black '>
            {userData?.message}
        </p>

        <br />
       </div>
        
        <TextToSpeech />
      </div>
     

        
        

    </div>

</>
  )
}

export default Interview