import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import GoogleMapReact from 'google-map-react';
import ListingColor from 'components/Cards/ListingColor';
import AutoAddress from 'components/AutoAddress';

const AnyReactComponent = ({ text }) => (
  <div>
    <img
      src='https://i.ibb.co/xqDW27s/Vector.png'
      alt='Vector'
      className='object-contain w-10 h-10'
    />
  </div>
);
export default function PropertyAddress() {
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627,
    },
    zoom: 11,
  };

  const changeAddress = (address, lat, long) => {
    console.log(address, lat, long);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-red'
            text='Where is your rentle propert located?'
            color='text-[#e7b5b0]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div style={{ height: '45vh', width: '100%' }}>
            <GoogleMapReact
              bootstrapURLKeys={{
                key: 'AIzaSyBu2WqDbYFglNC_u5HHcoFQmCgnxps6vH8',
              }}
              defaultCenter={defaultProps.center}
              defaultZoom={defaultProps.zoom}
            >
              <AnyReactComponent
                lat={10.99835602}
                lng={77.01502627}
                text='My Marker'
              />
              <div className='fixed -ml-40 -mt-20 '>
                <AutoAddress
                  className='p-3 rounded-full w-72 shadow-xl text-center text-xl placeholder:text-xl'
                  placeholder='Enter your Address'
                  changeaddress={changeAddress}
                />
              </div>
            </GoogleMapReact>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
