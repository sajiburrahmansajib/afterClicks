import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import Reviews from '../Reviews/Reviews';
import useTitle from '../../Title/useTitle';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';
import PrivateRoute from '../../../Route/PrivateRoute/PrivateRoute';
import toast from 'react-hot-toast';
import './Servicedetailsinfo.css'


const ServiceDetailsInformation = () => {
    const { user } = useContext(AuthContext);
    const serviceData = useLoaderData()
    const [box, setBox] = useState(false)
    const [toggle, setToggle] = useState(true)
    const [reviews, setReviews] = useState([]);
    const { name, info, picture, price, _id } = serviceData;

    useTitle('Service Details')


    useEffect(() => {
        fetch(`https://afterclick-server-side.vercel.app/reviews/${_id}`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [toggle, reviews, box, serviceData, _id])

    const handleReviewSubmit = (event) => {
        event.preventDefault();
        const d = new Date();
        let time = d.toLocaleString();
        const form = event.target;
        const message = form.comment.value;
        const email = user?.email;
        const serviceName = serviceData.name;
        const name = user?.displayName;
        const photo = user?.photoURL;
        console.log(email)
        console.log(message)

        const review = {
            message,
            email,
            serviceID: _id,
            name,
            serviceName,
            photo,
            time
        }
        fetch('https://afterclick-server-side.vercel.app/review', {
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
                    toast.success('Successfully Added')
                    form.reset();

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
            <Card className='service-card mt-3 service-details-info'>


                <PhotoProvider>
                    <PhotoView src={picture}>
                        <Card.Img variant="top" src={picture} />
                    </PhotoView>
                </PhotoProvider>

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
                            <PrivateRoute>
                                <form onSubmit={handleReviewSubmit} className='mt-2'>
                                    <textarea rows="3" cols="45" id='review' defaultValue='Enter Review here...' name="comment" ></textarea>
                                    <button className='btn btn-outline-success' type="submit">Submit</button>
                                </form>
                            </PrivateRoute>

                        }


                    </>
                    <div className='mt-2'>
                        {
                            toggle &&
                            <Button onClick={() => handleReview(serviceData)} variant="primary">Add Review</Button>
                        }
                    </div>
                    <div>
                        {
                            reviews.map(re => <Reviews key={re._id} review={re}></Reviews>)
                        }

                    </div>

                </Card.Body>
            </Card>

        </div>
    );
};

export default ServiceDetailsInformation;