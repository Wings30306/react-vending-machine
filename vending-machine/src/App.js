import './App.css';
import { Link, Route, Switch } from "react-router-dom"
import VendingMachine from "./VendingMachine"
import Apple from "./Apple"
import Chocolate from "./Chocolate"
import Crisps from "./Crisps"

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home </Link>
        <Link to="/apple">Apple </Link>
        <Link to="/chocolate">Chocolate </Link>
        <Link to="/crisps">Crisps </Link>
      </nav>
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />
        <Route exact path='/apple' render={() => <Apple />} />
        <Route exact path='/chocolate' render={() => <Chocolate />} />
        <Route exact path='/crisps' render={() => <Crisps />} />
        <Route path='/' render={() => <VendingMachine />} />
      </Switch>
      
    </div>
  );
}

export default App;
