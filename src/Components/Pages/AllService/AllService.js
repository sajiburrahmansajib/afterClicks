import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetails from '../ServiceDetails/ServiceDetails';
import './AllService.css'

const AllService = () => {
    const data = useLoaderData();
    const { _id } = data;
    return (
        <div className='service-container'>
            {
                data.map(d => <ServiceDetails key={_id} data={d}></ServiceDetails>)
            }
        </div>
    );
};

export default AllService;