import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { Link } from 'react-router-dom';
import useTitle from '../../Title/useTitle';
import './UserReview.css'

const UserReview = ({ review, handleDelete }) => {
    const { message, name, photo, time, _id, serviceName } = review;
    console.log(review)
    useTitle('My Review')

    return (

        <tr>
            <td>
                <img className='w-25' src={photo} alt="" />
            </td>
            <td>
                <div>
                    {name}
                </div>
                <div>
                    {time}
                </div>
            </td>
            <td>{serviceName}</td>
            <td>{message}</td>
            <td className='text-center option'><FaTrashAlt onClick={() => handleDelete(_id)}></FaTrashAlt></td>
            <td className='text-center option'> <Link to={`/editreview/${_id}`}><FaEdit></FaEdit> </Link></td>
        </tr>

    );
};

export default UserReview;