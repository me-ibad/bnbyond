import React from 'react';
import Container from '@mui/material/Container';

export default function LandingHeader() {
  const ref = React.useRef();
  const handleInterviewDateClick = () => {
    // alert('mm');
    ref.current.focus();
  };
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

          <Container maxWidth='lg'>
            <div className=' w-full z-10 flex center-styl pt-6'>
              <div className='bg-white rounded-xl  pr-4 shadow w-full'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='my-4 lg:my-0 md:my-0  flex items-center '>
                    <div className=' w-fit border-2 border-gray-300 rounded-full ml-2'>
                      <input
                        type='text text-black'
                        placeholder='Find Your Destination'
                        className='w-6/12 rounded-full  bg-gray-300 text-black px-4 py-2'
                      />
                      <button className='text-sm'>
                        <i class='fas fa-map-marked-alt ml-2 '></i>-Used Map
                        Instead
                      </button>
                    </div>
                  </div>
                  <div className='bg-gray-300 w-fit px-4 py-2 flex items-center rounded-3xl'>
                    <span>Check-In</span>

                    <div className='float-right'>
                      <i class='fas fa-calendar-alt text-3xl ml-4'></i>
                    </div>
                  </div>

                  <div className='bg-gray-300 w-fit px-4 py-2 flex items-center rounded-3xl'>
                    <span>Check-out</span>

                    <div className='float-right'>
                      <i class='fas fa-calendar-alt text-3xl ml-4'></i>
                    </div>
                  </div>
                  <div className=' m-4 lg:mr-2 md:mr-2 '>
                    <div className='flex items-center font-bold'>
                      <label htmlFor=''>Guests</label>
                      <button className='ml-5'>-</button>{' '}
                      <span className='bg-gray-300 px-4 py-2 rounded-3xl ml-2 '>
                        1
                      </span>
                      <button className='ml-1'>+</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
