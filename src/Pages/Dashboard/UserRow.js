import React from 'react';

const UserRow = ({user}) => {
    const { email, role } = user;
    // const makeAdmin = () => {
    //     fetch(`https://secret-dusk-46242.herokuapp.com/user/admin/${email}`, {
    //         method: 'PUT',
    //         headers: {
    //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
    //         }
    //     })
    //         .then(res => {
    //             if(res.status === 403){
    //                 toast.error('Failed to Make an admin');
    //             }
    //             return res.json()})
    //         .then(data => {
    //             if (data.modifiedCount > 0) {
    //                 refetch();
    //                 toast.success(`Successfully made an admin`);
    //             }

    //         })
    // }
    return (
        <div>
              <tr>
            <th>1</th>
            <td>{email}</td>
            {/* <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs">Make Admin</button>}</td> */}
            <td><button class="btn btn-xs">Remove User</button></td>
        </tr>
        </div>
    );
};

export default UserRow;