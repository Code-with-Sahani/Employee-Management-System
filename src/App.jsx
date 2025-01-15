import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Authorization/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AuthContext from './LocalStorage/ContextAPI/AuthContext'
import { setLocalStorage } from './LocalStorage/LocalStorage'

const App = () => {
  const [user, setUser] = useState(null)
  const [currentUser, setCurrentUser] = useState(null)
  const authData = useContext(AuthContext)

  useEffect(() => {
    setCurrentUser(JSON.parse(localStorage.getItem("currentUser")))
    setUser(localStorage.getItem("user"))
  }, [])
  function handleLogin(email, password) {
    if (authData && authData?.admin.find((e) => email == e.email && password == e.password)) {
      setCurrentUser(authData?.admin.find((e) => email == e.email && password == e.password))
      localStorage.setItem("currentUser", JSON.stringify(authData?.admin.find((e) => email == e.email && password == e.password)))
      setUser('admin');
      localStorage.setItem("user", 'admin')

    } else if (authData && authData?.employees.find((e) => email == e.email && password == e.password)) {
      setCurrentUser(authData?.employees.find((e) => email == e.email && password == e.password))
      localStorage.setItem("currentUser", JSON.stringify(authData?.employees.find((e) => email == e.email && password == e.password)))
      setUser('employees');
      localStorage.setItem("user", 'employees')

    } else {
      alert('Invalid login credentials');
    }
  }
  function logOut() {
    setUser(null)
    setCurrentUser(null)
    localStorage.removeItem("currentUser")
    localStorage.removeItem("user")
  }
  return (
    <>
      {!user ? (
        <Login handleLogin={handleLogin} />
      ) : user === 'admin' ? (
        <AdminDashboard data={currentUser} logOut={logOut} />
      ) : (
        <EmployeeDashboard data={currentUser} logOut={logOut} />
      )}

    </>
  )
}
export default App 