import React from 'react'
class Message extends React.Component{
    message="Hello! Sunny"
    name= "Nallapu Sunny"
    gmHandler(){
       console.log("Test 123");
       this.message="Hello Good Morning";
    }
    render(){
        return <div>
            <h2>Message Component</h2>
            <h4>Name:{this.name}</h4>
            <button onClick={this.gmHandler()}>Click Me</button>
            
        </div>
    }
}
export default Message