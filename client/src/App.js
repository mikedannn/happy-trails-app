import React, { useEffect } from "react";
import './App.css';
import { Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
// import ForgotPassword from "./userAuth/ForgotPassword";
// import ForgotPasswordResetForm from "./userAuth/ForgotPasswordResetForm";
// import Navbar from "./components/Navbar";
import { useDispatch, useSelector } from "react-redux"
import { setUser } from "./features/user/userSlice"
// import { setResorts } from "./features/resorts/resortsSlice"
import Login from './components/Login';
import Signup from './components/Signup';
import Home from "./components/Home";
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
        r.json().then(data =>{
          dispatch(setUser(data))
        })
      } 
      else if (location.pathname === '/signup') {
        return null
      } else if (location.pathname === '/password/reset/edit'){
        return null
      } else if  (location.pathname === '/forgotpassword'){
        return null
      } else {
        navigate('/login')
      }
    })
  }, [location.pathname, dispatch, navigate])

// fetch resorts
//   useEffect(() => {
//     if(user !== null){
//     fetch('/resorts')
//     .then(r => r.json())
//     .then(data =>
//       dispatch(setResorts(data)))
//     }
//     },[user, dispatch])


// fetch user trails
//   useEffect(() => {
//     if(user !== null){
//     fetch('/user_trails')
//     .then(r => {
//         if(r.ok){
//             r.json().then(data => {
//                 dispatch(setUserTrails(data))
//             })
//         } else {
//             return null
//         }
//     })
//   }
// },[user, dispatch])
// 

return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        {/* <Route path="/forgotpassword" element={<ForgotPassword />}/> */}
        {/* <Route path="/password/reset/edit" element={<ForgotPasswordResetForm />}/> */}
        {/* <Route path="/createtrip" element={<CreateTripForm />}/> */}
        {/* <Route path="/mytrip/:id" element={<TripPage />}/> */}
        {/* <Route path="/adventure/:id" element={<AdventurePage />}/> */}
        {/* <Route path="/myprofile/:id" element={<ProfilePage/>}/> */}
        <Route exact path="/" element={<Home/>}/>
      </Routes>
    </div>
  );
}

export default App;