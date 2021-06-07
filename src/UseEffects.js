import React, { useEffect, useState } from 'react'

export default function UseEffects() {

    const[player,setPlayer] = useState('Sachin');

    useEffect(()=>{
        setPlayer('Dhoni');
    },[])

    return (
        <div>
            
            <h1>Use Effect React</h1>

            <h1>The Declared Player is {player}</h1>

        </div>
    )
}
