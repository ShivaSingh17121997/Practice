import React, { createContext, useState } from 'react'


export const authContext = createContext();

export default function AuthContextProvider({ children }) {

    const [state, setState] = useState({ isAuth: false, token: null });

    const loginUser = (token) => {
        setState({ ...state, isAuth: true, token: token })
    };

    const logoutUser = () => {
        setState({ ...state, isAuth: false, token: null })
    }

    return (
        <div>
            <authContext.Provider value={{authState : state, loginUser, logoutUser}} >{children}</authContext.Provider>

        </div>
    )
}
