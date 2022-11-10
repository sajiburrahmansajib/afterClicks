import React, { useContext, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './AllService.css'
import Spinner from 'react-bootstrap/Spinner';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';

const AllService = () => {
    const { spinnerLoader, setSpinnerLoader } = useContext(AuthContext);
    const data = useLoaderData();
    setSpinnerLoader(false)

    return (
        <div>
            {
                spinnerLoader &&
                <div id='spinner' className='spinner-container'>
                    <Spinner animation="border" variant="success" />
                </div>
            }

            <div className='service-container'>
                {
                    data.map(d => <ServiceDetails key={d._id} data={d}></ServiceDetails>)
                }
            </div>
        </div>
    );
};

export default AllService;