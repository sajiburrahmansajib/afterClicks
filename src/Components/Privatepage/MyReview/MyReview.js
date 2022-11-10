import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/Authprovider/AuthProvider';
import UserReview from './UserReview';
import Table from 'react-bootstrap/Table';
import toast from 'react-hot-toast';
import Button from 'react-bootstrap/Button';
import './Myreview.css'


const MyReview = () => {
    const { user } = useContext(AuthContext);
    const [reviews, setReview] = useState([]);
    const [edit, setEdit] = useState(false)
    const [comment, setComment] = useState([])
    const [updateComment, setUpdateComment] = useState(comment)



    useEffect(() => {
        fetch(`http://localhost:5000/review?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setReview(data))
    }, [user]);


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

    const controlUpdate = (data) => {
        setEdit(true);
        setComment(data)
    }

    const handleReviewUpdate = (id) => {
        const data = document.getElementById('userReview').value;
        const field = document.getElementById('userReview').name;
        const newC = { ...updateComment }
        // console.log(field, newC, data)
        // newC[field] = data;
        // setUpdateComment(newC)
        setEdit(false);
        // console.log('inside review handle', id, data)
        // fetch(`http://localhost:5000/review/${id}`, {
        //     method: 'PUT',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(updateComment)
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         console.log(data)
        //         if (data.modifiedCount > 0) {
        //             const remaining = reviews.filter(odr => odr._id !== id);
        //             const editReview = reviews.find(odr => odr._id === id);
        //             editReview.status = `${comment.message}`

        //             const allReview = [editReview, ...remaining];
        //             setReview(allReview);
        //             alert('Update Success')
        //         }

        //     });
    }


    return (
        <div>
            <h1 className='text-center p-2 text-success'>Total Review : {reviews.length}</h1>
            <div className='edit-container'>
                {
                    edit &&
                    <div className='update'>
                        <textarea name="message" id="userReview" defaultValue={comment.message} cols="40" rows="3"></textarea>
                        <Button onClick={() => handleReviewUpdate(comment._id)} type="submit" variant="outline-success">Save</Button>
                    </div>
                }
            </div>
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
                        reviews.map(review => <UserReview

                            review={review}
                            handleDelete={handleDelete}
                            controlUpdate={controlUpdate}
                        ></UserReview>)
                    }
                </tbody>
            </Table>


        </div >
    );
};

export default MyReview;