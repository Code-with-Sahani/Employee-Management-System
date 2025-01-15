import React, { useEffect, useState } from 'react'
import { getLocalStorage, setLocalStorage } from '../LocalStorage';
import AuthContext from './AuthContext';


const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState(null)

    useEffect(() => {   
        const { admin, employees } = getLocalStorage()
        setUserData({ admin, employees })
    }, [])


    return (
        <AuthContext.Provider value={userData}>
            {children}
        </AuthContext.Provider>
    )
}
export default AuthProvider
