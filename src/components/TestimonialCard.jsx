
const Card = ({content, name}) => {
    return (
  
      <div className="single-testimonial">
      <div className="round-1 round"></div>
      <div className="round-2 round"></div>
      <p>{content}</p>
      <div className="client-info">
        <div className="client-video">
         
        
        </div>
        <div className="client-details">
          <h6>{name}</h6>
        </div>
      </div>
  
    </div>
  
    )
  }
  
  
  export default Card;