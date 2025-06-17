import React, {Component} from "react";

class Enroll extends Component{
    constructor(){
        super()
        this.state = {
            Message: "Enroll Student"
        }
    }

    enrollStudent(){
        this.setState({
            Message: "Student Enrolled."
        })
    }

    render(){
        return(
            <div>
                <h2>{this.state.Message}</h2>
                <button onClick={() => this.enrollStudent()}>Enoroll</button>
            </div>
        )
    }
}

export default Enroll