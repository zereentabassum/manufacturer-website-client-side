import React, { useEffect } from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';
import useToken from '../useToken';

const GoogleLogin = () => {

     
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    // let alertMessage;

    const [token] = useToken(user);
    // if(token){
    //     navigate('/dashboard')
    // }


    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( ()=>{
        if(token){
            navigate(from, { replace: true });
        }
    },[token, from, navigate])


    // let load;
    // if(loading){
    //    load= <Loading></Loading>
    // }

    //   let load;
    let load;
    if(loading){
    //    load= <Loading></Loading>


        load = <div className='flex justify-center item-center'>
        <button className="btn btn-square loading text-accent bg-white border-0 text-bold"></button>
        </div>
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
            className="btn btn-accent font-bold text-white w-80 text-base">Continue with Google</button>
          
        </div>
        </div>
    );
};

export default GoogleLogin;