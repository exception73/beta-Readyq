import React, { useEffect, useRef } from "react";
import InterviewHeader from "./InterviewHeader";

const InterviewWindow = () => {
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

  return (
    <div className="bg-black ">
      <InterviewHeader />

      <div className="bg-black p-5 flex  justify-center ">
        {/* div1 */}
        <div className="w-3/5  mx-auto m-4 relative">
          <video
            ref={videoRef}
            autoPlay
            playsInline
            style={{ display: "none" }}
          />
          <canvas
            className="h-[600px] border-4 border-gray-300 rounded-3xl w-full "
            ref={canvasRef}
          />

          <div className="absolute bottom-2 right-2">
            <img
              className="h-[150px] w-[150px] rounded-xl"
              src="https://assets-global.website-files.com/63e22afee07cdb8701e07be8/651b3265789a35a4efa952e3_female%20ai%20chatbot.png"
              alt=""
            />
          </div>
        </div>

        {/* #3B82F6 */}

        {/* div2 */}
        <div className="border-gray-300 border-[#3b82f6] rounded-3xl border-4  w-1/3 m-4 flex flex-col items-center  justify- ">
          <p className="font-bold text-3xl text-white p-4">Transcription</p>

          <div className="p-4 bg-white/10 m-4  rounded-xl w-[85%] h-[70%]">
            <p className="text-white/60">
                lorem100
            </p>
          </div>

          <div>
            {/* <button> Are You Done! </button>

                 */}

            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Are You  Sure!
            </button>
          </div>

          <div></div>
        </div>
      </div>
    </div>
  );
};

export default InterviewWindow;
