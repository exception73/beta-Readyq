import React, { useEffect, useRef, useState } from "react";
import InterviewHeader from "./InterviewHeader";
import { useDispatch, useSelector } from "react-redux";
import { askNextQuestion } from "../Redux/userSlice";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import RecordingImage from "../assets/rec.png";

const startListening = () => {
  console.log("i m listing now");
  SpeechRecognition.startListening({interimResults : true ,continuous: true, language: "en-IN" });
};

const TextToSpeech = () => {
  let maxLength = 160;

  let str = useSelector((store) => store.user?.message);
  // let str = `1. Vocabulary: - Score: 70/100 - Remarks: Your use of technical vocabulary related to React.js was somewhat limited and at times unclear. It's important to be more familiar with the terminology when discussing technical concepts. - Plus Points: You attempted to use technical terms related to React.js, showing some knowledge of the language. - Negative Points: There were instances of confusion and inaccuracies in your use of vocabulary, which can be improved with more study and practice. 2. Introduction: - Score: 80/100 - Remarks: Your introduction provided relevant information about your background as a student and your project. It was clear and concise, but could have included more details about your specific experience with React.js. - Plus Points: You introduced yourself confidently and shared relevant information about your current project. - Negative Points: More depth in discussing your React.js experience in the introduction would have been beneficial. 3. Technical Skills: - Score: 65/100 - Remarks: While you demonstrated some knowledge of React.js concepts like using Redux and React Router, there were gaps in your understanding, particularly in areas like state management and routing. It's important to further develop your technical skills through practice and study. - Plus Points: You showed some familiarity with using Redux and React Router in your project, indicating a foundation in React.js development. - Negative Points: Lack of clarity in explaining key concepts like state management and routing, along with limited experience with certain advanced features, highlighted areas for improvement. Overall, you have a good foundation in React.js but would benefit from further deepening your technical understanding and vocabulary to enhance your skills in React development. Keep learning and practicing to strengthen your expertise in this area.`

  // useEffect(() => {
  //   if (!str) str = "hello";
  //   const words = str.split(" ");
  //   const chunks = [];
  //   let currentChunk = "";

  //   for (const word of words) {
  //     if ((currentChunk + word).length <= maxLength) {
  //       currentChunk += (currentChunk === "" ? "" : " ") + word;
  //     } else {
  //       chunks.push(currentChunk);
  //       currentChunk = word;
  //     }
  //   }

  //   if (currentChunk !== "") {
  //     chunks.push(currentChunk);
  //   }

  //   for (let i = 0; i < chunks.length; i++) {
  //     const utterance = new SpeechSynthesisUtterance(chunks[i]);
  //     const voices = speechSynthesis.getVoices();
  //     console.log(voices);
  //     utterance.voice = voices[2]; // Set male voice
  //     window.speechSynthesis.speak(utterance);
  //   }

  //   startListening();
  // }, [str]);

  useEffect(() => {
    if (!str) str = "hello";
    const words = str.split(" ");
    const chunks = [];
    let currentChunk = "";
  
    for (const word of words) {
      if ((currentChunk + word).length <= maxLength) {
        currentChunk += (currentChunk === "" ? "" : " ") + word;
      } else {
        chunks.push(currentChunk);
        currentChunk = word;
      }
    }
  
    if (currentChunk !== "") {
      chunks.push(currentChunk);
    }
  
    const speakChunks = async () => {
      for (let i = 0; i < chunks.length; i++) {
        const utterance = new SpeechSynthesisUtterance(chunks[i]);
        const voices = speechSynthesis.getVoices();
        utterance.voice = voices[2]; // Set male voice
  
        await new Promise((resolve) => {
          utterance.onend = resolve;
          window.speechSynthesis.speak(utterance);
        });
      }
  
      if(str != "hello") startListening(); // This will be called after all chunks have been spoken
    };
  
    speakChunks();
  }, [str]);
  

};

const InterviewWindow = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  const [textToCopy, setTextToCopy] = useState();
  const [dataFromBackend, setDataFromBackend] = useState(
    "this is dummy data from backend"
  );

  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

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
    <div className="bg-[#030917] min-h-screen ">
      <InterviewHeader />

      <div className=" px-24 mt-[2vh]">
        {/* first div for recording is on */}
        <div className="flex p-2 px-4 bg-[#2f343f] w-fit rounded-3xl justify-center">
          <img className="w-6  mr-2 " src={RecordingImage} alt="Recording" />
          <p className="text-white">This meeting is being recorded</p>
        </div>

        {/* main div jis mai 4 box h */}
        <div className="my-[2vh]">
          {/* upper wale 2 box */}

          {/* niche wale 2 box */}

          <div className="flex">
            <div className="w-full flex items-center bg-[#4e5462]/30 mr-8 mb-8 rounded h-[35vh] overflow-auto">
              <p className="text-white p-4 text-xl">{userData?.message}</p>
            </div>

            <div className="flex items-center bg-[#d9d9d9] rounded  h-[35vh] w-[45vw]">
              <img
                className="h-[80%] w-full"
                src="https://assets-global.website-files.com/63e22afee07cdb8701e07be8/651b3265789a35a4efa952e3_female%20ai%20chatbot.png"
                alt="AiInterviwer"
              />
            </div>
          </div>

          <div className="flex ">
            <div className="w-full flex items-center bg-[#4e5462]/30 mr-8 mb-8 rounded h-[35vh] overflow-auto">
              <p className="text-white p-4 text-xl">{transcript}</p>
            </div>

            <div className="flex items-center bg-[#d9d9d9] h-[35vh] w-[45vw] rounded">
              <video
                ref={videoRef}
                autoPlay
                playsInline
                style={{ display: "none" }}
              />
              <canvas ref={canvasRef} className="h-[80%] w-full" />
            </div>
          </div>
        </div>

        {/* third div for send answer and end call */}
        <div className="flex flex-row justify-center">
          <button
            onClick={handleSendData}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={`text-white mx-4 py-2 w-[10vw] rounded hover:w-[12vw] hover:rounded-3xl hover:bg-green-500 bg-blue-500 transition-all duration-200`}
          >
            {isHovered ? "Are you sure?" : "Continue"}
          </button>
          <button className="text-white w-[10vw] mx-4 py-2 bg-red-600 rounded">
            End
          </button>
        </div>
        <TextToSpeech />
      </div>
      {/* TextToSpeech(); */}
    </div>
  );
};

export default InterviewWindow;
