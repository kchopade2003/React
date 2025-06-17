import React from "react";

const Student1 = (props) =>{
    //props are immutable
    return(
        <div>
            <h2>Hello, Name: {props.name}, RollNo: {props.rno}</h2>
            {props.children}
        </div>
    )
}

export default Student1;