// import React, { useState, useEffect } from 'react';
// import { Route, Routes } from "react-router-dom";
// import { useDispatch } from 'react-redux';
// import { signup } from '../actions/authActions';

// const Signup = () => {
//     const [errors, setErrors] = useState([])
//     const [formData, setFormData] = useState({
//         username: '',
//         email: '',
//         password: '',
//         passwordConfirmation: '',
//         role: ''
//       });

//     const dispatch = useDispatch();

//     const handleSubmit = e => {
//         e.preventDefault();
//         dispatch(signup(formData));
//       };
    
//       const handleChange = e => {
//         setFormData({
//           ...formData,
//           [e.target.name]: e.target.value
//         });
//       };

//     return (
  
//         <div className="signUpForm">
//         <h1 >Create Account</h1>
//         <form onSubmit={handleSubmit}>
//           <div>
//               <label htmlFor="username">Username:</label>
//                   <input 
//                       type="text" 
//                       id="username" 
//                       name="username" 
//                       value={formData.username}
//                       onChange={handleChange}
//                       required
//                   >
//                   </input>
//           </div> 
//               <br />
//           <div>
//               <label htmlFor="email">Email:</label>
//                   <input 
//                       type="text" 
//                       id="email" 
//                       name="email" 
//                       value={formData.email}
//                       onChange={handleChange}
//                       required
//                   >
//                   </input>
//           </div> 
//               <br />
//           <div>
//               <label htmlFor="password">Password: </label>
//                   <input 
//                       type="password" 
//                       id="password" 
//                       name="password" 
//                       value={formData.password}
//                       onChange={handleChange}
//                       required
//                   >
//                   </input>
//           </div>
//               <br />
//           <div>
//               <label htmlFor="confirm-password">Confirm Password: </label>
//                   <input 
//                       type="password" 
//                       id="passwordConfirmation" 
//                       name="passwordConfirmation" 
//                       value={formData.passwordConfirmation}
//                       onChange={handleChange}
//                       required
//                   >
//                   </input>
//           </div>
//               <br />
//           <div>
//               <label htmlFor="role">Select Role: </label>
//               <br/>
//                 <select
//                     className="customSelect"
//                     placeholder="Select Role"
//                     id="role"
//                     name="role"
//                     value={formData.role}
//                     onChange={handleChange}
//                     required
//                 >
//                     <option value="skier">Skier</option>
//                     <option value="snowboarder">Snowboarder</option>
//                 </select>
//           </div>

//           {
//           errors ? 
//           <div className="errors-container">
//           {errors.map((err) => (
//                   <span id="error-message" key={err}>{`Invalid: ${err}`}</span>))}
//               </div> 
//           : null 
//           }
//               <br />
//               <input className='formButton' type="submit" value="Create Account" />
//         </form>
//         </div>
//     )   
// }

// export default Signup;