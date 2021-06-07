import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './HotelProjectBody.css'

export default function HotelProjectBody() {

    const[mealsList,setMealsList] = useState([])

    useEffect(()=>{

        axios.get('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
        .then((res)=>{
            console.log(res);
            setMealsList(res.data.meals)
        }).catch((err)=>{
            console.log(err);
        })
        
    },[])

    const mealsDetailedList = mealsList.map((obj)=>{
        return <div className='col-md-4'>
            <p>{obj.strMeal}</p>
            <img src={obj.strMealThumb} className='img-fluid'/>
            <p>{obj.idMeal}</p>
        </div>
    })

    return (
        <div>
            <div className='row'>

                {mealsDetailedList}

            </div>
        </div>
    )
}
