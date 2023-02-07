import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

export default function BookingConfirmation() {
  return (
    <div className='min-h-screen my-8'>
      <Container maxWidth='lg'>
        <h1 className='font-bold text-3xl'>
          Congratulations! your booking has been confirm
        </h1>
        <h3 className='font-bold text-xl my-4'>Upcoming reservation</h3>

        <div className='shadow-xl rounded-xl w-full'>
          <Grid container>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <img
                src='https://img.freepik.com/free-photo/luxury-sun-beach-perfect-bay_1232-4212.jpg?w=1060&t=st=1675762790~exp=1675763390~hmac=52460051390a01bb883e961a5d83148f8757be775f47277e5eb885ee9fc81cdd'
                className='w-full h-72 object-cover rounded-tl-xl rounded-bl-xl'
                alt='con'
              />
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className='p-4 px-6'>
                <h2 className='font-bold text-xl'>Boombo Price</h2>
                <h3 className=' text-lg text-color-grey'>Tree house by Emma</h3>
                <div className='border-t border-color-grey my-4' />
                <h2 className='font-bold text-lg'>Date</h2>

                <div className='flex justify-between'>
                  <div className='text-black'>
                    Check-in
                    <br />
                    26 March 2022
                  </div>
                  <div className='text-black'>
                    Check-out
                    <br />
                    26 March 2022
                  </div>
                </div>
                <div className='border-t border-color-grey my-4' />
                <h2 className='font-bold text-lg'>Location</h2>
                <div className='flex justify-between'>
                  <div className='text-black'>26 Garden town</div>
                  <a className='text-black underline text-sm'>
                    Open in Map <i class='fas fa-map-marker-alt'></i>
                  </a>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>

        <h3 className='font-bold text-xl my-4'>Your reservation Information</h3>

        <div className='shadow-xl rounded-xl w-full p-4'>
          <Grid container spacing={8}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className='overscroll-y-auto	'>
                <div className='font-bold text-lg my-4'>Things to know</div>

                <div className='font-bold text'>Instructions</div>

                <ul class='list-disc px-4 py-2'>
                  <li className='text-sm'>
                    Now this is a story all about how, my life got
                    flipped-turned upside down
                  </li>
                </ul>

                <div className='font-bold text'>House Rule</div>

                <p>Following are house rules</p>
                <div className='border-t border-color-grey my-4' />
                <div className='font-bold text-lg my-4'>Hosted by Emma</div>

                <div className='flex my-4'>
                  <img
                    src='https://img.freepik.com/free-photo/portrait-beautiful-young-woman-standing-grey-wall_231208-10760.jpg?w=1060&t=st=1675768785~exp=1675769385~hmac=25366d422de2a3c652540b7c0af5e87f6b6b897b4dc097dba849b774151342ad'
                    className='w-28 h-28 object-cover rounded-full'
                    alt='user'
                  />

                  <p className='mx-2  self-center	'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Nulla placerat, nibh vitae consectetur pulvinar, lorem magna
                    consectetur ex, id luctus metus erat non risus
                    <br />
                    <a className='underline text-color-green'>Chat Host</a>
                  </p>
                </div>

                <div className='border-t border-color-grey my-4' />
                <div className='font-bold text-lg'>Points Info</div>
                <div className='font-bold text'>Total cost: 500 points</div>
                <div className=' text'>
                  Remaing points in your account: 300 points
                </div>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className='font-bold text-lg my-4'>Reservation Details</div>
              <div className='font-bold text'>Who is coming</div>

              <div className='flex justify-between'>
                <div>2 guest </div>
                <div className='underline'>
                  manage guest <i class='fas fa-users'></i>
                </div>
              </div>

              <div className='border-t border-color-grey my-4' />
              <div className='font-bold text'>Who is coming</div>
              <p>asuqqenklshhglajsAsd\sFS</p>

              <div className='border-t border-color-grey my-4' />
              <button className='font-bold text-color-green text-lg'>
                Change Reservation
              </button>

              <div className='border-t border-color-grey my-4' />
              <button className='font-bold text-color-red text-lg'>
                Cancel Reservation
              </button>

              <div className='border-t border-color-grey my-4' />
              <div className='font-bold text'>Canceling Policy</div>
              <div>here is policy</div>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
