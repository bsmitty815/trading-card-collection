
import { useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'


function SubmitForm() {
  const history = useHistory()
  const [collectionCategory, setCollectionCategory] = useState("Basketball")
  const [collectionNames, setCollectionNames] = useState([])
  const defaultForm = {
    name: "",
    image: "",
    year: "",
    description: ""
  }
  const [formData, setFormData] = useState(defaultForm)


  //use fetch to get collection names
  useEffect(() => {
    fetch("http://localhost:9393/cards")
    .then(response => response.json())
    .then(data => fillCollectionNamesData(data.collections))
  }, [])

  //getting the input vallue to update formData
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

  //updating the collection drop down
  function handleCollectionChange(event) {
    setCollectionCategory(event.target.value)
  }


  //handling the submitted information to update the data in the backend and then calling to update state
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
    history.push('/')
  }

  function fillCollectionNamesData(data){ // get the collections
    const multipleNamesArray = data.map(element => element.card_type)
    multipleNamesArray.sort()
    setCollectionNames(multipleNamesArray)
  }


  const optionsDisplay = collectionNames.map((collection_type) => { //creating options for the collection names
    return <option key={collection_type} value={collection_type} name={collection_type}>{collection_type}</option>
  })



    
    return (
      <div className="form-style-2">
          <h1>Add A Card</h1>

          <form onSubmit={handleSubmit} >
          <label ><span>Name <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="name"/></label>
          <label ><span>Image Url<span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="image"/></label>
          <label ><span>Year <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="year"/></label>
          <label ><span>Description <span className="required">*</span></span><input onChange={handleChange} type="text" className="input-field" name="description"/></label>
          <label ><span>Collection <span className="required">*</span></span><select onChange={handleCollectionChange} value={collectionCategory} name="collection" className="select-field">
          {/*<option value="Pokemon" name="Pokemon">Pokemon</option>
          <option value="Baseball" name="Baseball">Baseball</option>
          <option value="Basketball" name="Basketball">Basketball</option>
          <option value="Hockey" name ="Hockey">Hockey</option>
          <option value="Soccer" name="Soccer">Soccer</option>*/}
          {optionsDisplay}

          </select></label>

          <label><span> </span><button>Submit</button></label>
          </form>

      </div>
    );
  }
  
export default SubmitForm;