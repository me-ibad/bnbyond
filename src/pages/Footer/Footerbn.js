import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, Link } from "react-router-dom";

function Footerbn() {
  return (
    <>
      <div className=' footer-bg-col'>
        <div className='bnbLogo'>
          <Link
            className='text-white font-bold leading-relaxed inline-block ml-16 mt-6 py-2 whitespace-nowrap uppercase'
            to='/'
          >
            <img
              className='w-full h-20  object-cover '
              src={require("assets/img/whitelogo.png")}
              alt=''
            />
          </Link>
        </div>

        <Grid container spacing={2}>
          <Grid item lg={4} md={4} xs={12} className=''>
            <ul className='ml-16 mt-10 text-white text-sm bn-text-col'>
              <li>List Your property</li>
              <li className='mt-2'>Hot Destinations</li>
              <li className='mt-2'>Tips to Consider</li>
              <li className='mt-2'>Vacation Rental Resources</li>
            </ul>
          </Grid>
          <Grid item lg={4} md={4} xs={12} className=''>
            <ul className='ml-16 mt-10 text-white text-sm bn-text-col'>
              <li>About</li>
              <li className='mt-2'>Affiliate/Referal Program</li>
              <li className='mt-2'>Media Center</li>
              <li className='mt-2'>Join Our Team</li>
            </ul>
          </Grid>
          <Grid item lg={4} md={4} xs={12} className=''>
            <ul className='ml-16 mt-10 text-white text-sm bn-text-col'>
              <li>Terms & Condition</li>
              <li className='mt-2'>Privacy Policy</li>
              <li className='mt-2'>Acoun Cookies</li>
            </ul>
          </Grid>
        </Grid>
        <br />
        <br />
        <br />
      </div>
    </>
  );
}

export default Footerbn;
