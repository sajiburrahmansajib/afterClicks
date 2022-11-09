import React from 'react';
import Table from 'react-bootstrap/Table';
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const UserReview = ({ review }) => {
    const { message, name, photo, time } = review;
    console.log(review)

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
            <td className='text-center'><FaTrashAlt></FaTrashAlt></td>
            <td className='text-center'><FaEdit></FaEdit></td>
        </tr>
    );
};

export default UserReview;