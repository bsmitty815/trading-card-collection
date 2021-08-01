import Header from "./components/Header"
import Navigation from "./components/Navigation"
import Cards from "./components/Cards"
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
