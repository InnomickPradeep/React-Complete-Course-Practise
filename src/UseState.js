import React, { useState } from 'react'

export default function UseState() {

    const[player,setPlayer] = useState('Sachin');
    const[numbers,setNumbers] = useState([1,' ',3,' ',5,' ',7,' ',9])

    function changePlayer(){
        setPlayer('Dhoni')
        setNumbers([2,' ',4,' ',6,' ',8,' ',10])
    }
    

    return (
        <div>
            <h1>Use State REACT</h1>

            <h1>The Declared Player is {player}</h1>

            <h1>The Declared Numbers are {numbers}</h1>

            <button onClick = {changePlayer}>changePlayer&Numbers</button>
        </div>
    )
}
