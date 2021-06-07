import React, { useState } from 'react'

export default function Maps() {

    const[numbers,setNumbers] = useState([1,2,3,4,5,6,7,8,9,10])
    const[names,setNames] = useState(['Sachin','Dhoni','Warner'])
    const[cricketPlayer,setCricketPlayer] = useState([{name:'Sachin',country:'India'},{name:'Dhoni',country:'India'},{name:'Warner',country:'Australia'}])

    const numbersList = numbers.map((number) => {
        return <div>
            <h1>{number}</h1>
        </div>
    })

    const namesList = names.map((name) => {
        return <div>
            <h1>{name}</h1>
        </div>
    })

    const cricketPlayersList = cricketPlayer.map((playerObject) => {
        return <div>
            <h1>The Player Name is {playerObject.name}</h1>
            <p>He belongs to {playerObject.country}</p>
        </div>
    })

    return (
        <div>
            {numbersList}

            {namesList}

            {cricketPlayersList}
        </div>
    )
}
