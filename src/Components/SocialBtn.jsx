import React, { useContext } from 'react';
import { AuthnContext } from '../Provider/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';
import toast from 'react-hot-toast';

const SocialBtn = () => {
    const {googlesigninUser} = useContext(AuthnContext)
    const navigate = useNavigate()
    const location = useLocation()
    const handlegooglebtn = ()=>{
        googlesigninUser()
        .then((res)=>{
            console.log(res)
            toast.success('Successfully login!')
            navigate(location?.state?location.state:'/')

        })
        .then((error)=>toast.error(error))

    }
    return (
        <div>
            <button onClick={handlegooglebtn} className='btn rounded-lg'> <FaGoogle />Continue with Google</button>
            
        </div>
    );
};

export default SocialBtn;