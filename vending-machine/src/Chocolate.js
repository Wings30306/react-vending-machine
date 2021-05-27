import React, {Component} from "react"
import { Link } from "react-router-dom"

class Chocolate extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
            <div>
                <h1>Chocolate</h1>
                <p>MMM YUMMY!!!</p>
                <Link to="/">Back</Link>
            </div>
        
        )
    }
}

export default Chocolate