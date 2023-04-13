import React, { useEffect } from "react";
import './App.css';
import { Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
// import ForgotPassword from "./userAuth/ForgotPassword";
// import ForgotPasswordResetForm from "./userAuth/ForgotPasswordResetForm";
// import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser } from "./features/user/userSlice"
// import { setResorts } from "./features/resorts/resortsSlice"
import Login from './components/Login';
import Signup from './components/Signup';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import LoginToggle from "./components/LoginToggle";
// import ProfilePage from './userAuth/ProfilePage.js'

function App() {

    const user = useSelector(state => state.user.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const location = useLocation()

  useEffect(()=>{
    fetch("/me")
    .then(r =>{
      if (r.ok){
        r.json().then((user) =>{
          dispatch(setCurrentUser(user))
        })
      } 
    })
  }, [location.pathname, dispatch, navigate])

return (
    <div className="App">
        <div id='navbar'>
            <NavBar/>
        </div>

        { !user ? <LoginToggle/> : 
        
        <Routes>
            <Route path="/" element={<Home/>}/> 
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          {/* <Route 
            path="/account" 
            element={<Account user={user}/>} 
          />
          <Route 
            path="/account/wines/new" 
            element={<WineForm/>} 
          />   
          <Route 
            path="/wines/:id" 
            element={<WineShowPage user={user}/>} 
          />    */}
        </Routes>
        }

    </div>
  );
}

export default App;