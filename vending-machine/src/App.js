import './App.css';
import { Route, Switch } from "react-router-dom"
import VendingMachine from "./VendingMachine"
import Apple from "./Apple"
import Chocolate from "./Chocolate"
import Crisps from "./Crisps"

function App() {
  return (
    <div className="App">
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
