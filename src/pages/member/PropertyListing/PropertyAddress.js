import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import GoogleMapReact from 'google-map-react';

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

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='bg-color-red p-10 grid center-styl rounded w-full h-[420px] relative'>
            <h1 className='text-5xl text-[#e7b5b0] font-bold leading-tight'>
              Where is your rentle propert located?
            </h1>
            <div className='absolute right-0 bottom-0'>
              <img
                src={require('assets/img/icon.png')}
                alt='icon'
                className='w-20 h-20 rounded object-contain'
              />
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div style={{ height: '50vh', width: '100%' }}>
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
            </GoogleMapReact>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
