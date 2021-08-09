
import { useState, useEffect} from "react"



function Search({searchTerm, handleSearchChange, sortValue, handleSortChange}) {
  const [collectionNames, setCollectionNames] = useState([])


  //fetch for collection names
  useEffect(() => {
    fetch("http://localhost:9393/cards")
    .then(response => response.json())
    .then(data => fillCollectionNamesData(data.collections))
  }, [])


  function fillCollectionNamesData(data){ // get the collections
    const multipleNamesArray = data.map(element => element.card_type)
    multipleNamesArray.sort()
    multipleNamesArray.unshift("All") //add all to begining of array for drop down
    setCollectionNames(multipleNamesArray)
  }


  const optionsDisplay = collectionNames.map((collection_type) => { //creating options for the collection names
    return <option key={collection_type} value={collection_type} name={collection_type}>{collection_type}</option>
  })



    
    return (
      <div className="ui search">
        <select onChange={handleSortChange} value={sortValue} name="collection" >
        {optionsDisplay}
        </select>
        <div className="ui icon input">
          <input className="prompt" value={searchTerm} onChange={handleSearchChange} />
          <i className="search icon" />
        </div>
      </div>
    );
  }
  
  export default Search;