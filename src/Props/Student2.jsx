import React, {Component} from "react";

//Props in class

class Student2 extends Component{
    render(){
        return(
            <div>
                <h2>Hello, Name: {this.props.name} Rno: {this.props.rno}</h2>
                {this.props.children}
            </div>
        )
    }
}

export default Student2;