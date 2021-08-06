import Header from "./components/Header"
import Navigation from "./components/Navigation"
import CardsHolder from "./components/CardsHolder"
import SubmitForm from "./components/SubmitForm"
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'semantic-ui-css/semantic.min.css'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>

        <Route path="/SubmitForm" >
          <SubmitForm />
        </Route>
        <Route path="/CardsHolders" >
          <CardsHolder />
        </Route>
        <Route path="/">
          <CardsHolder />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
