import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landingpage from 'pages/Landingpage';
import Navbar from 'components/Navbars/AuthNavbar';

function Main() {
  return (
    <>
      <Navbar />
      <main>
        <section className='relative w-full  h-full  min-h-screen '>
          <Routes>
            <Route path='/' element={<Landingpage />} />
          </Routes>
        </section>
      </main>
    </>
  );
}

export default Main;
