import image from "../images/image-top-display.png"

function Header() {
    
    
    return (
      <div className="App">
          <p className="header-text">My Trading Card Collection</p>
          <img src={image} className="header-image" alt={image}/>
      </div>
    );
  }
  
  export default Header;