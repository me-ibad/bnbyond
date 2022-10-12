import React from 'react';

function BnBWebsite() {
  return (
    <>
      {/* Header */}

      <Grid container spacing={0}>
        <div
          className=' header-bg  w-screen h-6/12 relative top-0  bg-center bg-cover bg-no-repeat '
          style={{
            // backgroundImage: 'url(' + require('assets/img/landingbg.png') + ')',
            backgroundImage:
              'url("https://images.unsplash.com/photo-1532971077387-7c6568101df5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80")',
          }}
        >
          {/* Navbar  (logo and menu) */}
          <div className='Nav-logo-menu-wrapper flex items-center'>
            <Grid item xs={4} sm={3} className='w-full  h-28 '>
              <div className='navLogo px-4 py-4 '>
                <img src={require('assets/images/bnblogo.png')} alt='' />
              </div>
            </Grid>
            <Grid item xs={8} sm={9} className='w-full  h-28 '>
              <ul className=' NavBar-items flex w-11/12 h-full  justify-end items-center '>
                <li className='px-8'>
                  <a href=''>About</a>
                </li>
                <li>
                  <i class='fas fa-umbrella-beach mr-2 text-white'></i>
                  <a className='text-white' href=''>
                    Login as BnByond Test
                  </a>
                </li>
              </ul>
            </Grid>
          </div>
          {/* points Balance */}
          <Grid item xs={12} sm={12} className='h-24 '>
            <div className='balance-wrapper w-11/12 h-full  '>
              <div className='balance-txt-btn-wrapper '>
                <div className='flex justify-end'>
                  <h1 className='text-xs text-white font-bold center '>
                    POINTS BALANCE
                  </h1>
                </div>

                <div className='balance-btn-wrapper w-full flex items-center justify-end'>
                  <button className='btn-balance text-xs px-8 py-2 rounded-lg bg-white mt-2 '>
                    1200
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={12} className=' h-24 '>
            <div className='go-wrapper w-11/12 h-full '>
              <div className='go-txt-btn-wrapper'>
                <div className='go-text-caption flex justify-end '>
                  <h1 className='text-xs text-white font-bold right'>
                    WHERE CAN YOU
                    <br />
                    STAY RIGHT NOW?
                  </h1>
                </div>
                <div className='go-btn-wrapper w-full h-full flex items-center justify-end'>
                  <button className='btn-go text-xs text-white border-2 bg-red-700   px-3 py-4 rounded-full  mt-2 mr-4'>
                    GO!
                  </button>
                </div>
              </div>
            </div>
          </Grid>
          {/* Input field */}

          <Grid item xs={12} className='h-40 input-grid '>
            <div className='input-field-wrapper w-fit px-4 mx-auto rounded-2xl h-16 border-2 mt-12 bg-white '>
              <div className='input-wrapper  h-full flex items-center justify-between'>
                <div className='input-fields-parent w-6/12  flex items-center px-4  '>
                  <div className='loc-input-label'>
                    <label className='' htmlFor=''>
                      Find Your Destination
                    </label>
                  </div>

                  <div className='input-text-field-wrapper w-fit border-2 border-gray-300 rounded-full ml-2'>
                    <input
                      type='text text-black'
                      className='w-6/12 rounded-full  bg-gray-300 text-black px-4 py-2'
                    />
                    <button>
                      <i class='fas fa-map-marked-alt ml-2 '></i>-Used Map
                      Instead
                    </button>
                  </div>
                </div>
                {/* Check outs */}
                <div className='checkouts-parent-wrapper w-fit '>
                  <div className='check-in-wrapper w-fit flex items-center  '>
                    <label
                      htmlFor=''
                      className='px-4 py-2 bg-gray-300  rounded-3xl'
                    >
                      Check-In
                    </label>
                    <input type='date' />
                  </div>
                  <div className='check-out-wrapper flex items-center'>
                    <label
                      htmlFor=''
                      className='px-3 py-2 bg-gray-300 rounded-3xl'
                    >
                      Check-Out
                    </label>
                    <input type='date' />
                  </div>
                </div>
                <div className='guest-wrapper flex items-center font-bold'>
                  <label htmlFor=''>Guests</label>
                  <button className='ml-5'>-</button>{' '}
                  <span className='bg-gray-300 px-4 py-2 rounded-3xl ml-2 '>
                    1
                  </span>
                  <button className='ml-1'>+</button>
                </div>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>
      {/* Icon */}
      <Grid container spacing={0}>
        <div className='icon-container'>
          <Grid item xs={12} sm={3}>
            <div className='Icons-wrapper '>
              <div className='icons-card'>
                <i class='fa-solid fa-shield '></i>
                <h1>Peace of mind</h1>
                <p>
                  Our Book with Confidence guarantee gives you 24/7 support.
                </p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <div className='Icons-wrapper '>
              <div className='icons-card'>
                <i class='fa-solid fa-business-time'></i>
                <h1>More quality time</h1>
                <p>
                  From booking to staying, the whole process is simple and
                  enjoyable.
                </p>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div className='Icons-wrapper '>
              <div className='icons-card'>
                <i class='fa-solid fa-mug-hot'></i>
                <h1>All the privacy of home</h1>
                <p>Enjoy full kitchens,laundary,pools,yards and more.</p>
              </div>
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <div className='Icons-wrapper '>
              <div className='icons-card'>
                <i class='fa-solid fa-maximize'></i>
                <h1>More for less</h1>
                <p>More space,more privacy,more amenties-more values.</p>
              </div>
            </div>
          </Grid>
        </div>
      </Grid>

      {/* Cards */}

      {/* Footer */}

      {/* footer-background-image */}
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <div
            className='foot-bg-img  relative top-0  h-screen w-full  bg-center bg-cover '
            style={{
              // backgroundImage: 'url(' + require('assets/img/landingbg.png') + ')',
              backgroundImage:
                'url("https://img.freepik.com/free-photo/greet-final-battle-alone-illustration_456031-4.jpg?w=1060&t=st=1665472709~exp=1665473309~hmac=f7c8ed69a2c8991fb2d0d77e8e998cec890935d19afb75e4f6807eb6505fcfd5")',
            }}
          >
            <Grid container spacing={0}>
              <Grid item xs={12} className=''>
                <div className='footer-bg-content-wrapper h-screen flex justify-center items-center '>
                  <div className='footer-bg-text-wrapper  '>
                    <div className='footer-bg-img-heading text-white text-3xl font-bold'>
                      <h1>Learn more about the fastest growing</h1>
                      <h1>vacation rental exchange community</h1>
                    </div>
                    <div className='footer-bg-btn flex justify-center bg-yellow-500 text-xl w-10/12 h-20 text-white mt-6 mx-10'>
                      <button>List Your Property Travel Freely.</button>
                    </div>
                  </div>
                </div>
              </Grid>
            </Grid>
          </div>
        </Grid>
      </Grid>

      {/* Footer content */}
      <Container maxWidth='md'>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6}>
            <div className='footer-logo-wrapper w-10/12 flex '>
              <img
                className=''
                src={require('assets/images/bnbfooter.jpg')}
                alt=''
              />
            </div>
            <div className='footer-text-list-wrapper w-8/12  flex justify-center '>
              <div className='footer-text-list  '>
                <div>
                  <h1 className='font-bold'>Explore bnbyond </h1>
                  <ul>
                    <li>List your property</li>
                    <li>Book with Confidence</li>
                    <li>Trust and Saftey</li>
                    <li>Partner Resources</li>
                    <li>Vacation rental guides</li>
                    <li>Book with Confidence</li>
                  </ul>
                </div>
                <br />

                <div>
                  <h1 className='font-bold'>Company </h1>
                  <br />
                  <ul>
                    <li>About</li>
                    <li>Carrers</li>
                    <li>Affiliates</li>
                    <li>Media center</li>
                    <li>Advertising</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className='footer-copyright-text-wrapper    flex  items-center justify-end  '>
              <i class='fas fa-copyright'></i>
              <p className='ml-1'>
                2022 BnByond, a Great Big Brains Inc.company. All rights
                reserved.
              </p>
            </div>
            <div className='footer-terms-conditons text-xs  '>
              <p>
                Terms and Conditions. Privacy Policy . Do Not Sell My Personal
                Information.
              </p>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className='fields-wrapper  flex items-center'>
              <div>
                <div className='footer-inputs-wrapper'>
                  <h1 className='font-bold'>
                    Get Travels Tips,Offers and Inspiration from BnByond
                  </h1>
                  <input
                    className='border-2 border-black w-8/12 py-3 pl-2 mt-2   rounded-xl  '
                    placeholder='Email address'
                  />
                  <button className='text-white bg-blue-600 rounded-3xl px-6 py-2 ml-2 '>
                    {' '}
                    Subscribe
                  </button>
                </div>
                <br />
                <h1 className='phone-input-heading font-bold'>
                  Get the BnByond mobile app
                </h1>
                <div className='footer-phone-inputs-wrapper flex items-center mt-2'>
                  <PhoneInput
                    inputClass='phone-input-field'
                    containerClass='phone-input-container'
                    buttonClass='btn-sty-l'
                    className=''
                    placeholder='Your mobile phone number'
                    country={'pk'}
                    // value={this.state.phone}
                    // onChange={phone => this.setState({ phone })}
                  />
                  <button className='text-white bg-blue-600 rounded-3xl px-6 py-2   ml-2 '>
                    {' '}
                    Send
                  </button>
                </div>
              </div>
            </div>
            {/* footer icons */}
            <div className='footer-icon  flex justify-end '>
              <i class='fab fa-facebook mr-3'></i>
              <i class='fab fa-instagram mr-3'></i>
              <i class='fab fa-linkedin mr-3'></i>
              <i class='fab fa-pinterest mr-3'></i>
              <i class='fab fa-youtube mr-3'></i>
              <i class='fab fa-twitter-square'></i>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default BnBWebsite;
