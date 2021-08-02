
import { useEffect, useState } from 'react';


function SubmitForm() {
  // const [collectionNames, setCollectionsName] = useState([])
  // console.log(collectionNames)
  const [collectionCategory, setCollectionCategory] = useState("Pokemon")
  console.log(collectionCategory)
  const defaultForm = {
    name: "",
    image: "",
    year: "",
    description: ""
    //collection: collectionCategory
  }
  const [formData, setFormData] = useState(defaultForm)
  //const [collectionCategory, setCollectionCategory] = useState("Pokemon")
  console.log(collectionCategory)
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

  function handleCollectionChange(event) {
    setCollectionCategory(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()

    fetch("http://localhost:9393/cards", {
      method: 'POST',
      headers:{
        "Content-Type": "application/json",
        "Accepts": "application/json"
      },
      body: JSON.stringify({
        name: formData.name,
        image: formData.image,
        year: formData.year,
        description: formData.description,
        collection: collectionCategory //formData.collection
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
    setFormData(defaultForm)
  }



    
    return (
      <div className="form-style-2">
          <h1>Add A Card</h1>

          <form onSubmit={handleSubmit} >
          <label ><span>Name <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="name"/></label>
          <label ><span>Image Url<span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="image"/></label>
          <label ><span>Year <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="year"/></label>
          <label ><span>Description <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="description"/></label>
          <label ><span>Collection <span className="required">*</span></span><select onChange={handleCollectionChange} value={collectionCategory} name="collection" className="select-field">
          <option value="Pokemon" name="Pokemon">Pokemon</option>
          <option value="Soccer" name="Baseball">Soccer</option>
          <option value="Soccer" name="Basketball">Soccer</option>
          <option value="Hockey" name ="Hockey">Hockey</option>
          <option value="Soccer" name="Soccer">Soccer</option>
          </select></label>

          <label><span> </span><button>Submit</button></label>
          </form>

      </div>
    );
  }
  
export default SubmitForm;