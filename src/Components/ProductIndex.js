import React from 'react'
import { Link } from 'react-router-dom'
export const ProductIndex = () => {
     const shoes = {
       "shoes-1-10" : {
      name : "first shoes name",
        img :
       " https://media.gettyimages.com/photos/sport-shoes-isolated-on-white-background-picture-id1023642306?s=612x612"
    },
    "shoes-2-10" : {
      name : "Second shoes name",
        img :
       " https://img.freepik.com/free-photo/sport-running-shoes_1203-3414.jpg?size=626&ext=jpg"
    },
    "shoes-3-10" : {
      name : "Third shoes name",
        img :
       " https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    }
    return (
        <div>
             <h1>Welcome</h1>
          <ul>
          {Object.entries(shoes).map(([productID,{name,img}]) =>
          (
             <li  key={productID}>
              <Link to={productID}>
                 <h2>{name}</h2>
                <img src={img} alt={name}/>
                </Link>
             </li>
          ))}</ul>
        </div>
    )
}
