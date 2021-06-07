import React, {Component} from 'react'
import './CssUsingEvents.css'

class CssUsingEvents extends React.Component{

    constructor(){
    
        super();

        this.state = {
            color:'orange',
            bgColor:'blue'
        }
    }

    changeColor = () => {
        this.setState({color:'violet'})
    }

    changeBackgroundColor = () => {
        this.setState({bgColor:'indigo'})
    }

    render(){
        return <div>
            <h1 style = {{color:this.state.color, backgroundColor:this.state.bgColor}}>Hello CSS Events</h1>

            <button class='btn1' onClick = {this.changeColor}>Change Colour</button>
            &nbsp;
            <button class='btn2' onClick = {this.changeBackgroundColor}>Change Background Colour</button>

        </div>
    }
}

export default CssUsingEvents