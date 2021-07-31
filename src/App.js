import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Cards from "./components/Cards"
import { useState, useEffect } from "react";
import Form from "./components/Form"
import { Route } from "react-router-dom";
import './App.css';

function App() {
  const [cardsData, setCardsData] = useState([])

  return (
    <div className="App">
      <Header />
      <Navigation />
      <Route exactPath="/Form" >
        <Form />
      </Route>
      <Route path="/" >
        <Cards />
      </Route>
    </div>
  );
}

export default App;
