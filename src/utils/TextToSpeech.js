import { useEffect } from "react";
import { useSelector } from "react-redux";
import SpeechRecognition from "react-speech-recognition";

const startListening = () => {
    // console.log("i m listing now");
    SpeechRecognition.startListening({ interimResults: true, continuous: true, language: "en-IN" });
  };
  
  

export const TextToSpeech = () => {
    let maxLength = 160;
  
    let str = useSelector((store) => store.user?.message);
  
    useEffect(() => {
      if (!str) str = " ";
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
  
        if (str != "hello") startListening(); // This will be called after all chunks have been spoken
      };
  
      speakChunks();
  
    }, [str]);
  
  
  };