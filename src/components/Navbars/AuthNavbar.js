/*eslint-disable*/
import IndexDropdown from 'components/Dropdowns/IndexDropdown';
import React from 'react';

import { useNavigate, Link } from 'react-router-dom';
import { localStorageData, Logout } from 'services/auth/localStorageData';

// components

// import PagesDropdown from 'components/Dropdowns/PagesDropdown.js';

export default function Navbar(props) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  let navigate = useNavigate();

  return (
    <>
      <nav className='top-0 absolute z-50 w-full flex flex-wrap items-center  justify-between px-2 py-3 navbar-expand-lg'>
        <div className='container px-4 mx-auto flex flex-wrap items-center justify-between'>
          <div className='w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start'>
            {/* <Link
              className='text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'
              to='/'
            >
              <img
                className='w-full h-12 object-cover '
                src={require('assets/img/whitelogo.png')}
              />
            </Link> */}
            <button
              className='cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none'
              type='button'
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <i className='text-white fas fa-bars'></i>
            </button>
          </div>
          <div
            className={
              'lg:flex flex-grow items-center bg-white lg:bg-opacity-0 lg:shadow-none' +
              (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
            }
            id='example-navbar-warning'
          >
            <ul className='flex flex-col lg:flex-row list-none mr-auto'>
              {/* <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='/'
                >
                  <i className='lg:text-blueGray-200 text-blueGray-400 far fa-file-alt text-lg leading-lg mr-2' />{' '}
                  Docs
                </a>
              </li> */}
            </ul>
            <ul className='flex flex-col lg:flex-row list-none lg:ml-auto'>
              <li className='flex items-center'>
                <a
                  className='lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                  href='/'
                  target='_blank'
                >
                  {/* <i className='lg:text-blueGray-200 text-blueGray-400 fab fa-twitter text-lg leading-lg ' /> */}
                  {/* <span className=' inline-block ml-2'>About  </span> */}
                </a>
              </li>

              {/* <li className='flex items-center'>
                {localStorageData('_id') ? (
                  <a
                    className='lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold'
                    // onClick={() => {
                    //   Logout();

                    //   navigate('/');
                    // }}
                  >
                    <IndexDropdown />
                  </a>
                ) : (
                  <a
                    className='lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2  items-center text-sm font-bold flex'
                    href='/auth/signin'
                  >
                    <img
                      className='w-6 h-6 object-contain '
                      src={require('assets/img/icon.png')}
                    />
                    <span className=' inline-block ml-2'>
                     Log in/Become a member
                    </span>
                  </a>
                )}
              </li> */}

              {/* <li className='flex items-center'>
                <button
                  className='bg-white text-blueGray-700 active:bg-blueGray-50 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3 ease-linear transition-all duration-150'
                  type='button'
                >
                  <i className='fas fa-arrow-alt-circle-down'></i> Download
                </button>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
