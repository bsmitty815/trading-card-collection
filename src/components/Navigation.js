import { navLink } from "react-router-dom";


function Navigation() {

    
    return (
      <div className="App">
        <navLink to="/Cards">
                <span>
                  <button>Cards</button>
                </span>
        </navLink>
        <navLink to="/Form">
                <span>
                  <button>Form</button>
                </span>
        </navLink>
      </div>
    );
  }
  
  export default Navigation;