
import IndividualCard from "./IndividualCard"


function Cards({cardsData, handleDeleteCard, searchTerm, sortValue, handleEdittedCard}) {



    //filter through card names in cards data state
    const sortedCardsData = cardsData.filter((card) => {
      if (sortValue === "All") {
        return cardsData
      } else {
        return card.collection === sortValue
      }
    })

    //filter search bar
    const filteredCardsData = sortedCardsData.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()) || card.description.toLowerCase().includes(searchTerm.toLowerCase()) || card.collection.toLowerCase().includes(searchTerm.toLowerCase()))



    //passing through the information to the individual card component and making a component for each card
    const cardDisplay = filteredCardsData.map((card) => {
        return <div key={card.id}><IndividualCard key={card.id} {...card} card={card} handleDeleteCard={handleDeleteCard} handleEdittedCard={handleEdittedCard} /></div> // ...card this passes through the attributes each key value pair
    })

    
    return (
      <div className="card-display">
          
        {cardDisplay}
      </div>
    );
  }
  
  export default Cards;