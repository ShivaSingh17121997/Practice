import React, { useContext, useState } from 'react'
import {useNavigate} from "react-router-dom"
import { authContext } from '../AuthContext/AuthContextProvider';

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {loginUser} = useContext(authContext)

    const navigate = useNavigate()
    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            let res = await fetch("https://reqres.in/api/login", {

                method: "POST",
                body: JSON.stringify({ email, password }),
                headers: {
                    "Content-type": "application/json"
                }
            });

            res = await res.json()
            console.log(res)

            if(res.token){
                loginUser(res.token)
                navigate("/home")
            }

        }
        catch (error) {
            console.log(error)
        }

      

    }

    return (
        <div>
            <form onSubmit={handleSubmit} action="">

                <input type="email" placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)} />  <br /> <br />
                <input type="password" placeholder='Enter password' value={password} onChange={(e) => setPassword(e.target.value)} />  <br /> <br />
                <input type="submit" />
            </form>
        </div>
    )
}
