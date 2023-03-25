import { useSelector } from 'react-redux';
import './App.css';
import RegistrationForm from './components/RegistrationForm';

function App() {

  const users = useSelector(state => state.users)

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
      </header>
    </div>
  );
}

export default App;
