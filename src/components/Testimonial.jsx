import './Testimonial.css'
import QuotionLogo from './marks.png'
const Card = ({content, name}) => {
  return (

    <div className="single-testimonial">
    <div className="round-1 round"></div>
    <div className="round-2 round"></div>
    <p>{content}</p>
    <div className="client-info">
      <div className="client-video">
       
        {/* <a href="#"><img src="https://i.ibb.co/DWhSr6S/play-button2.png" alt=""></a> */}
      </div>
      <div className="client-details">
        <h6>{name}</h6>
        {/* <span>Designer, LLCG Team</span> */}
        <img src = {QuotionLogo} alt ="hello" />
      </div>
    </div>

  </div>

  )
}

const reviews = [
  { name: "Dhruv", review: "Realistic AI, insightful feedback. Boosted my confidence for interviews!" },
  { name: "Mitocondria", review: "Incredible tool! The AI interviewer feels real, and the feedback is spot-on. Highly recommend!Improved my skills immensely, I also got a lot of confidense through them, must have in a students phone." },
  { name: "Gautam", review: "Game-changer! Lifelike AI interviewer, detailed feedback. Must-have for interview prep!.Just a need of the hour i feel i have is amazing" },
  { name: "Exception73", review: "Wow! Lifesaver for interviews. Realistic AI, detailed feedback. Highly recommend!. " },
  { name: "Navya", review: "I'm so impressed by this app! The AI interviewer is so realistic, and the feedback it provides is so insightful. It's really helped me identify my weaknesses and improve my interview skills. Highly recommend it to anyone preparing for interviews!.Bhai one needed in our college especially, Just make the responses a litlle faster would love that too" },
  { name: "Codemaster", review: "Love it! Realistic AI, thorough feedback. Boosted my confidence!" },
  { name: "Prince", review: "Maja Aa gaya bhai Kepp working on this till i get some of the best results and also love the reviews feature for each interview." },
  { name: "Anonymous", review: "Amazing app! Realistic AI, spot-on feedback. Great for interview prep!" },
  { name: "Sama", review: "Brilliant tool! Lifelike AI, detailed feedback. Confidence booster!" },
  { name: "Charmander", review: "Absolutely fantastic! AI interviewer is incredibly realistic, feedback is so insightful. Improved my skills immensely!" },
  // Additional reviews
  { name: "Ash", review: "Bohot achhi app hai, mujhe interview ke liye ache se tayari karne me madad mili. AI interviewer aur feedback dono bhot achhe hai!" },
  { name: "Brock", review: "This app rocks! The AI interviewer is so real, and the feedback is top-notch. It's been a great help for my interview preparation!" },
  { name: "Misty", review: "This app is a gem! The AI interviewer feels like a real person, and the feedback it gives is invaluable. Highly recommended for anyone preparing for interviews!" },
  { name: "Gary", review: "¡Increíble aplicación! El entrevistador de IA es muy realista y los comentarios son muy útiles. ¡Me ha ayudado mucho a mejorar mis habilidades de entrevista!" }
];

  const Testimonial = () => {
   
  return (
    <div className="bg-black">
      <div className="px-32 py-16  ">
        <div className=" m-2 text-[#3B82F6] font-extrabold text-7xl ">Hundreds of people</div>
        <div className=" m-2 text-7xl text-white">already love us</div>
        <div className=" m-2 text-xl font-bold">But dont just take our word for it!</div>
      </div>

      <section className="testimonial-area">
        <div className="container">


         
          <div className="testimonial-content owl-carousel">


          {
            reviews.slice(0, 11).map((review, index) => (
              <Card key={index} name={review.name} content={review.review} />
            ))
          }



           
          
          </div>
        </div>
</section>

    </div>
  );
};

export default Testimonial;
