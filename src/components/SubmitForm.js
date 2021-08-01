
import { useEffect, useState } from 'react';


function SubmitForm() {
  // const [collectionNames, setCollectionsName] = useState([])
  // console.log(collectionNames)
  const [formFilledIn, setFormFilledIn] = useState({
    name: "",
    year: "",
    description: "",
    card_type: ""
  })


  // useEffect(() => {
  //   fetch("http://localhost:9393/cards")
  //   .then(response => response.json())
  //   .then(data => setCollectionsName(data.cards))
  // }, [])

  // const allCardTypesArray = collectionNames.map((card) => card.collection).map((collection) => collection.card_type)
  // //const allCardTypes = allCardTypesArray.forEach()
  // console.log(allCardTypesArray)



    
    return (
      <div className="form-style-2">
          <h1>Add A Card</h1>

          <form action="" method="post">
          <label for="field1"><span>Name <span class="required">*</span></span><input type="text" class="input-field" name="field1" value="" /></label>
          <label for="field2"><span>Year <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
          <label for="field2"><span>Description <span class="required">*</span></span><input type="text" class="input-field" name="field2" value="" /></label>
          <label for="field4"><span>Collection <span class="required">*</span></span><select name="field4" class="select-field">
          <option value="General Question">Pokemon</option>
          <option value="Advertise">Hockey</option>
          <option value="Partnership">Soccer</option>
          </select></label>

          <label><span> </span><input type="submit" value="Submit" /></label>
          </form>

      </div>
    );
  }
  
export default SubmitForm;