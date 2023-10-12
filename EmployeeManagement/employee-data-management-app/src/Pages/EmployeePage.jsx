import React, { useEffect, useState } from 'react'
import axios from "axios"
import Card from './Card'
import Pagination from './Pagination'

export default function EmployeePage() {
    const [data, setData] = useState([])
    const [hrdata, setHrData] = useState("")
    const [page, setPage] = useState(1)
    useEffect(() => {
        if (hrdata === "") {
            axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=6`)
                .then((data) => {
                    setData(data.data)
                    console.log(data.data, "data")
                })
        }
        
        else {
            axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=6&filterBy=department&filterValue=${hrdata}`)
            .then((data)=>{
                setData(data.data)
            })

        }

    }, [hrdata, page])

    return (
        <div>
            <h1 style={{backgroundColor:"#f4ff95", padding:"10px"}} >Employee management App</h1>

            <div>
                <select style={{ padding:"10px" }} onChange={(e) => setHrData(e.target.value)}  >
                    <option value="">--Select Department--</option>
                    <option value="hr">hr</option>
                    <option value="finance">finance</option>
                    <option value="marketing">marketing</option>
                    <option value="engineering">engineering</option>
                    <option value="operations">operations</option>
                </select>
            </div>
          

            {data?.data?.map((item) => {
                return <Card   {...item} />
            })}

            <div>
                {<Pagination currentPage= {page} totalPages={data.totalPages} handlePageChange = {(val)=>setPage(val)} />}
            </div>

        </div>
    )
}
