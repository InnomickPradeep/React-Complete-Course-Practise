import React from 'react'
import Child from './Child'

function Parent(){
    return <div>
        <h1>This Thing Printed from Parent Component</h1>
        <Child />
    </div>
}

export default Parent