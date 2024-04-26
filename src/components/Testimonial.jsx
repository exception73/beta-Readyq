import "./Testimonial.css";

import { reviews } from "../contants/Reviews";
import Card from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="bg-black">
      <div className="px-32 py-16  ">
        <div className=" m-2 text-[#3B82F6] font-extrabold text-7xl ">
          Hundreds of people
        </div>
        <div className=" m-2 text-7xl text-white">already love us</div>
        <div className=" m-2 text-xl font-bold">
          But dont just take our word for it!
        </div>
      </div>

      <section className="testimonial-area">
        <div className="container">
          <div className="testimonial-content owl-carousel">
            {reviews.slice(0, 11).map((review, index) => (
              <Card key={index} name={review.name} content={review.review} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
