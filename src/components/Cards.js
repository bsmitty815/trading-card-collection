import Card from "./Card"
import Search from "./Search"
import { useState, useEffect } from "react";

function Cards() {
    // possibly but the sort on this page
    const [cardsData, setCardsData] = useState([])
    console.log(cardsData)


    useEffect(() => {
        fetch("http://localhost:9393/cards")
        .then(response => response.json())
        .then(data => setCardsData(data.cards))

    }, [])

    // const cardDisplay = cardsData.map((card) => 
    //     image={card.image} {card.name}
    // )


    
    return (
      <div>
          <h1>My Cards</h1>
          <Search />
          <Card cardsData={cardsData} />

      </div>
    );
  }
  
  export default Cards;