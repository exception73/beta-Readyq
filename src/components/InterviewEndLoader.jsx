import  { useState } from "react";
import { MultiStepLoader as Loader} from "./ui/multi-step-loader";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const loadingStates = [
  {
    text: "Buying a condo",
  },
  {
    text: "Travelling in a flight",
  },
  {
    text: "Meeting Tyler Durden",
  },
  {
    text: "He makes soap",
  },
  {
    text: "We goto a bar",
  },
  {
    text: "Start a fight",
  },
  {
    text: "We like it",
  },
  {
    text: "Welcome to F**** C***",
  },
];

export default function InterviewEndLoader() {
  const [loading, setLoading] = useState(true);
  const userMessage = useSelector(store => store?.user?.message1);

  const navigate = useNavigate();
  if(userMessage != '') navigate('/report')

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      {/* Core Loader Modal */}
      <Loader loadingStates={loadingStates} loading={loading} duration={2000} />

    </div>
  );
}
