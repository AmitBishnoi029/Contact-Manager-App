import React, { useState } from 'react';
import { RegisterUser } from '../API/api';
import { useNavigate } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

const defaultValue = {
    name:"",
    email:"",
    password:"",
    reEnterPassword:"",
}

const Register = () => {
    
  const [user,setUser] = useState(defaultValue)
  const navigate = useNavigate()

  const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
  }

  const register = async(e) =>{
    e.preventDefault()
    const {name , email , password , reEnterPassword} = user;
    if(name && email && password && (password === reEnterPassword)){
      const {newUser,token,message} = await RegisterUser(user)
      toast.success(message)
      localStorage.setItem("contact-token",token)
      localStorage.setItem("contact-id",newUser._id)
      setTimeout(()=>{
        navigate("/")
      },2000)
    }else{
      alert("Invelid input");
    }
  }

  return (
    <div className="register">
      <Toaster/>
    <h1>Register</h1>
    <input type="text" name="name" /*value={user.name}*/ placeholder="Your Name" onChange={ handleChange }></input>
    <input type="text" name="email" /*value={user.email}*/ placeholder="Your Email" onChange={ handleChange }></input>
    <input type="password" name="password" /*value={user.password}*/ placeholder="Your Password" onChange={ handleChange }></input>
    <input type="password" name="reEnterPassword" /*value={user.reEnterPassword}*/ placeholder="Re-enter Password" onChange={ handleChange }></input>
    <div className="button" onClick={register} >Register</div>
    <div>or</div>
    <div className="button" onClick={() => navigate("/login")}>Login</div>
</div>
  )
}

export default Register
