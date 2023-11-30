import React from 'react'
import { useEffect } from 'react'
import axios from "axios"
import { useState } from 'react'
import Card from './Card'
// import Pagination from './Pagination'

export default function Home() {
    const [data, setData] = useState([])
    //const [page, setPage] = useState(1)
    const [ascending, setascending] = useState(true)



    //https://dummyjson.com/products
    useEffect(() => {
        axios.get(`https://fakestoreapi.com/products?limit=5&sort${ascending ? "asc" : "desc"} `)
            .then((res) => {
                setData(res.data)
                console.log(res.data)
            })

    }, [ascending])

    // sorting function
    const handlesort = () => {
        setascending(!ascending)
        sortData(!ascending)
    }

    const sortData = (isAscending) => {
        const sortedData = [...data]// create a new array to avoide mutating original string

        sortedData.sort((a, b) => (isAscending ? a.price - b.price : b.price - a.price));
        setData(sortedData)
    }

    const handleDelete = (id) => {
        const deleteData = [...data]
       const updatedData = deleteData.filter((item)=> item.id !== id)
        setData(updatedData)

    }

    return (
        <div>

            <div><input style={{ padding: "10px", margin: "50px", width: "800px", }} type="text" placeholder='Search here' /></div>

            <div>
                <button onClick={handlesort} >Dsc</button>
                <button onClick={handlesort} >Asc</button>
            </div>

            <div style={{ display: "flex", justifyContent: "space-around ", gridTemplateRows: "auto", gap: "20px", textalign: "center", padding: "10px", }} >
                {data?.map((item) => {
                    return <> {<Card  {...item} handleDelete={() => handleDelete(item.id)} />}
                    </>
                })}
            </div>
            {/* 
            <div>
                <button disabled={page === 0} onClick={(page)=>setPage(page-1)} > Prev</button>
                      <button>{page}</button>
                <button onClick={(page)=>setPage(page+1)} >Next</button>
            </div> */}
        </div>
    )
}



//  sort function practice 
//  const [ascending, setAscending] = (true)
//  const [data, setData] = useState([])
//  useState(()=>{
//  axios.get(` api?sort=${ascending ? "asc" : "desc"} `)
//  }, [ascending])
//
//  const handleSort = (isAscending) => {
//     setAscending(!ascending)
//      sortData(!ascending)
//  }

// const sortData = (isAscending) => {
//    const sortedData = [...data]
//    sortedData.sort((a,b) => ascending ? a.sort - b.sort : b.sort - a.sort )
//    setData(sortedData)
// }
//
//  return 
//      <button onClick={handleSort} >Desc</button>
//      <button onClick={handleSort} >Asc</button>
//
//