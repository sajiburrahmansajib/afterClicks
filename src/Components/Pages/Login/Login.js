import React, { useContext } from 'react';
import './Login.css'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { FaGoogle } from "react-icons/fa";
import img from './login1.png'
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import toast from 'react-hot-toast';
import useTitle from '../../Title/useTitle';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    useTitle('Login');
    const { login, googleLogIn, spinnerLoader, setSpinnerLoader } = useContext(AuthContext);
    setSpinnerLoader(false)


    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || '/';

    const handleGoogleLogin = () => {
        googleLogIn()
            .then(result => {
                const user = result.user;
                toast.success('Successfully Log In')
                console.log(user);
                const currentUser = {
                    email: user.email
                }
                fetch('https://afterclick-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('afterClicksToken', data.token)
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error);
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)
        login(email, password)
            .then(result => {
                const user = result.user;
                toast.success('Successfully Log In')
                console.log(user)
                const currentUser = {
                    email: user.email
                }
                form.reset();
                fetch('https://afterclick-server-side.vercel.app/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem('afterClicksToken', data.token)
                    })
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error)
            })
    }


    return (
        <div>
            {
                spinnerLoader &&
                <div id='spinner' className='spinner-container'>
                    <Spinner animation="border" variant="success" />
                </div>
            }


            <div className='login-container'>
                <div className='img-container'>
                    <img src={img} alt="" />
                </div>
                <div className='form-container'>
                    <Form onSubmit={handleLogin}>
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
                            <FaGoogle onClick={handleGoogleLogin} className='google-logo'></FaGoogle>
                        </div>
                    </Form>
                </div>

            </div>

        </div>
    );
};

export default Login;