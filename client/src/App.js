import React, { useState, useEffect } from "react";
import './App.css';
// import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
    // const [user, setUser] = useState(null);
    
    // useEffect(() => {
    //     fetch("/me")
    //         .then((response) => {
    //           if (response.ok) {
    //             response.json().then((data) => setUser(data))
    //         }
    //         });
    // }, []);


    return (
        <div className="App" style={{paddingTop: "120px"}}>
    
            <div>
                {/* <Signup/> */}
                <Login/>
            </div>
            <div className='App'>
                happy trails
            </div> 
        </div>
    );
}

export default App;