import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'
import img1 from './img1.png'
import img2 from './img2.jpeg'
import img3 from './img3.jpg'

const CarouselH = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100 image "
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Bridal look Image</h3>
                    <p>A wedding dress or bridal gown is the dress worn by the bride during a wedding ceremony. .</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src={img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Engagement Image</h3>
                    <p>Meet the couple, Ritika & Akshay who refused to share this serenity of their relationship with a huge crowd and rather opted to celebrate their engagement .</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100 image"
                    src={img3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Couple Image In One Frame</h3>
                    <p>
                        One of the best things about being a couple is having someone to share your hopes and dreams.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default CarouselH;