import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import UserReview from './UserReview';
import Table from 'react-bootstrap/Table';


const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user])
    return (
        <div>
            <h1 className='text-center p-5 text-success'>Total Review :{reviews.length}</h1>
            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                        <th>User Image</th>
                        <th>User Information</th>
                        <th>Review</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <UserReview key={review._id} review={review}></UserReview>)
                    }
                </tbody>
            </Table>


        </div>
    );
};

export default MyReview;