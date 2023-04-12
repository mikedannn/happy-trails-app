import React from "react";
import './App.css';
import { Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
import Login from './components/Login';
import Signup from './components/Signup';
import Home from "./components/Home";

function App() {

    return (
        <div className="App" style={{paddingTop: "120px"}}>

            {/* <Router>
                <Routes>
                  <Route element={<Home/>} path="/" />
                  <Route element={<Login/>} path="/login" />
                  <Route element={<Signup/>} path="/signup" />
                </Routes>
            </Router> */}
    
            <div>
                <Signup/>
                <Login/>
            </div>
            <div className='App'>
                happy trails
            </div>  
        </div>
    );
}

export default App;