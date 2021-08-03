import EditCard from "./EditCard"
import {useState} from "react"

function IndividualCard({id, image, name, year, description, handleDeleteCard, handleEdittedCard, card}) {

    const [showEdit, setShowEdit] = useState(false)


    function showEditCard(e) {
        //console.log(e)
        setShowEdit((showEdit) => !showEdit)
    }

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

    // <div key={id} id={id}><img className="card-box" src={image} alt={image} />
    //     <p><b>Name: </b>{name}</p>
    //     <p><b>Year: </b>{year}</p>
    //     <p><b>Description: </b>{cdescription}</p>
    //     <p><button id={id} onClick={handleDeleteClick} className="emoji-button delete" >🗑</button></p>
    //     <button id={card.id} onClick={(e) => showEditCard(e)}>Edit</button>
    //     {showEdit === true ? <EditCard card={card} handleEdittedCard={handleEdittedCard} /> : "" }
    //     </div>

    return (
        <div>
            <div key={id} id={id}>
                <img className="card-box" src={image} alt={image} />
                <p><b>Name: </b>{name}</p>
                <p><b>Year: </b>{year}</p>
                <p><b>Description: </b>{description}</p>
                <p><button id={id} onClick={handleDeleteClick} className="emoji-button delete" >🗑</button></p>
                <button id={id} onClick={(e) => showEditCard(e)}>Edit</button>
                {showEdit === true ? <EditCard card={card} handleEdittedCard={handleEdittedCard} /> : "" }
            </div>
        </div>
    )
}

export default IndividualCard;