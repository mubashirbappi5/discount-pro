import React, { useContext } from 'react';
import { AuthnContext } from './../Provider/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';
import Loading from '../Pages/Loading';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthnContext)
    const location = useLocation()
    if(loading){
        return <Loading/>
    }

    if(user){
        return children
    }
    return (
        <div>
            <Navigate state={location.pathname} to={'/login'}></Navigate>
            
        </div>
    );
};

export default PrivateRoute;