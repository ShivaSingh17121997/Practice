import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'

export default function Home() {
    const [data, setData] = useState([])
    //https://dummyjson.com/products
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=10
        `)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })

    }, [])

    return (
        <div>
            <div><input style={{ padding: "10px", margin: "50px", width: "400px",  }} type="text" placeholder='Search here'  /></div>

            <div style={{display:"flex", justifyContent:"space-around " , gridTemplateRows:"auto", gap:"20px" , textalign:"center", padding:"300px" }} >
                {data?.map((item) => {
                    return <> { <Card  {...item} /> }
                    </>
                })}
            </div>

            <div>
                {<Pagination   />}
            </div>
        </div>
    )
}
