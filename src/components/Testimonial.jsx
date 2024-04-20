import React from "react";
import { SparklesCore } from "./ui/sparkles";

const Card = ({ name, handle, content }) => {
    return (
      <div className="bg-black z-40 shadow-md rounded-lg overflow-hidden transition duration-300 border-2 border-[#6c6c6c] my-4 hover:transform hover:cursor-pointer hover:scale-105">
       
       <div className="px-4 py-4">
          <p className="text-gray-300 text-left leading-5 font-semibold text-md ">{content}</p>
        </div>
       
        <div className="flex justify-between items-center px-4 pb-5">
          <div className="flex items-center">
            <div>
              <h5 className="text-xl font-semibold mt-4 text-white">{name}</h5>
              <p className="text-gray-600">{handle}</p>
              <p>hello</p>
            </div>
          </div>
        </div>
        
      </div>
    );
  };
  
const data =
  "   Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quaerat porro reiciendis, dignissimos expedita minima, Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam quaerat po nam cumque cum ab dolores adipisci qui? Praesentium obcaecati consequuntur repellendus, quibusdam autem nulla doloribus fuga optio unde vel perspiciatis explicabo facilis, eum quam sed!";
const data1 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut sunt deleniti itaque.";

const data2 =
  "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque quo dignissimos culpa mollitia tempora. Quae, temporibus itaque nam error architecto doloribus quam molestias delectus? Odio illo cupiditate eos, incidunt laboriosam, in eius qua";
const Testimonial = () => {
  return (
    <div className="bg-black">
        

        <p className="">Hundreds of people </p>
        <p>already love us</p>

      <div className="flex flex-row w-3/4 m-auto">
        <div className="mx-4">
          <Card name="Navya" content={data2} />
          <Card name="Dhruv" content={data1} />
        </div>

        <div className="mx-4">
          <Card name="Gautam" content={data} />
        </div>

        <div className="mx-4">
          <Card name="Dhruv" content={data1} />
          <Card name="Navya" content={data2} />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
