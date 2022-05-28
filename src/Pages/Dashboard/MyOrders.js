import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';

const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://vast-savannah-90121.herokuapp.com/order?customer=${user.email}`, {
                method: 'GET',
                headers: {
                    authorization: `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res =>  {
                    console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return  res.json() })
                .then(data => { setOrders(data);});
        }
    }, [user])

    return (
        <div>
            <h1 className='text-3xl py-3'>Your Orders: {orders.length}</h1>


            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Order</th>
                            <th>Quantity</th>
                            <th>Payment</th>
                          
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((a, index) => <tr key={a._id}>
                                <th></th>
                                <td>{a.orderName}</td>
                                <td>{a.quantity}</td>
                                <td><button>Unpaid</button></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default MyOrders;