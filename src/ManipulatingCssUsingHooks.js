import React, { useState } from 'react'

export default function ManipulatingCssUsingHooks() {

    const[color,setColor] = useState('red')
    const[bgColor,setBgColor] = useState('yellow')
    const[text,setText] = useState('Initially Color is in Red & Background Color is in Yellow')

    function changeEverything(){
        setColor('blue');
        setBgColor('orange')
        setText("Now Color is in Blue & Background Color is in Orange");
    }
    

    return (
        <div>
            <h1>Manipulating Css Using Hooks</h1>

            <h1 style = {{color : color,backgroundColor : bgColor}}>{text}</h1>

            <button onClick = {changeEverything}>Change Everything</button>
        </div>
    )
}
