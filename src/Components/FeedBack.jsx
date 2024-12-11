import React from 'react';

const FeedBack = () => {
    return (
        <div>
            <div className='w-10/12 mx-auto flex flex-col items-center justify-center p-20 space-y-4 shadow-lg rounded-lg'>
            <h1 className='font-bold text-lg'>Your Feedback</h1>
            <input
  type="text"
  placeholder="Type here"
  className="input input-bordered input-sm w-full max-w-xs" />
  <button className='btn btn-sm bg-green-400'>Submit</button>

            </div>
            
        </div>
    );
};

export default FeedBack;
