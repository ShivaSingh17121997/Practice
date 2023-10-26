import React from 'react'

export default function Card({title,body,id, image, price, category, rating  }) {
    console.log(title,'from cards')

  return (
    <div>
        <div style={{border:"1px solid black" ,width:"100px", textAlign:"center", gap:"10px", display:"grid", padding:"10px"}} >
          <img src={image} width="100px" height="100px" alt="" />
            <p>{id}</p>
            <p>Title: {title}</p>
            <p>Categoty: {category}</p>
            <p>Price: {price}</p>
            <p>Rating: {rating.rate}</p>
            <p>Quantity: {rating.count}</p>
        </div>
    </div>
  )
}
