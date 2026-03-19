import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdmineDashboard from './components/Dashboard/AdmineDashboard'
import { getLocalStorege, setLocalStorege } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'

const App = () => {

  const [user, setUser] = useState(null)
  const [loggedInUser, setLoggedInUser] = useState(null)
   const authData = useContext(AuthContext)

   useEffect(() => {
    const loggedUser = localStorage.getItem("loggedUser")
   if(loggedUser){
    const userData = JSON.parse(loggedUser)
     setUser(userData.role)
      setLoggedInUser(userData.data)
  }
    
   }, [])
   
   const handleLogin =(email,password) =>{
    if(email=='admin@example.com' && password == '123'){
      setUser('admin')
       localStorage.setItem("loggedUser", JSON.stringify({role:"admin"}))
        
      }else if(authData){
      const employee = authData?.employees?.find(
    (e) => e.email === email && e.password === password
  )
      if (employee) {
    setUser('employee')
    setLoggedInUser(employee)
     localStorage.setItem("loggedUser", JSON.stringify({role:"employee", data:employee}))
       
    }  
}
   
      alert("Invalid Information")
  
  }

  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/>:''}
     
      {user === 'admin' && <AdmineDashboard />} 

      {user === 'employee' && (<EmployeeDashboard data = {loggedInUser}/>)}
      
    </>
  )
}

export default App
