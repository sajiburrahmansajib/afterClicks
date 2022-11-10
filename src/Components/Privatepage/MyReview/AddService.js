import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';

const AddService = () => {
    const handleAddService = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.serviceName.value;
        const info = form.information.value;
        const price = form.price.value;
        const url = form.url.value;
        // console.log(name, info, price, url)

        const services = {
            name: name,
            info: info,
            picture: url,
            price: price

        }
        fetch('http://localhost:5000/addservice', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(services)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Service Successfully Added')
                    form.reset();

                }
            })
            .catch(er => console.error(er));


    }

    return (
        <div className='p-5 mt-5'>
            <Form onSubmit={handleAddService} className='container pt-3'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Service Name</Form.Label>
                    <Form.Control name='serviceName' type="text" placeholder="Enter service name..." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>About Your Service Information</Form.Label>
                    <Form.Control name='information' type="text" placeholder="Service Information ...." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Service Price</Form.Label>
                    <Form.Control name='price' type="text" placeholder="Service price digit only ...." required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Your Service Picture URL</Form.Label>
                    <Form.Control name='url' type="text" placeholder="Image URL...." required />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default AddService;