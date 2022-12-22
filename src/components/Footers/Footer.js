import React from 'react';

export default function Footer() {
  return (
    <>
      <footer className='relative bg-white mt-20'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-wrap text-center lg:text-left'>
            <div className='w-full lg:w-6/12 px-4'>
              <h4 className='text-3xl font-semibold'>Let's keep in touch!</h4>
              <h5 className='text-lg mt-0 mb-2 text-blueGray-600'>
              Find us on any of these platforms, and we will respond within 1-2 business days.
              </h5>
              <div className='mt-6 lg:mb-0 mb-6'>
                <button
                  className='bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-twitter'></i>
                </button>
                <button
                  className='bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-facebook-square'></i>
                </button>

                <button
                  className='bg-white text-blue-700 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2'
                  type='button'
                >
                  <i className='fab fa-github'></i>
                </button>
              </div>
            </div>
            <div className='w-full lg:w-6/12 px-4'>
              <div className='flex flex-wrap items-top mb-6'>
                <div className='w-full lg:w-4/12 px-4 ml-auto'>
                  <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                    Useful Links
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        About Us
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Blog
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Github
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Free Products
                      </a>
                    </li>
                  </ul>
                </div>
                <div className='w-full lg:w-4/12 px-4'>
                  <span className='block uppercase text-blueGray-500 text-sm font-semibold mb-2'>
                    Other Resources
                  </span>
                  <ul className='list-unstyled'>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        MIT License
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Terms & Conditions
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className='text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm'
                        href='/'
                      >
                        Contact Us
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-6 border-blueGray-300' />
          <div className='flex flex-wrap items-center md:justify-between justify-center'>
            <div className='w-full md:w-4/12 px-4 mx-auto text-center'>
              <div className='text-sm text-blueGray-500 font-semibold py-1'>
                Copyright © {new Date().getFullYear()} Bnbond by{' '}
                <a
                  href='https://www.encodersoft.co/'
                  target='_blank'
                  className='text-blueGray-500 hover:text-blue-800'
                >
                  Encodersoft
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
