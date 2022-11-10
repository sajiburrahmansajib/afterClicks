import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import useTitle from '../../Title/useTitle';
import img from './signup.png'
import Spinner from 'react-bootstrap/Spinner';

const SignUp = () => {
    const { createUser, spinnerLoader, setSpinnerLoader } = useContext(AuthContext);
    useTitle('Signup')


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        // const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, email, password)
        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error)
            })
    };


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
                    <Form onSubmit={handleSignUp}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Your Name</Form.Label>
                            <Form.Control name='name' type="text" placeholder="Enter your name" required />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' type="email" placeholder="Enter Your email" required />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' type="password" placeholder="Password" required />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            SignUp
                        </Button>
                    </Form>

                </div>
            </div>
        </div>
    );
};

export default SignUp; <h1>Signup page</h1>