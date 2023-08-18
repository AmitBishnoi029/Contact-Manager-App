import React from 'react';
import { Link , useNavigate } from 'react-router-dom';
import {deleteContacts, getContactbyId} from "../API/api.js";
import toast, { Toaster } from 'react-hot-toast';


const ShowList = ({id ,name, phone,setContact,myId}) => {

  const navigate = useNavigate()

  const getcontactById = async() =>{
    const {success,newContact} = await getContactbyId(myId,id)
    if(success){
      navigate("/edit",{state:{contact:newContact,myId}})
    }
  }

  const doDelete = async() =>{
   const {success,newContact,message} = await deleteContacts(myId,id)
   toast.success(message)
   if(success){
    toast.success(message)
    setTimeout(()=>{
      setContact(newContact)
    },2000)
   }
  }

  return (
    <div  className='showList'>
      <Toaster/>
      <div className='info'>
      <h2>{name}</h2>
      <p>{phone}</p>
      </div>
      <div className='editDelete' >
        <button onClick={getcontactById}>Edit</button>
        <button onClick={doDelete}>Delete</button>
        
      </div>
    </div>
  )
}

export default ShowList
