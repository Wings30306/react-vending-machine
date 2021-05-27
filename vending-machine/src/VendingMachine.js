import React, {Component} from "react"
import { Link } from "react-router-dom"

class VendingMachine extends Component {
    // constructor(props){
    //     super(props)
    // }

    

    render(){
        return (
            <div>
                <h1>Hello, I'm a vending machine! What would you like to eat?</h1>
                <ul>
                    <li><Link to="/apple">Apple</Link></li>
                    <li><Link to="/chocolate">Chocolate</Link></li>
                    <li><Link to="/crisps">Crisps</Link></li>
                </ul>
                
                
                
            </div>

        
        )
    }
}

export default VendingMachine