import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './CatsProjectBody.css'
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css'
import CatsProjectCheckout from './CatsProjectCheckout'
import {Link} from 'react-router-dom'

export default function CatsProjectBody() {
 
    const[catsList,setCatsList] = useState([])

    // useEffect(()=>{

    //     axios.get('/public/VVIT/cats.json')
    //     .then((res)=>{
    //         console.log(res);
    //         setCatsList(res)
    //     }).then((err)=>{
    //         console.log(err);
    //     })

    // },[])

    const cats = [
        {
            "catName":"Raichel",
            "catBreed":"Persian Cat",
            "catImage":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Push_van_cat.jpg",
            "catPrize":"$350"
        },
        {
            "catName":"Sweety",
            "catBreed":"British Short Hair",
            "catImage":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Push_van_cat.jpg",
            "catPrize":"$500"
        },
        {
            "catName":"Raichel",
            "catBreed":"Persian Cat",
            "catImage":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Push_van_cat.jpg",
            "catPrize":"$350"
        },
        {
            "catName":"Sweety",
            "catBreed":"British Short Hair",
            "catImage":"https://upload.wikimedia.org/wikipedia/commons/4/4c/Push_van_cat.jpg",
            "catPrize":"$500"
        },
    ]
    console.log("data:",cats);

    function buyNow() {
        // return <div className='row m-10' style={{backgroundColor:'indigo',color:'white'}}>
            alert('Purchased Successfully')
        
    }

    const catsListData = cats.map((obj)=>{
        return <div className='col-md-6'>
            <img src={obj.catImage} className='img-fluid'/>
            <p style={{fontWeight:'bold', fontSize:'20px'}}>{obj.catName} belongs to breed {obj.catBreed}</p>
            <p style={{fontWeight:'bold', fontSize:'20px'}}>Prize : {obj.catPrize}</p>
            <button className='btn btn-primary' style={{marginBottom:'60px'}} onClick={buyNow}>Buy Now</button>
        </div>
    })

    return (
        <div className='row'>
            {catsListData}
        </div>
    )
}
