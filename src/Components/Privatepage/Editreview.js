import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

const Editreview = () => {
    const data = useLoaderData()
    const { email, message, name, serviceName, time, _id } = data;
    const [review, setReview] = useState(data);

    const handleReviewUpdate = event => {
        event.preventDefault();
        fetch(`http://localhost:5000/editreview/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('user updated')
                    console.log(data);
                }
            })
    }

    const handleReviewChange = event => {
        const field = event.target.name;
        const value = event.target.value;
        const update = { ...review }
        update[field] = value;
        setReview(update);
    }
    return (
        <div className='container p-5 mt-5'>
            <Form onSubmit={handleReviewUpdate}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name='email' type="email" placeholder="Enter email" defaultValue={email} readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control name='name' type="text" placeholder="Your name" defaultValue={name} readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Service name</Form.Label>
                    <Form.Control type="text" placeholder="Enter email" defaultValue={`${serviceName}    ${time}`} readOnly disabled />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <FloatingLabel onChange={handleReviewChange} controlId="floatingTextarea2" label="Your Review">
                        <Form.Control
                            as="textarea"
                            name='message'
                            placeholder="Leave a comment here"
                            defaultValue={message}
                            style={{ height: '100px' }}
                        />
                    </FloatingLabel>

                </Form.Group>


                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>

        </div>
    );
};

export default Editreview;