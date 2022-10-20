import React from 'react';
import Container from '@mui/material/Container';

export default function LandingHeader() {
  return (
    <div>
      <div className='relative pt-16 pb-32  header-height'>
        <div
          className='absolute top-0 w-full h-full bg-center bg-cover 	'
          style={{
            backgroundImage: 'url(' + require('assets/img/bg.jpeg') + ')',
          }}
        >
          <span
            id='blackOverlay'
            className='w-full h-full absolute opacity-10 bg-black'
          ></span>
        </div>
        <div className='relative mt-4  z-10 '>
          <div className='float-right pr-8'>
            <h5 className='text-color-yellow text-lg uppercase mb-1'>
              Point Balance
            </h5>
            <div className='bg-white p-2 rounded-lg text-center w-28'>
              1,200
            </div>
            <h5 className='text-color-yellow uppercase text-lg mb-1 mt-1'>
              Where Can You
              <br />
              stay right now
            </h5>
            <div className='bg-red-700 border border-white p-2 text-center rounded-full text-lg text-white font-bold uppercase w-12 h-12'>
              GO!
            </div>
          </div>
        </div>
        <Container maxWidth='sm'>
          {/* <div className='absolute z-10 flex center-styl pt-32'>
            <div className='bg-white rounded-xl p-2 shadow w-full'>Find</div>
          </div> */}
        </Container>
      </div>
    </div>
  );
}
