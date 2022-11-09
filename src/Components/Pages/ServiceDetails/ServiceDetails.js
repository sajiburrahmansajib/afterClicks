import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const ServiceDetails = ({ data }) => {
    const { name, _id, info, picture } = data;
    return (
        <div>
            <Card style={{ width: '24rem' }} className='service-card'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {
                            info.length > 120 ?
                                <>{info.slice(0, 100) + '...'}  </>
                                :
                                info
                        }
                    </Card.Text>
                    <Button variant="success">View Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;