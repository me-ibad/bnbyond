import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import Container from '@mui/material/Container';
import LandingHeader from 'components/Headers/LandingHeader';
import Grid from '@mui/material/Grid';
import HomeCard from 'components/Cards/HomeCard';
import Carousel from 'react-multi-carousel';
import { HomeData } from 'data/HomeData';
import { useMutation, useQuery } from 'react-query';
import userServices from 'services/httpService/userAuth/userServices';
import { toast } from 'react-toastify';
import ErrorService from 'services/formatError/ErrorService';
import { Slide } from 'react-slideshow-image';
import Navbar from 'components/Navbars/AuthNavbar';

export default function LandingPage() {
  const [allPost, setallPost] = React.useState([]);

  // const getAllPost = useQuery(
  //   'allpostThema',
  //   () => userServices.commonGetService(`/property/getAllProperty/0/0/0`),
  //   {
  //     refetchOnWindowFocus: false,
  //     onError: (error) => {
  //       toast.error(ErrorService.uniformError(error));
  //     },
  //     onSuccess: (res) => {
  //       alert('S');
  //     },
  //   }
  // );

  const getproperty = async () => {
    let res = await userServices.commonGetService(
      `/property/getAllProperty/0/0/0`
    );

    setallPost(res.data.data);
  };

  useEffect(() => {
    getproperty();
  }, []);

  const responsive = {
    desktop: {
      breakpoint: { max: 2000, min: 1300 },
      items: 5,
      slidesToSlide: 5, // optional, default to 1.
    },

    mindesktop: {
      breakpoint: { max: 1300, min: 700 },
      items: 3,
      slidesToSlide: 5, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 700, min: 500 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <Navbar />

      <main>
        <LandingHeader />

        <section className=' block py-24 lg:pt-14 sm:pt-6 xs:pt-6 mx-2 '>
          <Container maxWidth='lg'>
            <Grid container spacing={4}>
              <Grid item lg={3} md={3} xs={6} sm={6}>
                <div className=' '>
                  <i class='fas fa-shield-alt text-2xl ' />
                  <h4 className='font-bold'>Peace of mind</h4>
                  <p className='text-sm '>
                    Our Book with Confidence guarantee gives you 24/7 support.
                  </p>
                </div>
              </Grid>

              <Grid item lg={3} md={3} xs={6} sm={6}>
                <div className=' '>
                  <i class='fa-solid fa-business-time text-2xl ' />
                  <h4 className='font-bold'>More quality time</h4>
                  <p className='text-sm '>
                    From booking to staying, the whole process is simple and
                    enjoyable.
                  </p>
                </div>
              </Grid>

              <Grid item lg={3} md={3} xs={6} sm={6}>
                <div className=' '>
                  <i class='fa-solid fa-mug-hot text-2xl ' />
                  <h4 className='font-bold'>All the privacy of home</h4>
                  <p className='text-sm '>
                    Enjoy full kitchens, laundary, pools, yards and more.
                  </p>
                </div>
              </Grid>

              <Grid item lg={3} md={3} xs={6} sm={6}>
                <div className=' '>
                  <i class='fas fa-database text-2xl ' />
                  <h4 className='font-bold'>More for less</h4>
                  <p className='text-sm '>
                    More space,more privacy,more amenties-more values
                  </p>
                </div>
              </Grid>
            </Grid>
          </Container>
        </section>

        <section className=' block py-10 lg:pt-0  lg:mx-12 sm:mx-0 xs:mx-0'>
          <Container maxWidth='xl'>
            {/* <Carousel
              responsive={responsive}
              swipeable={true}
              draggable={false}
              // showDots={true}

              // autoPlay={props.deviceType !== 'mobile' ? true : false}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              customTransition='ease-in'
              transitionDuration={500}
              // containerClass='mb-10'
              // removeArrowOnDeviceType={['tablet', 'mobile']}
              // deviceType={this.props.deviceType}
              dotListClass='custom-dot-list-style'
              renderButtonGroupOutside
            >
              {allPost.map((item) => (
                <HomeCard data={item} />
              ))}
            </Carousel> */}
            <div className='w-full flex  flex-wrap'>
              
            {allPost.map((item) => (
              <div className='mx-1 my-1 bnbHomecards-items '>
                <HomeCard data={item} />
                </div>
              ))}
             
              </div>
          </Container>
        </section>

        <section className=' block py-10 lg:pt-0 mt-20  '>
          <div className='relative flex center-styl pb-32 landing-footer  '>
            <div
              className='w-full h-full absolute bg-center bg-cover'
              style={{
                backgroundImage:
                  'url("https://img.freepik.com/free-photo/multi-ethnic-group-young-people-studying-together-white-de_1139-987.jpg?w=1480&t=st=1665659687~exp=1665660287~hmac=4e59eccfd8f05672c59f55199b23e4a5ca99cb813c33b325b71c09942ff5470d")',
              }}
            >
              <span
                id='blackOverlay'
                className='w-full h-full  z-0 opacity-50 bg-black'
              ></span>
            </div>
            <div className='relative pt-10 z-10'>
              <h3 className='text-4xl font-bold text-white'>
                Learn more about the fastest growing <br />
                vacation rental exchange community
              </h3>
              <div className='flex center-styl mt-4'>
                <button className='bg-color-yellow p-4 text-white text-lg'>
                  List Your Property Travel Freely
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
