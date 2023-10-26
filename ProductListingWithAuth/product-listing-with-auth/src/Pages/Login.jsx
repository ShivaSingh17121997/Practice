import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContextProvider';
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const {isLogin}=useContext(AuthContext)
    const navigate = useNavigate();
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

            const data = await res.json()
            //  res = await res.json()
            console.log(data.token)

            if (data.token) {
                isLogin(data.token)
              return  navigate("/dashboard")
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
