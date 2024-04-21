// import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

import { useEffect } from "react";
import { useSelector } from "react-redux";

// const TextToSpeech = () => {
//   const [isPaused, setIsPaused] = useState(false);
//   const [utterance, setUtterance] = useState([]);
//   const [voice, setVoice] = useState(null);
//   const [pitch, setPitch] = useState(1);
//   const [rate, setRate] = useState(1);
//   const [volume, setVolume] = useState(1);

//   let text = useSelector((store) => store.user?.message);

//   if (!text) text = "This is dummy data";
//   console.log(text);

//   useEffect(() => {
//     const synth = window.speechSynthesis;

//     let u = [];

//     let words = text.split(" ");
//     let chunks = [];
//     let currentChunk = "";

//     for (const word of words) {
//       if ((currentChunk + word).length <= 200) {
//         currentChunk += (currentChunk === "" ? "" : " ") + word;
//       } else {
//         chunks.push(currentChunk);
//         currentChunk = word;
//       }
//     }

//     if (currentChunk !== "") {
//       chunks.push(currentChunk);
//     }

//     u = chunks;
//     console.log(u);
//     setUtterance(u);


//     synth.addEventListener("voiceschanged", () => {
//       const voices = synth.getVoices();
//       // Filter voices to find UK English female voice
//       const defaultVoice = voices.find(
//         (voice) => voice.lang === "en-GB" && voice.gender === "female"
//       );
//       setVoice(defaultVoice || voices[0]); // Set default voice to UK English female if available, else use the first available voice
//     });

//     // handlePlay();

//     return () => {
//       synth.cancel();
//       synth.removeEventListener("voiceschanged", () => {
//         setVoice(null);
//       });
//     };
//   }, [text]);

//   const handlePlay = () => {
//     const synth = window.speechSynthesis;

//     if (isPaused) {
//       synth.resume();
//     } else {
//       for (let i = 0; i < utterance.length; i++) {
//         const uu = new SpeechSynthesisUtterance(utterance[i]);
//         uu.voice = voice;
//         uu.pitch = pitch;
//         uu.rate = rate;
//         uu.volume = volume;
//         synth.speak(uu);
//       }
//     }

    

//     setIsPaused(false);
//   };


//   const handleVoiceChange = (event) => {
//     const voices = window.speechSynthesis.getVoices();
//     setVoice(voices.find((v) => v.name === event.target.value));
//   };


//   return (
//     <div>
//       <label>
//         Voice:
//         <select value={voice?.name} onChange={handleVoiceChange}>
//           {window.speechSynthesis.getVoices().map((voice) => (
//             <option key={voice.name} value={voice.name}>
//               {voice.name}
//             </option>
//           ))}
//         </select>
//       </label>

//       <br />

//       {/* <label>
//         Pitch:
//         <input
//           type="range"
//           min="0.5"
//           max="2"
//           step="0.1"
//           value={pitch}
//           onChange={handlePitchChange}
//         />
//       </label> */}

//       <br />

//       {/* <label>
//         Speed:
//         <input
//           type="range"
//           min="0.5"
//           max="2"
//           step="0.1"
//           value={rate}
//           onChange={handleRateChange}
//         />
//       </label> */}
//       <br />
//       {/* <label>
//         Volume:
//         <input
//           type="range"
//           min="0"
//           max="1"
//           step="0.1"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </label> */}

//       <br />

//       <button onClick={handlePlay}>Play</button>
//       {/* <button onClick={handlePause}>Pause</button>
//       <button onClick={handleStop}>Stop</button> */}
//     </div>
//   );
// };

// export default TextToSpeech;


const TextToSpeech = () => {
    let maxLength = 160;
    
    let str = useSelector(store => store.user?.message)
    // let str = `1. Vocabulary: - Score: 70/100 - Remarks: Your use of technical vocabulary related to React.js was somewhat limited and at times unclear. It's important to be more familiar with the terminology when discussing technical concepts. - Plus Points: You attempted to use technical terms related to React.js, showing some knowledge of the language. - Negative Points: There were instances of confusion and inaccuracies in your use of vocabulary, which can be improved with more study and practice. 2. Introduction: - Score: 80/100 - Remarks: Your introduction provided relevant information about your background as a student and your project. It was clear and concise, but could have included more details about your specific experience with React.js. - Plus Points: You introduced yourself confidently and shared relevant information about your current project. - Negative Points: More depth in discussing your React.js experience in the introduction would have been beneficial. 3. Technical Skills: - Score: 65/100 - Remarks: While you demonstrated some knowledge of React.js concepts like using Redux and React Router, there were gaps in your understanding, particularly in areas like state management and routing. It's important to further develop your technical skills through practice and study. - Plus Points: You showed some familiarity with using Redux and React Router in your project, indicating a foundation in React.js development. - Negative Points: Lack of clarity in explaining key concepts like state management and routing, along with limited experience with certain advanced features, highlighted areas for improvement. Overall, you have a good foundation in React.js but would benefit from further deepening your technical understanding and vocabulary to enhance your skills in React development. Keep learning and practicing to strengthen your expertise in this area.`

    useEffect(() => {
        if(!str)  str = "dummy ";
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
    
        
        for (let i = 0; i < chunks.length; i++) {
            const utterance = new SpeechSynthesisUtterance(chunks[i]);
            const voices = speechSynthesis.getVoices();
            console.log(voices)
            utterance.voice = voices[2]; // Set male voice
            window.speechSynthesis.speak(utterance);
        }
    }, [str])

  
  };

  export default TextToSpeech;