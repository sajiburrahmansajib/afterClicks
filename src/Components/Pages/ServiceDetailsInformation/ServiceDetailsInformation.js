import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const ServiceDetailsInformation = () => {
    const serviceData = useLoaderData()
    const { name, info, picture, price } = serviceData;
    return (
        <div>
            <Card style={{ width: '24rem' }} className='service-card'>
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
                    <Button variant="primary">Add A Review</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetailsInformation;