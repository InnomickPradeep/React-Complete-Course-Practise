import React from 'react'
import ChildFunctionalProps from './ChildFunctionalProps'

function ParentFunctionalProps(){

    return <div>
        <h1>Parent Functional Props</h1>

        <ChildFunctionalProps country = 'India' game = 'Chess' />
    </div>
    
}

export default ParentFunctionalProps