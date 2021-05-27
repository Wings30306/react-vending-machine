import './App.css';
import { NavLink, Route, Switch } from "react-router-dom"
import VendingMachine from "./VendingMachine"
import Apple from "./Apple"
import Chocolate from "./Chocolate"
import Crisps from "./Crisps"

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink exact activeClassName="active-nav" to="/">Home </NavLink>
        <NavLink exact activeClassName="active-nav" to="/apple">Apple </NavLink>
        <NavLink exact activeClassName="active-nav" to="/chocolate">Chocolate </NavLink>
        <NavLink exact activeClassName="active-nav" to="/crisps">Crisps </NavLink>
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
