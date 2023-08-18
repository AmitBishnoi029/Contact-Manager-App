import React, { useEffect, useState }  from 'react'
import { getContactbyId , editContact} from '../API/api'
import { useLocation, useNavigate , useParams } from 'react-router-dom'
import toast, { Toaster } from 'react-hot-toast';


//  const defaultValue = {
//   name:"",
//   phone:"",
//  }

const EditContact = () => {

  const location = useLocation()
  const contact = location.state.contact[0]

    const [user,setUser] = useState(contact)
    const [myId,setMyId] = useState()

    const contactId = contact?._id;
    const navigate = useNavigate();
    useEffect(()=>{
      const id = localStorage.getItem("contact-id")
      // getelement(id,contactId)
      setMyId(id)
    },[ ])

    const handleChange = (e) =>{
    e.preventDefault()
    setUser({...user,[e.target.name]:e.target.value})
    }

    const editData = async() =>{
    const {success,contact,message} = await editContact(myId,user)
    
      if(success){
        toast.success(message)
        setTimeout(()=>{
          navigate("/")
        },2000)
        // {state:{data:newContact}}
      }
    } 

  return (
    <div className="login">
      <Toaster/>
    <h1>Edit Contact</h1>
    <input type="text" name="name" value={user?.name} onChange={handleChange}></input>
    <input type="number" name="phone" value={user?.phone} onChange={handleChange}></input>
    <div className="button"  onClick={editData} >Edit</div>
</div>
  )
}

export default EditContact
