import React from 'react'

function EventHandlingFunctionalComponent(){

function clicking() {
        alert('Clicked');
    }

function Changing() {
    alert('Changed');
}

function hovered() {
    alert('Mouse Hovered');
}

    return <div>

        <button onClick = {clicking}>Click Me</button>

        <br />

        <input type="text" onChange = {Changing} />

        <h1 onMouseOver = {hovered}>Hover Me to get Alert</h1>

    </div>
}

export default EventHandlingFunctionalComponent