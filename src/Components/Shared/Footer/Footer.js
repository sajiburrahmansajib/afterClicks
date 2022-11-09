import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
        // <div classNameName='footer-container'>
        //     <h1>CopyRight @ Sajibur Rahman Sajib</h1>
        // </div>
        <div className=" bg-info w-full">
            <footer className="py-3 mt-4">
                <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Home</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Features</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">Pricing</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">FAQs</Link></li>
                    <li className="nav-item"><Link href="#" className="nav-link px-2 text-muted">About</Link></li>
                </ul>
                <p className="text-center text-muted">&copy; 2022 Sajibur Rahman</p>
                <ul className="list-unstyled d-flex">

                </ul>
            </footer>
        </div>
    );
};

export default Footer; <h1>Footer page</h1>