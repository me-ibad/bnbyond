import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Signin from 'pages/auth/Signin';
import Signup from 'pages/auth/Signup';
import ForgotPassword from 'pages/auth/ForgotPassword';
import UpdatePassword from 'pages/auth/UpdatePassword';

function Auth() {
  return (
    <>
      <main>
        <section className='relative w-full h-full py-20 min-h-screen'>
          <div
            className='absolute top-0 w-full h-full bg-gray-800 bg-cover bg-full'
            style={{
              backgroundImage: 'url(' + require('assets/img/bg.jpeg') + ')',
            }}
          ></div>
          <Routes>
            <Route path='signin' element={<Signin />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgotpassword' element={<ForgotPassword />} />
            <Route path='updatepass/:email/:id' element={<UpdatePassword />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Auth;
