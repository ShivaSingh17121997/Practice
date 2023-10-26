import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import Home from "./Home"
import Dashboard from './Dashboard'

export default function AllRoutes() {
    return (
        <div>

           <Routes>
            <Route path="/" element={<Home /> }  ></Route>
            <Route path="/login" element={<Login/> }  ></Route>
            <Route path='/dashboard' element={ <Dashboard/> } ></Route>
           </Routes>

        </div>
    )
}
