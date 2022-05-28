import React from 'react';
import { toast } from 'react-toastify';

const UserRow = ({user, refetch}) => {
    const { email, role } = user;
    const makeAdmin = () => {
        fetch(`https://vast-savannah-90121.herokuapp.com/user/admin/${email}`
        , {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            alert('Successfully made an Admin')
           refetch();
        //    console.log('successful make admin');
        //    toast(`Successfully made an Admin`);
        })
            // .then(res => {
            //     if(res.status === 403){
            //         console.log('Failed to Make an admin');
            //     }
            //     return res.json()})
            // .then(data => {
            //     if (data.modifiedCount > 0) {
            //         refetch();
            //         toast.success(`Successfully made an admin`);
            //     }

            // })
    }
    return (
       
              <tr>
            <th>1</th>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} className='btn btn-xs bg-primary text-white'>Make Admin</button>}</td>
            {/* <td><button className='btn btn-xs bg-primary text-white'>Remove User</button></td> */}
            {/* <td>{role !== 'admin' && <button onClick={makeAdmin} className="btn btn-xs">Make Admin</button>}</td> */}
            {/* <td><button className="btn btn-xs">Remove User</button></td>  msaba2879@gmail.com  */}
            {/* 3294wyz889 */}
        </tr>
       
    );
};

export default UserRow;