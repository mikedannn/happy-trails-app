import { useSelector } from 'react-redux';
import './App.css';
import Signup from './components/Signup';
import Login from './components/Login';

function App() {

    const user = useSelector(state => state.user) 

    return (
        <div>
            <div>
                <Signup/>
                {
                    user
                    ? <input type='button' value='logout'/>
                    : <Login/>
                }
            </div>
            <div className='App'>
                happy trails
            </div>
        </div>
    );
}

export default App;