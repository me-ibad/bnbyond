import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropertyListing from 'pages/member/PropertyListing';
import Sidebar from 'components/Sidebar/Sidebar';
import Nofound from 'pages/StaticPages/Nofound';
import Dashboard from 'pages/member/Dashboard';
import ViewProperty from 'pages/member/ViewProperty';
import Profile from 'pages/customer/Profile';


function Member() {
  return (
    <>
      <Sidebar />
      <div className='relative  md:ml-64'>
        {/* <AuthNavbar /> */}
        <main>
          <section className=' w-full h-full  py-10 '>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/propertylisting' element={<PropertyListing />} />
              <Route path='*' element={<Nofound />} />
              <Route path='/viewproperty' element={<ViewProperty />} />
            
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
}

export default Member;
