import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from './AfterClicks.png'
import { Link, NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
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
                            <NavLink to='/login'>Login</NavLink>
                            <NavLink to='/signup'>SignUp</NavLink>
                            <NavLink to='/blogs'>Blog</NavLink>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;