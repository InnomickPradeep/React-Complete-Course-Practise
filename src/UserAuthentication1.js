import React, { useState } from 'react'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './UserAuthentication1.css'
import swal from 'sweetalert'

export default function UserAuthentication1(){

    const[username,setUserName] = useState('')
    const[password,setPassword] = useState('')


    function checkEval(event){

        event.preventDefault();

        if(username==='admin' && password==='admin'){
            swal('Login Successful','You are Successfully Logged In','success');
        }
        else{
            swal('Login Failed','Invalid Credentials','error');
        }
    }
    
        return (
            <div className='row justify-content-center'>

                <div className='col-md-4'>
                    <h1>User Authentication</h1>
                    <form onSubmit={checkEval}>
                        <input type="text" placeholder='username' className='form-control' value={username} 
                        onChange={ (e) => {setUserName(e.target.value)} }/>
                        <input type="text" placeholder='password' className='form-control' value={password} 
                        onChange = { (e) => { setPassword(e.target.value) } }/>
                        <button className='btn btn-primary'>Click Me</button>
                    </form>
                </div>

            </div>
        )
}
