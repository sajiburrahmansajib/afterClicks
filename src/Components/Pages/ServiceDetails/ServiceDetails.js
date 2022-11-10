import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import useTitle from '../../Title/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import './Servicedetails.css'

const ServiceDetails = ({ data }) => {
    const { name, _id, info, picture } = data;
    useTitle('Services')
    return (
        <div>
            <Card style={{ width: '22rem' }} className='service-card'>
                <PhotoProvider>
                    <PhotoView src={picture}>
                        <Card.Img variant="top" src={picture} />
                    </PhotoView>
                </PhotoProvider>

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