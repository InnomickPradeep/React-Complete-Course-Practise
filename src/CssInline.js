import React, {Component} from 'react'

class CssInline extends React.Component{

    buttonClick =() => {
        console.log('Hello World');
        alert('Hello World')
    }

    render(){

        return <div>
            
            <h1 style = {{color:'red', backgroundColor:'green'}}>CSS Inline in React</h1>

            <button style = {{color : 'blue', backgroundColor:'yellow'}} onClick = {this.buttonClick}>Click Me</button>

        </div>

    }
}

export default CssInline