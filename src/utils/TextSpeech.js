export default function TextSpeech(str) {
    const speakChunks = async () => {
      const utterance = new SpeechSynthesisUtterance(str);
      const voices = speechSynthesis.getVoices();
      utterance.voice = voices[2]; // Set male voice
  
      await new Promise((resolve) => {
        utterance.onend = resolve;
        window.speechSynthesis.speak(utterance);
      });
    };
  
    speakChunks();
  };
  