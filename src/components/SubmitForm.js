
import { useEffect, useState } from 'react';


function SubmitForm() {
  // const [collectionNames, setCollectionsName] = useState([])
  // console.log(collectionNames)
  
  const defaultForm = {
    "name": "",
    "image": "",
    "year": "",
    "description": "",
    "collection": ""
  }
  const [formData, setFormData] = useState(defaultForm)
  console.log(formData)


  // useEffect(() => {
  //   fetch("http://localhost:9393/cards")
  //   .then(response => response.json())
  //   .then(data => setCollectionsName(data.cards))
  // }, [])

  // const allCardTypesArray = collectionNames.map((card) => card.collection).map((collection) => collection.card_type)
  // //const allCardTypes = allCardTypesArray.forEach()
  // console.log(allCardTypesArray)

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  function handleSubmit(event) {
    console.log("clicked")
    event.preventDefault()

    fetch("http://localhost:9393/cards", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        year: formData.year,
        description: formData.description,
        collection: formData.collection
      })
    })

    //add new data to state
    fetch("http://localhost:9393/cards").then(resp => resp.json()).then(data => console.log(data)).catch(error => console.log(error))
    //.then(response => response.json())
    //.then(data => console.log(data))

    

  }



    
    return (
      <div className="form-style-2">
          <h1>Add A Card</h1>

          <form onSubmit={handleSubmit} >
          <label ><span>Name <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="name"/></label>
          <label ><span>Image <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="image"/></label>
          <label ><span>Year <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="year"/></label>
          <label ><span>Description <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="description"/></label>
          <label ><span>Collection <span className="required">*</span></span><select onChange={handleChange} name="collection" className="select-field">
          <option value="Pokemon" name="Pokemon">Pokemon</option>
          <option value="Hockey" name ="Hockey">Hockey</option>
          <option value="Soccer" name="Soccer">Soccer</option>
          </select></label>

          <label><span> </span><button>Submit</button></label>
          </form>

      </div>
    );
  }
  
export default SubmitForm;