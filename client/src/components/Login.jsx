import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/user/userSlice';
import {Link, useNavigate} from 'react-router-dom';


function Login() {
    const [form, setForm] = useState({
        username: "",
        password: ""
    });
    const [errors, setErrors] = useState([]);

    const displayErrors = errors?.map(error => <p key={error} style={{color: 'red'}}>{error}</p>)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(form)
        }
        fetch('/login', configObj)
        .then(r => {
            if (r.ok){
                r.json().then(data => {
                  dispatch(setUser(data))
                  navigate("/")
                })
            } else {
              r.json().then(data => {
                setErrors(data.errors)
              })
            }
        })
    };

    function handleChange(e){
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <div className="welcomeHeader">
                 Welcome to Happy Trails!
            </div>  
        <div  className="loginForm">
          <h1>Login</h1>
          <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className="username" 
                        value={form.username}
                        onChange={handleChange}
                        autoFocus={true}
                        required
                    >
                    </input>
            </div> 
                <br />
            <div>
                <label htmlFor="password">Password: </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password" 
                        className='password'
                        value={form.password} 
                        onChange={handleChange}
                        required
                    >
                    </input>
            </div>
            <div className="errors-container">
                {errors ? displayErrors : null }
            </div> 
            <br />
                <input className="formButton" type="submit" value="Login" />
          </form>
            <button>
                <Link to="/signup" >
                  Don't have an account? Sign Up
                </Link>
              </button>
        </div>
        </div>
    );

}

export default Login;