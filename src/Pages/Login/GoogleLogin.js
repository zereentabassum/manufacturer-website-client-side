import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';

const GoogleLogin = () => {

     
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    // let alertMessage;

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( ()=>{
        if(user){
            navigate(from, { replace: true });
        }
    },[user, from, navigate])


    let load;
    if(loading){
       load= <Loading></Loading>
    }
    let errorMessage;
    if (error) {
        errorMessage= <p className='text-red-500'>{error?.message}</p>
    }


    return (
        <div>   
            <div>
            {/* {alertMessage} */}
            {load}
            {errorMessage}
            <button  onClick={() => signInWithGoogle()} 
            className="btn btn-outline btn-accent font-bold  w-80 text-base">Continue with Google</button>
          
        </div>
        </div>
    );
};

export default GoogleLogin;