import { NavLink } from "react-router-dom";
import { Button } from 'semantic-ui-react'


function Navigation() {

    
    return (
      <div className="App" >
        <NavLink to="/Cards">
                <span>
                    <Button color='orange' className="ui orange button">Cards</Button>
                </span>
        </NavLink>
        <NavLink to="/SubmitForm">
                <span>
                    <Button color='orange' className="ui orange button">Form</Button>
                </span>
        </NavLink>
      </div>
    );
  }
  
export default Navigation;