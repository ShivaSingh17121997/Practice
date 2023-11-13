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
            axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=4`)
                .then((data) => {
                    setData(data.data)
                    console.log(data.data, "data")
                })
        }

        else {
            axios.get(`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-employees?page=${page}&limit=4&filterBy=department&filterValue=${hrdata}`)
                .then((data) => {
                    setData(data.data)
                })

        }

    }, [hrdata, page])

    return (
        <div  >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }} >
                <h1 style={{
                    backgroundColor: "#3498db", color: "#fff", padding: "20px", borderRadius: "10px", textAlign: "center", textTransform: "uppercase", boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", }} >Employee management App</h1>

            </div>

            <div>
                <select style={{
                    padding: "10px", fontSize: "16px", border: "2px solid #3498db", borderRadius: "5px", outline: "none", backgroundColor: "#9af0ff", color: "#333", cursor: "pointer", transition: "border-color 0.2s",}} onChange={(e) => setHrData(e.target.value)}  >
                    <option value="">--Select Department--</option>
                    <option value="hr">Hr</option>
                    <option value="finance">Finance</option>
                    <option value="marketing">Marketing</option>
                    <option value="engineering">Engineering</option>
                    <option value="operations">Operations</option>
                </select>
            </div>


            {data?.data?.map((item) => {
                return <Card   {...item} />
            })}

            <div>
                {<Pagination currentPage={page} totalPages={data.totalPages} handlePageChange={(val) => setPage(val)} />}
            </div>

        </div>
    )
}
