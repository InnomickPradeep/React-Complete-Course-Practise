import React from 'react'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
export default function CatsProjectCheckout(props) {
    return (
        <div className='row m-10'>
            <h1>You have Successfully Purchased Cat with prize {props.catPrize}</h1>
        </div>
    )
}
