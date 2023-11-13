import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import Card from './Card'
import Pagination from './Pagination'

export default function Home() {
    const [data, setData] = useState([])
    const [page, setPage] = useState(1)
    //https://dummyjson.com/products
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?page=${page}&limit=20&sort=desc `)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })

    }, [page])

    const handleSort = () => {
        
    }

    return (
        <div>

            <div><input style={{ padding: "10px", margin: "50px", width: "400px", }} type="text" placeholder='Search here' /></div>

            <div>
                <button onClick={handleSort} >Dsc</button>
                <button onClick={handleSort} >Asc</button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around ", gridTemplateRows: "auto", gap: "20px", textalign: "center", padding: "300px" }} >
                {data?.map((item) => {
                    return <> {<Card  {...item} />}
                    </>
                })}
            </div>

            <div>
                {<Pagination currentPage={page} onChange={(value) => setPage(value)} />}
            </div>
        </div>
    )
}
