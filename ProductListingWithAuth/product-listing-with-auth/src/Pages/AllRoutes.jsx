import React from 'react'
import { Routes } from 'react-router-dom'
import Login from './Login'
import Home from "./Home"

export default function AllRoutes() {
    return (
        <div>

           <Routes>
            <Route path="/" element={<Home /> }  ></Route>
            <Route path="/login" element={<Login/> }  ></Route>

           </Routes>

        </div>
    )
}
