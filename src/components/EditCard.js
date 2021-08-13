
import {useState} from "react"


function EditCard({card, handleEdittedCard, showEditCard}) {
    const {id, image, name, year, description, collection} = card

    const [defaultData, setDefaultData] = useState({
        id: id,
        name: name,
        image: image,
        year: year,
        description: description
      })

    const [cardDataUpdated, setCardDataUpdated] = useState(defaultData)

    function handleChange(event) {
        setCardDataUpdated({
        ...cardDataUpdated,
        [event.target.name]: event.target.value
    })
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch(`http://localhost:9393/cards/${cardDataUpdated.id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id: cardDataUpdated.id,
                name: cardDataUpdated.name,
                image: cardDataUpdated.image,
                year: cardDataUpdated.year,
                description: cardDataUpdated.description
            }),
        })
        .then((response) => response.json())
        .then((newCardData) =>  handleEdittedCard(newCardData.card, collection))

        showEditCard()
        
    }

    function cancelOnClick() {
        showEditCard()
    }
    
    
    return (

        <div className="edit-card-display">

            <div className="edit-card-display-inner">


            <form onSubmit={handleSubmit}>
                <p>
                <button onClick={cancelOnClick}>Cancel</button>
                </p>
                <p>
                <input type="text" className="input-field" name="name" onChange={handleChange} placeholder={name}/>
                </p>
                <p>
                <input type="text" className="input-field" name="image" onChange={handleChange} placeholder={image}/>
                </p>
                <p>
                <input type="text" className="input-field" name="year" onChange={handleChange} placeholder={year}/>
                </p>
                <p>
                <input type="text" className="input-field" name="description" onChange={handleChange} placeholder={description}/>
                </p>
              
                <p>
                <button>Submit</button>
                </p>

            </form>
         

            </div>
        </div>

    );
  }
  
  export default EditCard;