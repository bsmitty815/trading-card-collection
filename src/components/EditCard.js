
import {useState} from "react"

function EditCard({card, handleEdittedCard}) {
    const {id, image, name, year, description} = card

    const [defaultData, setDefaultData] = useState({
        id: id,
        name: name,
        image: image,
        year: year,
        description: description
      })

    const [cardDataUpdated, setCardDataUpdated] = useState(defaultData)
    console.log(cardDataUpdated)

    function handleChange(event) {
        setCardDataUpdated({
        ...cardDataUpdated,
        [event.target.name]: event.target.value
    })
    }

    function handleSubmit(e) {
        e.preventDefault()

        console.log("id fetch", cardDataUpdated.id)
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
        .then((newCardData) => handleEdittedCard(newCardData.card))
    }
    
    
    return (
      <div className="card-display">

            <form onSubmit={handleSubmit}>
                <p>
                edit card
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
    );
  }
  
  export default EditCard;