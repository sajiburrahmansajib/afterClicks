import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { info } = service;
    return (
        <div>
            <Card style={{ width: '24rem' }} className='service-card'>
                <Card.Img variant="top" src={service.picture} />
                <Card.Body>
                    <Card.Title>{service.name}</Card.Title>
                    <Card.Text>
                        {
                            info.length > 120 ?
                                <>{info.slice(0, 100) + '...'}  </>
                                :
                                info
                        }
                    </Card.Text>
                    <Card.Text>
                        Price : {service.price} tk
                    </Card.Text>

                    <Link><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;