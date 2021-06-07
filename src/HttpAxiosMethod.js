import React, { useState } from 'react'
import axios from 'axios'

export default function HttpAxiosMethod() {

    const[posts,setPosts] = useState([])

    function getDataFromAxios() {
        
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then((response)=>{
            console.log(response);
            setPosts(response.data)
        }).catch((error)=>{
            console.log(error);
        })

    }

    const titlesList = posts.map((obj)=>{
        return <div>
            <h1>{obj.id}{'). '}{obj.title}</h1>
        </div>
    })



    return (
        <div>
            <button onClick = {getDataFromAxios}>Get Data from Axios</button>
            {titlesList}
        </div>
    )
}
