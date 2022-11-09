import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
                    <Link to={`/serviceDetailsInformation/${_id}`}><Button variant="success">View Details</Button></Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default ServiceDetails;