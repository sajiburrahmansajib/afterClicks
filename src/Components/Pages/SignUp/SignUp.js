import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import img from './user-registration-illustration-flat-vector-shipwithseair-seair.png.crdownload'

const SignUp = () => {


    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        console.log(form)
    }


    return (
        <div className='login-container'>
            <div className='img-container'>
                <img src={img} alt="" />
            </div>
            <div className='form-container'>
                <Form onSubmit={handleSignUp}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Your Name</Form.Label>
                        <Form.Control name='name' type="email" placeholder="Enter your name" required />
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
    );
};

export default SignUp; <h1>Signup page</h1>