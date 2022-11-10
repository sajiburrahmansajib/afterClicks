import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../Title/useTitle';
import Camera from '../Camera/Camera';
import CarouselH from '../Carousel/CarouselH';
import Product from '../Product/Product';
import Service from '../Service/Service';
import './Home.css'

const Home = () => {
    const services = useLoaderData();
    useTitle('Home')
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
            <Product></Product>
            <Camera></Camera>
        </div>
    );
};

export default Home; <h1>home page</h1>