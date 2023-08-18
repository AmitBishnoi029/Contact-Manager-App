import React, { useState } from 'react';
import { LoginUser } from '../API/api';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const defaultValue = {
    email:"",
    password:"",
}

const Login = ({setUserLogin}) => {

  const navigate = useNavigate()

    const [user,setUser] = useState(defaultValue)

    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const login = async() =>{
      const {newUser,token,message} = await LoginUser(user,setUserLogin)
      toast.success(message)
      localStorage.setItem("contact-token",token)
      localStorage.setItem("contact-id",newUser._id)
      setTimeout(()=>{
        navigate("/")
      },2000)
    }

  return (
    <div className="login">
      <Toaster/>
    <h1>Login</h1>
    <input type="text" name="email" /*value={user.email}*/ onChange={handleChange} placeholder="Enter your Email"></input>
    <input type="password" name="password" /*value={user.password}*/ onChange={handleChange} placeholder="Enter your Password" ></input>
    <div className="button" onClick={login} >Login</div>
    <div>or</div>
    <div className="button"  onClick={() => navigate("/register")}>Register</div>
</div>
  )
}

export default Login
