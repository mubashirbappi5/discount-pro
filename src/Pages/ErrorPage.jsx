import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='min-h-screen flex flex-col justify-center items-center space-y-4 '>
            <h1 className='text-4xl font-bold'>404</h1>
            <h4 className='text-lg font-medium'>Page Not Found</h4>
            <Link to={'/'} className="btn btn-outline text-red-500">Refresh</Link>
            
        </div>
    );
};

export default ErrorPage;