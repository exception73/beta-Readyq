import React, { useEffect, useRef, useState } from "react";
import InterviewHeader from "./InterviewHeader";
import { useDispatch, useSelector } from "react-redux";
import { askNextQuestion } from "../../Redux/userSlice";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";
import TextToSpeech from "../TextToSpeech";

const InterviewWindow = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [textToCopy, setTextToCopy] = useState();
  const [dataFromBackend, setDataFromBackend] = useState(
    "this is dummy data from backend"
  );

  const transciptArray = [];
  const dispatch = useDispatch();
  const userData = useSelector((store) => store.user);

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
    transciptArray.push(transcript);
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

  // ---------------CAMERA--------------------

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

  // --------------------CAMERA CLOSED-----------------

  return (
    <div className="bg-black h-screen">
      <InterviewHeader />

      <div className="bg-black p-5 pb-2 flex  h-[90%] justify-center ">
        {/* div2 */}
        <div className="border-gray-500 rounded-md border w-4/5 my-2 flex flex-col items-center justify-around">
          <p className="font-bold text-3xl text-white ">Transcription</p>

          <div className="p-4  bg-white/10 w-full rounded-sm h-[80%]">
            {/* <p className="text-white/60 text-left w-full ">{transcript}</p> */}

            {userData?.messageArray.map((message, index) => (
              <div key={index}>
                <div className="border-blue-900 border-4 flex">
                  <p className="text-white/60 text-left border border-4">
                    {userData?.messageArray[index]}
                  </p>
                </div>
                <div className="border-blue-900 border-4 flex flex-col">
                  
                </div>
              </div>
            ))}

            <div style={{ border: "2px solid black", padding: "40px" }}>
              <br />

              <TextToSpeech />
            </div>
          </div>

          <button
            onClick={handleSendData}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2  px-4  rounded"
          >
            Are You Sure!
          </button>

          <div className="btn-style h-auto">
            <button onClick={startListening}>Start Listening</button>
          </div>
        </div>

        {/* div1 */}

        <div className="flex flex-col my-2  ">
          <div className="w-1/5  mx-auto mt-0 flex justify-center">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              style={{ display: "none" }}
            />
            <canvas
              className=" h-[230px] aspect-video border border-gray-500 rounded-sm"
              ref={canvasRef}
            />
          </div>

          <div className="m-4">
            <img
              className=" h-[255px] aspect-video rounded-sm"
              src="https://assets-global.website-files.com/63e22afee07cdb8701e07be8/651b3265789a35a4efa952e3_female%20ai%20chatbot.png"
              alt=""
            />
          </div>
          <div className=" mx-4 text-2xl rounded-md justify-center bg-red-500">
            <button className="w-full justify-center text-white">
              End Call
            </button>
          </div>
        </div>

        {/* #3B82F6 */}
      </div>
    </div>
  );
};

export default InterviewWindow;
