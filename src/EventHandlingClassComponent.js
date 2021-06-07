import React, { Component } from 'react'

class EventHandlingClassComponent extends React.Component{

    constructor(){

        super();

        this.state = {
            key : 'Hover your Mouse to get Alert Message and change Text'
        }
    }
    
    changeText = () => {
         this.setState({key : 'You changed Me'})
    }

    mouseHover = () => {
        alert('Mouse Hovered');
    }

    Changing = () => {
        alert('Text Changed');
    }

    Clicking = () => {
        alert('Button Clicked');
    }

    render(){
        return <div>
            <h1>Event Handling</h1>

            <button onClick = {this.Clicking}>Click Me</button>

            <br />

            <input type="text" onChange = {this.Changing} />

            <br />

            <h1 onMouseOver = {this.changeText}>{this.state.key}</h1>

        </div>
    }
}

export default EventHandlingClassComponent