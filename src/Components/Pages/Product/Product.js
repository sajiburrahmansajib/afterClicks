import React from 'react';
import './Product.css'

const Product = () => {
    return (
        <div >
            <div className="position-relative overflow-hidden text-center bg-info">
                <div className="col-md-5 p-lg-5 mx-auto my-5 product-container">
                    <h1 className="display-4 fw-normal">Wedding Stage Decoration</h1>
                    <p className="lead fw-normal">The center stage is one of the most important part of All Wedding. The wedding hall decorator plays special attention to this area because the bride and the groom need to spend most of the time over there. </p>
                    <button className="btn btn-outline-secondary">Coming soon</button>
                </div>
                <div className="product-device shadow-sm d-none d-md-block"></div>
                <div className="product-device product-device-2 shadow-sm d-none d-md-block"></div>
            </div>

        </div>
    );
};

export default Product;