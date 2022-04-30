import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSignInWithEmailAndPassword,useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Button } from 'react-bootstrap';
import loginImg from '../../../images/mobile-login-concept-illustration_114360-135.webp'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import { async } from '@firebase/util';
import auth from '../../../firebase.init';
import {useLocation,Navigate,} from "react-router-dom";
const SignIn = () => {
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle] = useSignInWithGoogle(auth);
      console.log(user);
      const navigate=useNavigate()
      
       const location = useLocation();
        
  const from = location.state?.from?.pathname || "/";

      if(user){
        navigate(from, { replace: true });
      }
      if(error){
        toast(error?.message)
      }
    const handelEmail=(e)=>{
        setEmail(e.target.value)
    }
    const handelPass=(e)=>{
        setPassword(e.target.value)
    }
   
    const handelLogin=(e)=>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
      
        
        
    }
    return (
        <div className='mt-5'>
         <div className="container shadow pt-5">
           <div className="row mt-2">
             <div className="col-md-8">
             <form className='pt-5 mx-auto w-75' onSubmit={handelLogin}>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" onBlur={handelEmail} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input onBlur={handelPass} type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <p className="pt-2 fw-bold">Are You New Mahira Furniture Warehouse?Plaase....<Link className='text-decoration-none text-danger fw-bolder' to="/signUp">Registration</Link> </p>
  <ToastContainer />
  <Button  className="w-100 mt-3" variant="primary" type="submit">
    Login
  </Button>
 
</form>
             </div>
             <div className="col-md-4">
               <img className='img-fluid' src={loginImg} alt="" />
             </div>
           </div>
         </div>
        </div>
    );
};

export default SignIn;