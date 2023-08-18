import React, { useState , useEffect} from 'react'
import ShowList from './ShowList'
import { useLocation, useNavigate } from 'react-router-dom'
import { getContacts  } from '../API/api'

const ContactManager = ({setUserLogin}) => {

  // const location = useLocation()
  // const data = location?.state?.data
  const [contact , setContact] = useState([])
  const [search , setSearch] = useState("")
  const [id,setId] = useState()
  const navigate = useNavigate();

  useEffect(()=>{
    const id = localStorage.getItem("contact-id")
      getAllContacts(id);
    setId(id)
  },[])

  const getAllContacts = async(id) =>{
    const contact = await getContacts(id);
      setContact(contact);

  }
  return (

    <div className='contact-manager' >
      <div className='manager'>
        <div>
        <h1>Contact Manager</h1>
        <button onClick={()=> {setUserLogin(sessionStorage.removeItem("token"));navigate("/login")}} >Logout</button>
        </div>
      
      </div>
      <div className='contacts'>
        <div className='contact-box' >
        <input type={'search '} name="name" placeholder="Search your contact" onChange={(e)=> setSearch(e.target.value)} />
        <button onClick={()=> navigate("/addContact")} > + </button>

        <div className='allContacts'>
           {
            contact && contact.filter((user) => user.name.toLowerCase().includes(search)).map((item)=>(
              <ShowList key={item?._id} id={item._id} name={item.name} phone={item.phone} setContact={setContact} myId={id} />
            ))
           }
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactManager
