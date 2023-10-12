import React from 'react'

export default function Card({ image, department, gender, name, salary }) {
    return (
        <div  >

            <div className='card' style={{ border: "1px solid black" , margin:"30px",}} >
                <div>

                    <div  style={{ display:"flex", flexDirection:"row", justifyContent:"space-between" , padding:"5px 5px 5px 5px" }} >
                    <img height="40px" src={image} alt={name} />
                        <p>Name:  {name}</p>
                        <p>Dept.:  {department}</p>
                        <p>Gender:  {gender}</p>
                        <p>Salary:  {salary}</p>
                    </div>

                </div>

            </div>

        </div>
    )
}
