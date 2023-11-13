import React from 'react'

export default function Card({ image, department, gender, name, salary }) {
    return (
        <div  >

            <div className='card' style={{
                border: "0.5px solid #d1d1d1",
                borderRadius: "10px",
                margin: "30px",
                padding: "10px",
                backgroundColor: "#fff",
                boxShadow: " rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
            }} >
                <div>

                    <div style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: "5px",
                        alignItems: "center",
                    }} >
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
