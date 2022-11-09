import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ServiceDetailsInformation = () => {
    const serviceData = useLoaderData()
    const [box, setBox] = useState(false)
    const [toggle, setToggle] = useState(true)
    const { name, info, picture, price } = serviceData;

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const message = form.comment.value;
        console.log(message)
        setBox(false)
        setToggle(true)


    };

    const handleReview = (service) => {
        console.log('Button click');
        console.log('service', service);
        setBox(true);
        setToggle(false);

    };

    return (
        <div>
            <Card style={{ width: '24rem' }} className='service-card mt-3'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>Title : {name}</Card.Title>
                    <Card.Text>
                        {
                            info
                        }
                    </Card.Text>
                    <Card.Text>
                        <span className='text-success fs-4'>Price :</span>  {price} taka
                    </Card.Text>
                    <hr />
                    <h6 className='text-center'>Review</h6>
                    <>
                        {
                            box &&
                            <form onSubmit={handleSubmit} className='mt-2'>
                                <textarea rows="3" cols="45" id='review' defaultValue='Enter Review here...' name="comment" ></textarea>
                                <button className='btn btn-outline-success' type="submit">Submit</button>
                            </form>
                        }

                    </>
                    <div className='mt-2'>
                        {
                            toggle &&
                            <Button onClick={() => handleReview(serviceData)} variant="primary">Add Review</Button>
                        }
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetailsInformation;