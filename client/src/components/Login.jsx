import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function LoginForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const users = useSelector(state => state.users)
    
    const login = () => {
        
        const payload = users.find(user => user.username === username && user.password === password)
    
        if(payload){
            dispatch({
                type : 'LOGIN',
                payload
            })
            alert('SUCCESS!')
        } else {
            alert('Wrong username or password!')
        }
    }

    return (
        <div>
            <div className="welcomeHeader">
                 Welcome to Happy Trails!
            </div>  
        <div  className="loginForm">
          <h1>Login</h1>
          <form onSubmit={login}>
            <div>
                <label htmlFor="username">Username:</label>
                    <input 
                        type="text" 
                        id="username" 
                        name="username"
                        className="username" 
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
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
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    >
                    </input>
            </div>
                {
                error ? 
                <div className="errors-container">
                    <span id="error-message">{error}</span>
                </div> 
                : null 
                }
            <br />
                <input className="formButton" type="submit" value="Login" />
          </form>
        </div>
        </div>
    );

}

export default LoginForm;