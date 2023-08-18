import './App.css';
import { useEffect, useState } from 'react';
import ContactManager from './component/ContactManager';
import Login from './component/Login';
import Register from './component/Register';
import AddContact from './component/AddContact';
import EditContact from './component/EditContact';

import {BrowserRouter as Router , Routes , Route} from "react-router-dom"

import "./styles/contactManager.scss"
import "./styles/showlist.scss"
// import "./styles/home.scss"
import "./styles/login.scss"
import "./styles/register.scss"





function App() {

  const [user , setUserLogin] = useState({})
  const [token,setToken] = useState("")
  useEffect(()=>{
    const token = localStorage.getItem("contact-token")
    setToken(token)
  },[])

  return (
    <div className="App">

    <Router>
      <Routes>
        <Route exact path='/' element={token?<ContactManager setUserLogin={setUserLogin} />:<Login setUserLogin={setUserLogin} setToken={setToken} />}/>
        <Route exact path='/register' element={<Register/>} />
        <Route exact path='/login' element={<Login setUserLogin={setUserLogin}/>}/>
        <Route exact path='/addContact' element={<AddContact/>}/>
        <Route exact path='/edit' element={<EditContact/>}/>
      </Routes>
    </Router>


    </div>
  );
}

export default App;
