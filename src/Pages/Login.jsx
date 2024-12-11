import React, { useContext, useState } from 'react';
import { Link, useLocation, Navigate, useNavigate } from 'react-router-dom';
import SocialBtn from '../Components/SocialBtn';
import { AuthnContext } from '../Provider/AuthContext';
import toast from 'react-hot-toast';

const Login = () => {
  const {signinUser} = useContext(AuthnContext)
  const[email,setemail] = useState('')
  const location = useLocation()
  const navigate = useNavigate()
    const LoginHandle = (e)=>{
        e.preventDefault()
        const form = e.target
        
        
        const password = form.password.value
        console.log(email,password)



        signinUser(email,password)
        .then((res)=>{
          console.log(res.user)
          toast.success('Successfully login!')
          navigate(location?.state?location.state:'/')

        })
        .catch(error=>toast.error(error.message))

    }
    return (
        <div>
            <h1 className='text-center font-bold text-3xl my-7'>Login</h1>
           <div className="card bg-base-100 w-full max-w-sm shrink-0  mx-auto border pb-5">
      <form onSubmit={LoginHandle} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name='email' placeholder="email" value={email} className="input input-bordered"onChange={(e) => setemail(e.target.value)} required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" className="input input-bordered" required />
          <label className="label">
            <Link to={'/forget-pass'} state={email} className="label-text-alt link link-hover">Forgot password?</Link>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-green-500 text-white font-semibold">Login</button>
        </div>
        <p className='text-xs text-center'>Already have an account?<Link to={'/register'} className='text-green-400 font-semibold'>Register</Link></p>
      </form>
      <div className='mx-auto'>
      <div className="divider w-52 mx-auto">OR</div>
      <div className='flex justify-center'>
      <SocialBtn/>
      </div>
      </div>
    </div>
            
        </div>
    );
};

export default Login;