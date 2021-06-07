import React, { useState } from 'react'

export default function Forms() {

    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    function displayName() {
        alert(username)
        alert(password)
    } 

    return (
        <div>
            <h1>React Forms</h1>

            <form action="">

                <input type="text" placeholder='username' onChange = { (e) => {setUserName(e.target.value)} }/>
                <br />
                <input type="text" placeholder='password' onChange = { (e) => {setPassword(e.target.value)} }/>
                <br />
                <button onClick = {displayName}>Display Username</button>

            </form>
        </div>
    )
}
