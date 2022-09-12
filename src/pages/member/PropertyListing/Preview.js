import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import ListingColor from 'components/Cards/ListingColor';
import ReviewCard from 'components/Cards/ReviewCard';

export default function Preview() {
  return (
    <Grid container spacing={2}>
      <Grid item lg={6} md={6} sm={12} xs={12}>
        <ListingColor
          bg='bg-color-yellow'
          text='All set? Review your property listing'
          color='text-[#ead1a3]'
        />
      </Grid>
      <Grid item lg={4} md={6} sm={12} xs={12}>
        <div className='mt-6 mx-10'>
          <ReviewCard />
        </div>
      </Grid>
    </Grid>
  );
}
