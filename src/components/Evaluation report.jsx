import React from 'react';
import logo from '../assets/logo.png';
import { useSelector } from 'react-redux';
import MultiStepLoader from './MultiStepLoader';

const EvaluationReport = () => {
  const evaluationText = useSelector((store)=>store?.user?.message1);

  // if(evaluationText.length == 0){
  //   return <MultiStepLoader />;
  // }

  // const evaluationText = "Based on our interview session, here is an evaluation of your performance:\n\n1. Vocabulary: 65/100\n   - Remarks: Your vocabulary is decent, but there were some instances where clearer and more specific terms could have been used.\n   - Plus Points: You were able to communicate your thoughts effectively.\n   - Negative Points: Some technical terms were not explained clearly.\n\n2. Introduction: 75/100\n   - Remarks: Your introduction was concise, but it could have included more details about your experience with HTML.\n   - Plus Points: You provided the necessary information when asked.\n   - Negative Points: Lack of elaboration on your HTML experience.\n\n3. Technical Skills: 60/100\n   - Remarks: Your technical knowledge of HTML is basic, and there were some gaps in your understanding of certain concepts.\n   - Plus Points: You were able to answer some questions correctly.\n   - Negative Points: Limited knowledge of semantic HTML, meta tags, and form submissions.\n\nOverall, there is room for improvement in your technical skills and vocabulary to enhance your performance in HTML interviews.\n\nHere is a summary of the questions asked during the interview session along with your answers:\n1. Purpose of the doctype declaration in HTML.\n   - Answer: Not provided initially.\n2. Difference between id and className in HTML.\n   - Answer: \"id is for a single tag, and classNa we can apply it for more than one tag.\"\n3. Explanation of semantic HTML.\n   - Answer: Not provided initially.\n4. Difference between inline and block elements in HTML.\n   - Answer: \"Inline takes the width of the full content, and block takes its necessary width.\"\n5. Use of the <meta> tag in HTML.\n   - Answer: Not provided initially.\n6. Accessibility in web development.\n   - Answer: \"For accessibility, we use React, not HTML.\"\n7. Purpose of the <form> element in HTML.\n   - Answer: \"Form is used to create a form in HTML.\"\n8. Difference between GET and POST methods in form submissions.\n   - Answer: \"GET is used to fetch some data, and POST is used to add some data in the backend.\"\n9. Adding an image to a webpage using the <img> tag and common attributes.\n   - Answer: Not provided initially.\n\nI hope this evaluation provides you with constructive feedback for your future interviews. If you have any more questions or need further clarification, feel free to ask.";

  const replaceNewLines = (text) => {
    return text.replace(/\n/g, "<br>");
  }

  const highlightMarks = (text) => {
    const regex = /\d+\/\d+/g; // Matches numbers separated by a slash
    return text.replace(regex, (match) => `<span className="mark">${match}</span>`);
  }

  return (
    <div className="bg-[#030917] w-full p-[4vh]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <img src={logo} alt="logo" className="h-14 mr-2" />
          <h1 className="text-2xl font-bold text-gray-300">ReadyQ</h1>
        </div>
        <p className="text-gray-300 text-right">Practice Anytime , Anywhere</p>
      </div>
      <h2 className="text-2xl font-bold text-gray-300 mt-8">Performance Snapshot</h2>
      <div id="evaluation" className="bg-[#031017] mt-[3vh] rounded-md p-4 shadow-md opacity-70 border text-gray-300 text-[2.5vh]" dangerouslySetInnerHTML={{ __html: highlightMarks(replaceNewLines(evaluationText)) }} />

      <div className="goodbye-message bg-gray-200 rounded-md p-4 text-lg font-bold mt-8">
        Thank you for choosing ReadyQ! We're thrilled to be a part of your interview preparation journey. Remember, the ReadyQ community is here to support you. Feel free to showcase your scores on Twitter and LinkedIn with <span className="bg-gradient-to-r from-pink-800 to-[#2E2EF4] bg-clip-text text-transparent">#readyQ</span> to help the community grow . &#128640;</div>
    </div>

  );
};

export default EvaluationReport;
