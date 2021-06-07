import React from 'react'

export default function HttpFetchMethod() {

    async function getData() {
        
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')

        console.log(await response.json());
    }

    return (
        <div>
            <button onClick = {getData}>Get Data</button>
        </div>
    )
}
