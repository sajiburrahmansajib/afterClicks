import React, { useContext } from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './AfterClicks.png'
import { Link, NavLink } from 'react-router-dom';
import { FaUserAlt, IconName } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import './Header.css'
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    const handleLogout = () => {
        logOut()
            .then(() => {
                alert('Successfully Logout')
            })
            .catch(error => {
                console.log(error)
            })
    }
    return (
        <div>
            <Navbar bg="info" expand="lg">
                <Container>
                    <Link to='/home'><img src={logo} alt="" /></Link>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto option">
                            <NavLink to='/home'>Home</NavLink>
                            <NavLink to='/home'>Services</NavLink>
                            <NavLink to='/blogs'>Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>

                </Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto option">
                        <div className='user-imgContainer'>
                            {
                                user?.uid ?
                                    <img className='user-img rounded-circle' src={logo} alt="" />
                                    :
                                    <FaUserAlt className='icon'></FaUserAlt>
                            }

                        </div>

                        {
                            user?.uid ?
                                <Button onClick={handleLogout} variant="danger">LogOut</Button>
                                :
                                <NavLink to='/login'>LogIn</NavLink>
                        }
                        <NavLink to='/signup'>SignUp</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;