import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';


const ServiceDetailsInformation = () => {
    const { user } = useContext(AuthContext);
    const serviceData = useLoaderData()
    const [box, setBox] = useState(false)
    const [toggle, setToggle] = useState(true)
    const { name, info, picture, price, _id } = serviceData;

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        let today = new Date();
        let year = today.getFullYear();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        const currentDate = `${date}/${month}/${year}`;
        let hour = today.getHours();
        let minute = today.getMinutes();
        const currentTime = `${hour}:${minute}`;
        console.log(currentDate, currentTime)

        const form = event.target;
        const message = form.comment.value;
        const email = user?.email;
        console.log(email)
        console.log(message)

        const review = {
            message,
            email,
            _id,
            currentDate,
            currentTime
        }
        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Review placed successfully')
                    // form.reset();

                }
            })
            .catch(er => console.error(er));

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
                            <form onSubmit={handleReviewSubmit} className='mt-2'>
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