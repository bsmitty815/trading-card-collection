



function Card({cardsData, handleDeleteCard, searchTerm}) {

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
    const filteredCardsData = cardsData.filter(card => card.name.toLowerCase().includes(searchTerm.toLowerCase()))


    const cardDisplay = filteredCardsData.map((card) => {
        return <div key={card.id} id={card.id}><img className="card-box" src={card.image} alt={card.image} /><p><b>Name: </b>{card.name}</p><p><b>Year: </b>{card.year}</p><p><b>Description: </b>{card.description}</p><p><button id={card.id} onClick={handleDeleteClick} className="emoji-button delete" >🗑</button></p></div>
    })

    
    return (
      <div className="card-display">
          
        {cardDisplay}
      </div>
    );
  }
  
  export default Card;