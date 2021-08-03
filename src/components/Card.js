
import {useState} from "react"
import EditCard from "./EditCard"


function Card({cardsData, handleDeleteCard, searchTerm, sortValue, handleEdittedCard}) {
  const [showEdit, setShowEdit] = useState(false)
  console.log(showEdit)
    function handleDeleteClick(event){
      const id = event.target.id
      
      fetch(`http://localhost:9393/cards/${id}`, {
        method: "DELETE",
      }) 
        .then(response => response.json())
        .then(() => {
          handleDeleteCard(id)
        })

    }
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

    function showEditCard(e) {
      console.log(e)
      setShowEdit((showEdit) => !showEdit)
    }

    const cardDisplay = filteredCardsData.map((card) => {
        return <div key={card.id} id={card.id}><img className="card-box" src={card.image} alt={card.image} />
        <p><b>Name: </b>{card.name}</p>
        <p><b>Year: </b>{card.year}</p>
        <p><b>Description: </b>{card.description}</p>
        <p><button id={card.id} onClick={handleDeleteClick} className="emoji-button delete" >🗑</button></p>
        <button id={card.id} onClick={(e) => showEditCard(e)}>Edit</button>
        {showEdit === true ? <EditCard card={card} handleEdittedCard={handleEdittedCard} /> : "" }
        </div>
    })

    
    return (
      <div className="card-display">
          
        {cardDisplay}
      </div>
    );
  }
  
  export default Card;