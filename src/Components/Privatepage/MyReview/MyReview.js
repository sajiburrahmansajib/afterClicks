import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import UserReview from './UserReview';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import './Myreview.css'


const MyReview = () => {
    const { user, logOut } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);


    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('afterClicksToken')}`
            }
        })
            .then(res => {
                if (res.status === 401 || res.status === 403) {
                    return logOut()
                }
                res.json()
            })
            .then(data => setReview(data))
    }, [user?.email, logOut]);


    const handleDelete = id => {
        const accept = window.confirm('Are you sure , You want to cancel this review');
        console.log(accept)
        if (accept) {
            fetch(`http://localhost:5000/review/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        toast.error("Successfully Delete")
                        const remaining = reviews.filter(odr => odr._id !== id);
                        setReview(remaining);
                    }
                })
        }

    };

    return (
        <div>
            <h1 className='text-center p-2 text-success'>Total Review : {reviews.length}</h1>
            <Table striped bordered hover className='container'>
                <thead>
                    <tr>
                        <th>User Image</th>
                        <th>User Information</th>
                        <th>Service Name</th>
                        <th>Review</th>
                        <th>Delete</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        reviews.map(review => <UserReview

                            review={review}
                            handleDelete={handleDelete}
                        ></UserReview>)
                    }
                </tbody>
            </Table>


        </div >
    );
};

export default MyReview;