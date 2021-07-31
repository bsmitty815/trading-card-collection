import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Cards from "./components/Cards"
import { useState, useEffect } from "react";
import SubmitForm from "./components/SubmitForm"
import { Route, Switch } from "react-router-dom";
import './App.css';
import { __RouterContext } from "react-router";
import 'semantic-ui-css/semantic.min.css'

function App() {
  const [cardsData, setCardsData] = useState([])


  useEffect(() => {
    fetch("http://localhost/939")
    .then(response => response.json())
    .then(data => console.log(data))


  }, [])

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route path="/Cards" >
          <Cards />
        </Route>
        <Route exactPath="/SubmitForm" >
          <SubmitForm />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
