import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CarouselH from '../Carousel/CarouselH';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const services = useLoaderData();
    return (
        <div>
            <CarouselH></CarouselH>
            <div className='home-card'>
                <h1>Our Services</h1>
                <div className='services-container'>
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
                <Link to='/allservices'><button type="button" className="btn btn-success">See All Services</button></Link>
            </div>
        </div>
    );
};

export default Home; <h1>home page</h1>