




function Search({searchTerm, handleSearchChange}) {

    
    return (
      <div className="ui search">
        <select>

        </select>
        <div className="ui icon input">
          <input className="prompt" value={searchTerm} onChange={handleSearchChange} />
          <i className="search icon" />
        </div>
      </div>
    );
  }
  
  export default Search;