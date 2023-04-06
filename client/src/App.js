import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Public from './components/Public'
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import RequireAuth from './features/auth/RequireAuth'
import UsersList from './features/users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="login" element={<Login />} />

        {/* protected routes */}
        <Route element={<RequireAuth />}>
          <Route path="welcome" element={<Welcome />} />
          <Route path="userslist" element={<UsersList />} />
        </Route>

      </Route>
    </Routes>
  )
}

export default App;




// import { useDispatch, useSelector } from 'react-redux';
// import './App.css';
// import RegistrationForm from './components/RegistrationForm';
// import LoginForm from './components/LoginForm';

// function App() {

//   const users = useSelector(state => state.users)
//   const user = useSelector(state => state.user)
//   const dispatch = useDispatch()

//   const logout = () => {
//     dispatch({
//         type: "LOGOUT"
//         })
//   }

//   return (
//     <div className="App">
//       <header className="App-header">
//         <div>
//           {users.map(user => <div>{user.username} | {user.email} | {user.role}</div>)}
//         </div>
        
//         <a>
//           happy trails
//         </a>

        
//         <RegistrationForm/>
//         {
//           user
//           ? <input type="button" value="logout" onClick={logout} />
//           : <LoginForm/>
//         }
        
//       </header>
//     </div>
//   );
// }

// export default App;
