import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
// import useClipboard from "react-use-clipboard";
import { useState, useEffect, useRef } from "react";
import TextToSpeech from "./TextToSpeech";
import "./Interview.css";
import { useDispatch, useSelector } from "react-redux";
import { askNextQuestion } from "../Redux/userSlice";

const Interview = () => {
  const [textToCopy, setTextToCopy] = useState();
  const [dataFromBackend, setDataFromBackend] = useState(
    "this is dummy data from backend"
  );

  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

  //   -------------------------------------------------------

  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    // Function to handle camera access
    async function getCameraStream() {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({
          video: true,
        });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    }

    // Check if browser supports getUserMedia
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      getCameraStream();
    } else {
      console.error("getUserMedia is not supported in this browser");
    }
  }, []);

  useEffect(() => {
    // Function to draw video frames on the canvas
    function drawToCanvas() {
      const video = videoRef.current;
      const canvas = canvasRef.current;
      const context = canvas.getContext("2d");

      if (video && canvas) {
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        context.drawImage(video, 0, 0, canvas.width, canvas.height);
        requestAnimationFrame(drawToCanvas);
      }
    }

    // Start drawing video frames to the canvas
    drawToCanvas();
  }, []);

  //-------------------------------------------------

  const [listeningTimeout, setListeningTimeout] = useState(null);

  let {
    transcript,
    browserSupportsSpeechRecognition,
    stopListening,
    resetTranscript,
  } = useSpeechRecognition();
  // console.log(transcript);

  const startListening = () => {
    SpeechRecognition.startListening({ continuous: true, language: "en-GB" });
  };

  useEffect(() => {
    if (transcript) {
      clearTimeout(listeningTimeout);
      // Set a new timeout
      setListeningTimeout(
        setTimeout(() => {
          SpeechRecognition.stopListening();
        }, 6000)
      );
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
      firstTime: "false",
      userQues: transcript,
      creationTime: userData?.creationTime,
      assistant_id: userData?.assistant_id,
      thread_id: userData?.thread_id,
    };

    SpeechRecognition.stopListening();
    resetTranscript();
    setTextToCopy("");

    dispatch(askNextQuestion(sendtobackend));
  };

  return (
    <>
      <h1 style={{ "font-size": "40px" }}>Ready for the Interview.</h1>

      <div className="flex flex-row items-center justify-center">

        <div
        className="border border-2 border-black p-2"
          
        >
          <div>
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ display: "none" }}
            />
            <canvas
              ref={canvasRef}
              
            />
          </div>
        </div>


        

        <div className="container  ">
          <div style={{ border: "2px solid black  ", padding: "40px" }}>
            <h2>Speech to Text Converter</h2>
            <br />

            <div
              className="main-content"
              onClick={() => setTextToCopy(transcript)}
            >
              {transcript}
            </div>

            <div className="btn-style h-auto">
              <button onClick={startListening}>Start Listening</button>
              <button onClick={handleSendData}> Send Data</button>
            </div>
          </div>

    

          <div style={{ border: "2px solid black", padding: "40px" }}>
            <h2>Text to Speech Converter</h2>
            <br />

            <div className=" bg-white border border-black my-2 ">
              <p className="text-black ">{userData?.message}</p>

              <br />
            </div>

            <TextToSpeech />
          </div>
        </div>

      </div>
    </>
  );
};

export default Interview;
