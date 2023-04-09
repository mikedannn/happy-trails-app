import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

const Signup = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [role, setRole] = useState("")
    const [email, setEmail] = useState("")
    const [errors, setErrors] = useState([])

    const dispactch = useDispatch();

    const signup = () => {
        dispactch({
            type : "SIGNUP",
            payload : {
                username, email, password, passwordConfirmation, role
            }
        })
    }


    return (
  
        <div className="signUpForm">
        <h1 >Create Account</h1>
        <form onSubmit={signup}>
          <div>
              <label htmlFor="username">Username:</label>
                  <input 
                      type="text" 
                      id="username" 
                      name="username" 
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
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
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
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
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                  >
                  </input>
          </div>
              <br />
          <div>
              <label htmlFor="confirm-password">Confirm Password: </label>
                  <input 
                      type="password" 
                      id="password_confirmation" 
                      name="password_confirmation" 
                      value={passwordConfirmation}
                      onChange={(e) => setPasswordConfirmation(e.target.value)}
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
                    value={role}
                    onChange={(e) => setRole(e.target.value)}
                    required
                >
                    <option value="skier">Skier</option>
                    <option value="snowboarder">Snowboarder</option>
                </select>
          </div>

          {
          errors ? 
          <div className="errors-container">
          {errors.map((err) => (
                  <span id="error-message" key={err}>{`Invalid: ${err}`}</span>))}
              </div> 
          : null 
          }
              <br />
              <input className='formButton' type="submit" value="Create Account" />
        </form>
        </div>
    )   
}

export default Signup;