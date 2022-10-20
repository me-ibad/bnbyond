import React from 'react';

function Nofound() {
  return (
    <div className=' bg-red-500 m-10 mt-20'>
      <div className='flex'>
        <div>ssss</div>
        <div>ssss</div>
        <div>ssss</div>
        <h3 className='text-3xl mb-2 font-semibold leading-normal'>
          TRAVEL. FREELY.
        </h3>
        <p className='landing-text'>
          BnByond is a member community exchange for rental property owners.
          Being a member means you rent out your property to other members in
          exchange for points. The points you earn allow you to stay at other
          member rental properties. Free.
        </p>
        <p className='landing-text'>
          Rental properties are booked around 60% of the time. That means 40% of
          the time, your rental property is producing no value. By making stays
          available to fellow BnByonders, you earn a ton of points, and see the
          world.
        </p>
        <p className='landing-text'>
          So how do you qualify to become a BnByond member? Own a vacation
          rental property. There. That’s it.
        </p>
        <p className='landing-text'>
          Annual membership to BnByond is only $45. Commissions are paid by only
          the renter, and it’s only 3% of value.
        </p>
        <p className='landing-text'>
          Just like other vacation rental property sites, you’ll build your
          profile, list your property, show it off with great photos, and set
          the points price consistent with the cash price you advertise on other
          sites. As a renter, you’ll be able to search by geography, category,
          type of property, number of guests, and you will book directly from
          the site or from the app on your phone. Super easy.
        </p>
        <p className='landing-text'>
          Oh - and when you become a member, you automatically get 1,000 points
          that you can use immediately. Seriously.
        </p>
        <p className='landing-text'>
          So, our fellow rental property owner: Ready to see the world?
        </p>

        <div className=' mx-auto px-4'>
          <div className='flex flex-wrap justify-center  '>
            <div className='sm:w-full xs:w-full lg:w-6/12 px-4'>
              <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-200'>
                <div className='flex-auto p-5 lg:p-10'>
                  <h4 className='text-2xl font-semibold'>
                    Want to work with us?
                  </h4>
                  <p className='leading-relaxed mt-1 mb-4 text-gray-500'>
                    Complete this form and we will get back to you in 24 hours.
                  </p>
                  <div className='relative w-full mb-3 mt-8'>
                    <label
                      className='block uppercase text-gray-600 text-xs font-bold mb-2'
                      htmlFor='full-name'
                    >
                      Full Name
                    </label>
                    <input
                      type='text'
                      className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Full Name'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-600 text-xs font-bold mb-2'
                      htmlFor='email'
                    >
                      Email
                    </label>
                    <input
                      type='email'
                      className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                      placeholder='Email'
                    />
                  </div>

                  <div className='relative w-full mb-3'>
                    <label
                      className='block uppercase text-gray-600 text-xs font-bold mb-2'
                      htmlFor='message'
                    >
                      Message
                    </label>
                    <textarea
                      rows='4'
                      cols='80'
                      className='border-0 px-3 py-3 placeholder-gray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full'
                      placeholder='Type a message...'
                    />
                  </div>
                  <div className='text-center mt-6'>
                    <button
                      className='bg-color-secondry text-white active:bg-gray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150'
                      type='button'
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nofound;
