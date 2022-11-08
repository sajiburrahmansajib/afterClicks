import React from 'react';
import CarouselH from '../Carousel/CarouselH';
import './Home.css'

const Home = () => {
    return (
        <div>
            <CarouselH></CarouselH>
            <div className='home-card'>
                <h1>Our Services </h1>

                <button type="button" class="btn btn-success">See All Services</button>
            </div>
        </div>
    );
};

export default Home; <h1>home page</h1>