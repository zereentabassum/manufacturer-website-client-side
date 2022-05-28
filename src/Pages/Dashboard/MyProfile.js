import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';

const MyProfile = () => {
    const [user] = useAuthState(auth);
    const profile = event =>{
        event.preventDefault();
        alert('Submitted');
    }

    return (
        <div>
            <h1 className='text-3xl py-3'>Your Profile</h1>
            <div className='text-left pl-8 mb-9'>
                <h2 className='text-3xl'><span className='text-purple-600'>Name: </span>  {user.displayName}</h2>
                <h2 className='text-3xl'><span className='text-purple-600'>Email Address: </span>  {user.email}</h2>
            </div>
            <div className=''>
                <form onSubmit={profile}>
            <input type="text" placeholder="Education" className="input input-bordered input-primary w-full max-w-xs my-2" />
            <br />
            <input type="text" placeholder="Location" className="input input-bordered input-primary w-full max-w-xs my-2" />
            <br />
            <input type="number" placeholder="Phone Number" className="input input-bordered input-primary w-full max-w-xs my-2" />
            <br />
            <input type="text" placeholder="Linkdin profile link" className="input input-bordered input-primary w-full max-w-xs my-2" />
            <br />
            <input className='btn btn-primary' type="submit" value="Submit" />
            </form>
            </div>
        </div>
    );
};

export default MyProfile;