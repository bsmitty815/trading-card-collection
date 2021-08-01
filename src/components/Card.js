



function Card({cardsData}) {
   // const {image} = cardDisplay
    console.log(cardsData)


    const cardDisplay = cardsData.map((card) => {
        return <div><img className="card-box" src={card.image} /><p>{card.name}</p><p>{card.year}</p><p>{card.description}</p></div>
    })

    
    return (
      <div className="card-display">
          
        {cardDisplay}
      </div>
    );
  }
  
  export default Card;