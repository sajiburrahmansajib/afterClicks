import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './Service.css'

const Service = ({ service }) => {
    console.log(service)
    return (
        <div>
            <Card style={{ width: '18rem' }} className='service-card'>
                <Card.Img variant="top" src={service.picture} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">View Details</Button>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;