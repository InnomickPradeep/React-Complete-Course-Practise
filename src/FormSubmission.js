import React, { useState } from 'react'

export default function FormSubmission() {

    const[name,setName] = useState('')
    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')

    function buttonSubmit(event) {
        
        event.preventDefault()
        var user ={
            name:name,
            username:username,
            password:password,
        }

        console.log(user);
    }

    return (
        <div>
            <h1>React Form Submission</h1>

            <form onSubmit={buttonSubmit}>
                <input type="text" placeholder='Name' onChange = { (e) => {setName(e.target.value)} } />
                <br />
                <input type="text" placeholder='UserName' onChange = { (e) => { setUserName(e.target.value)} } />
                <br />
                <input type="text" placeholder='Password' onChange = { (e) => { setPassword(e.target.value)} } />
                <br />
                <input type="submit" value='sumbit' />
            </form>
        </div>
    )
}
