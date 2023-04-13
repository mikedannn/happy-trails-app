import React, {useState} from "react";
import Login from "./Login";
import Signup from "./Signup";

import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';



function LoginToggle(){

    const [showLogin, setShowLogin] = useState(true)

    return(
        <Card>
                {
                showLogin ? <Login /> : <Signup />
                }       

            <Button 
                onClick={() => setShowLogin(!showLogin)}
                className="formButton"
                >
                { showLogin ? "or sign up" : "or log in"}
            </Button>
        </Card>
    );
}

export default LoginToggle;