import React, { createContext, useState } from 'react'
export const AuthContext = createContext();
export default function AuthContextProvider({ children }) {
    const [isAuth, setIsAuth] = useState(false);
    const [token, setToken] = useState(null);
    function isLogin(isToken) {
        setIsAuth(true);
        setToken(isToken);
    }
    let isLogout = () => {
        setIsAuth(false);
        setToken(null);
    }
    
    return (
        <AuthContext.Provider value={{ isLogin, isLogout }} >
            {children}
        </AuthContext.Provider>
    )
}

