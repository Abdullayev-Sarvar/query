import React from 'react';
import { Outlet } from 'react-router-dom';

const Auth = () => {

  return (
    <div className='flex flex-col min-h-screen'>
      <div className='flex items-center justify-center flex-1 bg-blue-500'>
        <div className='max-w-[400px] w-full bg-white p-6 rounded shadow-md'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
