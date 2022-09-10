import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landingpage from 'pages/Landingpage';
import Navbar from 'components/Navbars/AuthNavbar';
import PropertyListing from 'pages/member/PropertyListing';

function Main() {
  return (
    <>
      <Navbar />
      <main>
        <section className='relative w-full  h-full  min-h-screen '>
          <Routes>
            <Route path='/' element={<Landingpage />} />
            <Route path='/propertylisting' element={<PropertyListing />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Main;
