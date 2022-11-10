import React from 'react';
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import useTitle from '../../Title/useTitle';
import './UserReview.css'

const UserReview = ({ review, handleDelete, controlUpdate }) => {
    const { message, name, photo, time, _id } = review;
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
            <td>{message}</td>
            <td className='text-center option'><FaTrashAlt onClick={() => handleDelete(_id)}></FaTrashAlt></td>
            <td className='text-center option'><FaEdit onClick={() => controlUpdate(review)}></FaEdit></td>
        </tr>

    );
};

export default UserReview;