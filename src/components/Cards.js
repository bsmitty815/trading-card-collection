import Card from "./Card"
import Search from "./Search"
import { useState, useEffect } from "react";

function Cards() {
    // possibly but the sort on this page
    const [cardsData, setCardsData] = useState([])
    const [searchTerm, setSearchTerm] = useState("")

    console.log(searchTerm)
    useEffect(() => {
        fetch("http://localhost:9393/cards")
        .then(response => response.json())
        .then(data => setCardsData(data.cards))

    }, [])


    function handleDeleteCard(id) {
      const idInt = parseInt(id)
      const updatedCardDataArray = cardsData.filter((card) => {
        return card.id !== idInt
      })
      setCardsData(updatedCardDataArray)
    }

    const handleSearchChange = (e) => {
      setSearchTerm(e.target.value)
    }


    
    return (
      <div>
          <p></p>
          <Search searchTerm={searchTerm} handleSearchChange={handleSearchChange} />
          <Card searchTerm={searchTerm} cardsData={cardsData} handleDeleteCard={handleDeleteCard} />

      </div>
    );
  }
  
  export default Cards;