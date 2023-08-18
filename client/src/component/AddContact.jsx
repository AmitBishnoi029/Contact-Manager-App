import React, { useEffect, useState }  from 'react'
import { Addcontact } from '../API/api'
import { useNavigate } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';

const defaultContact = {
    name:"",
    phone:"",
}

const AddContact = () => {

    const [user,setUser] = useState(defaultContact)
    const [id,setId] = useState()
    const navigate = useNavigate();

    useEffect(()=>{
      const id = localStorage.getItem("contact-id")
      setId(id)
    },[])

    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const addContact = async() =>{
      const {name , phone} = user
      if(name && phone){
      user.id = id
      const {success,newContact,message} = await Addcontact(user).then(response=>response.data);
      if(success){
        toast.success(message)
        setTimeout(()=>{
          navigate("/",{state:{data:newContact}})
        },2000)
      }
      }else{
        alert("Detail is invalid")
      }
    }

  return (
    <div className="login">
      <Toaster/>
    <h1>Add Contact</h1>
    <input type="text" name="name" /*value={user.email}*/ onChange={handleChange} placeholder="Enter Name"></input>
    <input type="number" name="phone" maxLength={10} minLength={10} /*value={user.password}*/ onChange={handleChange} placeholder="Enter Number" ></input>
    <div className="button" onClick={addContact} >Add</div>
</div>
  )
}

export default AddContact
