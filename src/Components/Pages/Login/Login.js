import React from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle, IconName } from "react-icons/fa";
import img from './login1.png'

const Login = () => {
    return (
        <div className='login-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='form-container'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control name='email' type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Login
                    </Button>
                    <hr />
                    <div className='google'>
                        <span>Log In With </span>
                        <FaGoogle className='google-logo'></FaGoogle>
                    </div>
                </Form>
            </div>

        </div>
    );
};

export default Login;