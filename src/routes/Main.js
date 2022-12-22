import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Landingpage from 'pages/Landingpage';
import Navbar from 'components/Navbars/AuthNavbar';
import PropertyListing from 'pages/member/PropertyListing';
import Nofound from 'pages/StaticPages/Nofound';
import Footer from 'components/Footers/Footer';
import ViewProperty from 'pages/member/ViewProperty';
import Profile from 'pages/customer/Profile';
import VerificationPage from 'pages/customer/VerificationPage';
import SearchListings from 'pages/customer/SearchListings';
import ImageSlidertest from 'components/ImageSlidertest/ImageSlidertest';
import BnbNav from 'components/NavBar/BnbNav';
import LandingPage from 'pages/Landingpage';
import PropertyDetails from 'pages/customer/PropertyDetails';
import ReserveDetails from 'pages/customer/PropertyDetails/ReserveDetails';


function Main() {
  return (
    <>
    <BnbNav/>
      <main>
        <section className='relative w-full  h-full  min-h-screen '>
          <Routes>
            <Route path='/propertylisting' element={<PropertyListing />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/verification' element={<VerificationPage />} />
            <Route path='/search/:lat/:long' element={<SearchListings />} />
            <Route path='/ImageSlidertest' element={<ImageSlidertest />} />
            <Route path='/BnbNav' element={<BnbNav />} />
             <Route path='/' element={<LandingPage />} />
             <Route path='/propertydetails/:id' element={<PropertyDetails />} />
             <Route path='/propertydetails/ReserveDetails' element={<ReserveDetails />} />
            

            <Route path='*' element={<Nofound />} />
          </Routes>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Main;
