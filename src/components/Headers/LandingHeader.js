import React, { useState } from 'react';
import Container from '@mui/material/Container';
import { localStorageData, Logout } from 'services/auth/localStorageData';
import AutoAddress from 'components/AutoAddress';
import { toast } from 'react-toastify';
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export default function LandingHeader() {
  let navigate = useNavigate();
  let [count, setCount] = useState(0);
  let [lat, setLat] = useState(0);
  let [long, setLong] = useState(0);

  const ref = React.useRef();
  function incrementCount() {
    const num = count + 1;

    if (count > 8) {
      return;
    }
    setCount(num);
  }
  function decrementCount() {
    const num = count - 1;
    if (num < 0) {
      return;
    } else {
      setCount(num);
    }
  }

  const changeAddress = (address, lat, long) => {
    console.log(address, lat, long);
    setLat(lat);
    setLong(long);
    // setState((prevState) => ({ ...prevState, address: address }));
    // setState((prevState) => ({ ...prevState, lat: lat }));
    // setState((prevState) => ({ ...prevState, long: long }));
  };

  const onSearch = () => {
    if (lat == 0) {
      toast.error('Enter Address');
      return;
    }

    navigate(`/search/${lat}/${long}`);
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
            {localStorageData('_id') ? (
              <>
                <h5 className='text-color-yellow text-lg uppercase mb-1'>
                  Point Balance
                </h5>
                <div className='bg-white p-2 rounded-lg text-center w-28'>
                  00
                </div>
              </>
            ) : null}

            <h5 className='text-color-yellow uppercase text-lg mb-1 mt-1'>
              Where Can You
              <br />
              stay right now
            </h5>
            <div className='bg-red-700 border border-white p-2 text-center rounded-full text-lg text-white font-bold uppercase w-12 h-12'>
              GO!
            </div>
          </div>

          <div className='pt-16 grid center-styl'>
            <h1 className='text-white text-3xl font-semibold text-center'>
              Host other BnByond members. Earn points. Travel the world
            </h1>
            <h3 className='mt-2 text-white text-xl text-center'>
              Get the most out of your vacation rental property.
            </h3>
          </div>

          <Container maxWidth='lg'>
            <div className=' w-full z-10 flex center-styl pt-10'>
              <div className='bg-white rounded-xl  pr-4 shadow w-full'>
                <div className='flex flex-wrap items-center justify-between'>
                  <div className='my-4 lg:my-0 md:my-0  flex items-center '>
                    <div className=' w-fit border-2 border-gray-300 rounded-full ml-2'>
                      <AutoAddress
                        className='w-6/12 rounded-full  bg-gray-300 text-black px-4 py-2'
                        placeholder='Enter your Address'
                        changeaddress={changeAddress}
                      />
                      {/* <input
                        type='text text-black'
                        placeholder='Find Your Destination'
                        className='w-6/12 rounded-full  bg-gray-300 text-black px-4 py-2'
                      /> */}
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
                      <button className='ml-5' onClick={decrementCount}>
                        -
                      </button>
                      <span className='bg-gray-300 px-4 py-2 rounded-3xl ml-2 '>
                        {count}
                      </span>
                      <button className='ml-1' onClick={incrementCount}>
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex center-styl mt-3 '>
              <button
                onClick={onSearch}
                className='bg-color-red text-white text-sm font-bold w-2/4 px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1 ease-linear transition-all duration-150'
              >
                Search
              </button>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
