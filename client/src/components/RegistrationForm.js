import React, { useState } from "react";
import { useDispatch } from "react-redux";

function RegistrationForm() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [role, setRole] = useState("");

    const dispatch = useDispatch();

    const register = () => {
        dispatch({
            type: "REGISTER", 
            payload: {
                username, email, password, role
            }
        })
    }

    return (
        <form className="register">
            <input 
                type="text" 
                placeholder="Username" 
                value={username}
                onChange={e => setUsername(e.target.value)}
            />
            <br/>
            <input 
                type="text" 
                placeholder="Email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <br/>
            <input 
                type="password" 
                placeholder="Password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <br/>
            <input 
                type="password" 
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
            />
            <br/>
            <select 
                placeholder="Select Role"
                value={role}
                onChange={e => setRole(e.target.value)}>
                    <option value="Skier">Skier</option>
                    <option value="Snowboarder">Snowboarder</option>
            </select>
            <br/>
            <input 
                type="button" 
                placeholder="Register"
                onClick={register}
            />
        </form>
    )

}

export default RegistrationForm