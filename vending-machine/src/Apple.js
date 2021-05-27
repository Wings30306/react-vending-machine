import React, {Component} from "react"
import { Link } from "react-router-dom"

class Apple extends Component {
    // constructor(props){
    //     super(props)
    // }

    render(){
        return (
            <div>
                <h1>Apple</h1>
                <p>Healthy choice, rock those vitamins!</p>
                <Link to="/">Back</Link>
            </div>
        
        )
    }
}

export default Apple