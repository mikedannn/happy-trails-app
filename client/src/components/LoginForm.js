// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";

// function LoginForm() {

//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");

//     const dispatch = useDispatch();
//     const users = useSelector(state => state.users)
    
//     const login = () => {
//         const payload = users.find(user => user.username === username && user.password === password)

//         if(payload) {
//             dispatch({
//                 type : "LOGIN",
//                 payload
//             })
//             alert('logged in')
//         } else {
//             alert("Invalid username or password!")
//         }
//     }

//     return (
//         <form className="login">
//             <input 
//                 type="text" 
//                 placeholder="Username" 
//                 value={username}
//                 onChange={e => setUsername(e.target.value)}
//             />
//             <br/>
//             <input 
//                 type="password" 
//                 placeholder="Password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}
//             />
//             <br/>
//             <input 
//                 type="button" 
//                 placeholder="Login"
//                 onClick={login}
//             />
//         </form>
//     )

// }

// export default LoginForm;