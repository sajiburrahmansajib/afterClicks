import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import useTitle from '../../Title/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Service.css'

const Service = ({ service }) => {
    useTitle('Services')
    const { _id, info } = service;
    return (
        <div>
            <Card className='service-card'>
                <PhotoProvider>
                    <PhotoView src={service.picture}>
                        <Card.Img variant="top" src={service.picture} />
                    </PhotoView>
                </PhotoProvider>
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
                    <Link to={`/serviceDetailsInformation/${_id}`}><Button variant="primary">View Details</Button></Link>
                </Card.Body>
            </Card>

        </div>
    );
};

export default Service;