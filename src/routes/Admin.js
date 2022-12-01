import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PropertyListing from 'pages/member/PropertyListing';
import Nofound from 'pages/StaticPages/Nofound';
import Dashboard from 'pages/member/Dashboard';
import ViewProperty from 'pages/member/ViewProperty';
import Profile from 'pages/customer/Profile';
import SidebarAdmin from 'components/Sidebar/SidebarAdmin';
import ViewUser from 'pages/admin/ViewUser';

function Admin() {
  return (
    <>
      <SidebarAdmin />
      <div className='relative  md:ml-64'>
        {/* <AuthNavbar /> */}
        <main>
          <section className=' w-full h-full  py-10 '>
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/viewuser' element={<ViewUser />} />
            </Routes>
          </section>
        </main>
      </div>
    </>
  );
}

export default Admin;
