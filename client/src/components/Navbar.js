import React from 'react';
import Container from 'react-bootstrap/Container';
import Button from "react-bootstrap/Button";
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removeUser } from '../features/user/userSlice';

function NavBar() {
    const user = useSelector(state => state.user.user)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    function logout(){
        fetch("/logout", {method: "DELETE"})
        .then(()=> navigate('/login'))
        .then(dispatch(removeUser()))
    }

    const renderNavbarButtons = () => {
        if(user){
            return(
                <>
                    <Navbar.Text id="current-user-name">
                       <b>{`@${user.username}`}</b>
                    </Navbar.Text>
                    <Button variant="info" className="search-resorts" href="/resorts/search">
                        Search Resorts
                    </Button>
                    <Button 
                        className="logoutButton" variant="outline-info" 
                        onClick={logout}
                        >Logout
                    </Button>
                </>
            );
        }
    }

    return(
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className='happyTrailsLink'>
                        <p>Happy Trails</p>
                    </Navbar.Brand>
                <Navbar.Collapse>
                    {renderNavbarButtons()}
                </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )

    
}

export default NavBar;