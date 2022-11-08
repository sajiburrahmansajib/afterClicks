import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ServiceDetails = ({ data }) => {
    const { name, _id, info, price, picture } = data;
    console.log('servicedetailspage', data)
    return (
        <div>
            <Card style={{ width: '24rem' }} className='service-card'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {info}
                    </Card.Text>
                    <Card.Text>
                        Price : {price} tk
                    </Card.Text>

                    <Button variant="success">Add Review</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;