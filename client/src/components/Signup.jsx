import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setCurrentUser } from '../features/user/userSlice';
import {Link, useNavigate} from 'react-router-dom';


const Signup = () => {
    const [errors, setErrors] = useState([])
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        role: ''
      });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const displayErrors = errors?.map(error => <p style={{color: "red"}}>{error}</p>);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
          username: formData.username,
          email: formData.email,
          password: formData.password,
          password_confirmation: formData.passwordConfirmation,
          role: formData.role
        }
        const configObj = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }
        fetch('/signup', configObj)
        .then(r => {
            if (r.ok){
                r.json().then(data => {
                dispatch(setCurrentUser(data))
                navigate("/")
                })
            } else {
                r.json().then(data => setErrors(data.errors))
            }
        })
    };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };

    return (
  
        <div className="signUpForm">
        <h1 >Create Account</h1>
        <form onSubmit={handleSubmit}>
          <div>
              <label htmlFor="username">Username:</label>
                  <input 
                      type="text" 
                      id="username" 
                      name="username" 
                      value={formData.username}
                      onChange={handleChange}
                      required
                  >
                  </input>
          </div> 
              <br />
          <div>
              <label htmlFor="email">Email:</label>
                  <input 
                      type="text" 
                      id="email" 
                      name="email" 
                      value={formData.email}
                      onChange={handleChange}
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
                      value={formData.password}
                      onChange={handleChange}
                      required
                  >
                  </input>
          </div>
              <br />
          <div>
              <label htmlFor="confirm-password">Confirm Password: </label>
                  <input 
                      type="password" 
                      id="passwordConfirmation" 
                      name="passwordConfirmation" 
                      value={formData.passwordConfirmation}
                      onChange={handleChange}
                      required
                  >
                  </input>
          </div>
              <br />
          <div>
              <label htmlFor="role">Select Role: </label>
              <br/>
                <select
                    className="customSelect"
                    placeholder="Select Role"
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                >
                    <option value="skier">Skier</option>
                    <option value="snowboarder">Snowboarder</option>
                </select>
          </div>

          {
          
        <div className="errors-container">
            {errors ? displayErrors : null }
        </div> 
          
          }
              <br />
              <input className='formButton' type="submit" value="Create Account" />
        </form>
        </div>
    )   
}

export default Signup;