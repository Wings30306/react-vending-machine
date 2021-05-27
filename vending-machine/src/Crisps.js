import React, {Component} from "react"
import { Link } from "react-router-dom"

class Crisps extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
            <div>
                <h1>Crisps</h1>
                <p>Salty Goodness! Remember to get a drink too!</p>
                <Link to="/">Back</Link>
            </div>
        
        )
    }
}

export default Crisps