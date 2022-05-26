import React, { useEffect, useRef } from 'react';
import GoogleLogin from './GoogleLogin';
import { useForm } from "react-hook-form";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.config';
import Loading from '../Shared/Loading';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail } from 'firebase/auth';

import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import useToken from '../useToken';

const Login = () => {
    // const emailRef = useRef('');

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

    const [token] = useToken(user);


    useEffect( ()=>{
        if(token){
            navigate(from, { replace: true });
        }
    },[token, from, navigate])

  
    
    // let load;
    // if(loading){
    // //    load= <Loading></Loading>

      let load;
      if(loading){
      return <Loading></Loading>
      }
     


    //     load = <div className='flex justify-center item-center'>
    //     <button className="btn btn-square loading text-secondary bg-white border-0 text-bold"></button>
    //     </div>
    // }
//     load = <div className="flex items-center justify-center ">
//     <div className="w-40 h-40 border-t-4 border-b-4 border-blue-500 rounded-full animate-spin"></div>
// </div>
      
    let errorMessage;
    if (error) {
        errorMessage= <p className='text-red-500'>{error?.message}</p>
    }



    const passwordReset = async() =>{
              
//         console.log(email);
//         await sendPasswordResetEmail(auth, email)
//           .then(() =>{
//                toast('Email sent');
//               }
             
//        ) 
      
    }


    return (
       
        <div className='flex flex-row justify-center font-semibold mb-10'>
        {/* <h1 className='text-center text-4xl my-9'>Login</h1> */}
        <div className="card w-96 shadow-xl">
        <div className="card-body">
            <h2 className="text-center text-4xl">Login</h2>
            <div className='pb-4'>
                {/*------------ Email -----------*/}
        <form onSubmit={handleSubmit(onSubmit)}>
            <label className='label'>Email:</label>
            <input type="email" name="ëmail" placeholder="Your Email" className="input input-bordered input-accent w-full max-w-xs mb-2 text-base" 
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

            //      minLength: {
            //     value: 6,
            //     message: 'Password must be 6 characters or long' 
            //   } 
        })}
            />
             {errors.email?.type ==='required' && <span className='text-red-500 '>{errors.password.message}</span>}
            {/* {errors.password?.type ==='minLength' && <span className='text-red-500'>{errors.password.message}</span>} */}
            {/* <p onClick={passwordReset} class="btn btn-link text-blue-400 text-left">Forgot Password? Reset</p> */}

                
        {/*--------- Login Button ------- */}
              {/* {load} */}
              {errorMessage}
            <input type="submit" value="Login" className='btn btn-accent w-full text-base mt-5 text-white' />
            <p className='pt-3'>Don't have an account?<Link className='text-blue-400' to='/signup'> Create an account</Link></p>
          
             </form>


            
            
        
         
         
            <div className='divider text-2xl '>Or</div>
            <div className="card-actions justify-center font-semibold">
         
            <GoogleLogin></GoogleLogin>
            </div>
            </div>
        </div>
        </div>
        <ToastContainer/>
    </div>

    );
};

export default Login;