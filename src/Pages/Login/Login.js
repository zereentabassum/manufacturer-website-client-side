import React, { useEffect } from 'react';
import GoogleLogin from './GoogleLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const { register, formState: { errors }, handleSubmit } = useForm();
    const onSubmit = data => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
    }

    const navigate = useNavigate();

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    useEffect( ()=>{
        if(user){
            navigate(from, { replace: true });
        }
    },[user, from, navigate])

  
    
    let load;
    if(loading){
    //    load= <Loading></Loading>


     
     


        load = <div className='flex justify-center item-center'>
        <button className="btn btn-square loading text-secondary bg-white border-0 text-bold"></button>
        </div>
//     load = <div className="flex items-center justify-center ">
//     <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
// </div>
      
}


    let errorMessage;
    if (error) {
        errorMessage= <p className='text-red-500'>{error?.message}</p>
    }

    return (
       
        <div className='flex flex-row justify-center font-semibold mb-10'>
        {/* <h1 className='text-center text-4xl my-9'>Login</h1> */}
        <div className="card w-96 shadow-xl">
        <div className="card-body">
            <h2 className="text-center text-4xl">Login</h2>
            <div className='py-4'>
                {/*------------ Email -----------*/}
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className='label'>Email:</label>
            <input type="email" placeholder="Your Email" className="input input-bordered input-accent w-full max-w-xs mb-2 text-base" 
            {...register("email",{

                required:{
                    value:true,
                    message:'Email is Required'
                },

                 pattern: {
                value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                message: 'Please privide a valid email' 
              } })}
            />
            {errors.email?.type ==='required' && <span className='text-red-500 '>{errors.email.message}</span>}
            {errors.email?.type ==='pattern' && <span className='text-red-500'>{errors.email.message}</span>}


                    {/*------ Password ------ */}
            <label className='label'>Password:</label>
            <input type="password" placeholder="Password" className="input input-bordered input-accent w-full max-w-xs mb-2 text-base" 

              {...register("password",{

                required:{
                    value:true,
                    message:'Password is Required'
                },

                 minLength: {
                value: 6,
                message: 'Password must be 6 characters or long' 
              } })}
            />
             {errors.email?.type ==='required' && <span className='text-red-500 '>{errors.password.message}</span>}
            {errors.password?.type ==='minLength' && <span className='text-red-500'>{errors.password.message}</span>}
                
        {/*--------- Login Button ------- */}
              {load}
              {errorMessage}
            <input type="submit" value="Login" className='btn btn-accent w-full text-base mt-5 text-white' />
            <p className='pt-3'>New to Doctors Portal?  <Link className='text-blue-400' to='/signup'> Create an account</Link></p>
          
             </form>


            
            
        
         
         
            <div className='divider text-2xl '>Or</div>
            <div className="card-actions justify-center font-semibold">
            {/* <button className="btn btn-secondary text-white">Login</button> */}
            <GoogleLogin></GoogleLogin>
            </div>
            </div>
        </div>
        </div>
    </div>

    );
};

export default Login;