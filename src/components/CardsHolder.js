import Cards from "./Cards"
import Search from "./Search"
import { useState, useEffect } from "react";

function CardsHolder() {
    const [cardsData, setCardsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    const [sortValue, setSortValue] = useState("All")

    

    //initial fetch
    useEffect(() => {
        fetch("http://localhost:9393/cards")
        .then(response => response.json())
        .then(data => setCardsData(data.cards))

    }, [])



    //delete card then update state
    function handleDeleteCard(id) {
      const idInt = parseInt(id)
      const updatedCardDataArray = cardsData.filter((card) => {
        return card.id !== idInt
      })
      setCardsData(updatedCardDataArray)
    }

    //search state update
    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value)
    }

    //sort/filter state update
    function handleSortChange(e) {
      setSortValue(e.target.value)
    }

    //after the card has been edited we update the cardsData state
    function handleEdittedCard(newCardData, cardCollection) {
      const cardId = parseInt(newCardData.id)
      const filteredCards = cardsData.filter((card) => {
        return card.id !== cardId
      })
      newCardData["collection"] = cardCollection
      const allCardsUpdated = [...filteredCards, newCardData]
      setCardsData(allCardsUpdated)
    
    }

    
    return (
      <div>
          <p></p>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} sortValue={sortValue} handleSortChange={handleSortChange} />
          <Cards searchTerm={searchTerm} cardsData={cardsData} handleDeleteCard={handleDeleteCard} sortValue={sortValue} handleEdittedCard={handleEdittedCard} />

      </div>
    );
  }
  
  export default CardsHolder;