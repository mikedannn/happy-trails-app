import React, {useState} from "react";
import Login from "../components/Login";
import Signup from "../components/Signup";


function Login({ onLogin }){

    const [showLogin, setShowLogin] = useState(true)

    return(
        <div>
                {
                showLogin ? <LoginForm onLogin={onLogin} /> : <Signup onLogin={onLogin} />
                }       

            <button 
                onClick={() => setShowLogin(!showLogin)}
                className="formButton"
                >
                { showLogin ? "or sign up" : "or log in"}
            </button>
        </div>
    );
}

export default Login;