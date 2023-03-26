import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';

function App() {

  const users = useSelector(state => state.users)
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()

  const logout = () => {
    dispatch({
        type: "LOGOUT"
        })
  }

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {users.map(user => <div>{user.username} | {user.email} | {user.role}</div>)}
        </div>
        
        <a>
          happy trails
        </a>

        
        <RegistrationForm/>
        {
          user
          ? <input type="button" value="logout" onClick={logout} />
          : <LoginForm/>
        }
        
      </header>
    </div>
  );
}

export default App;
