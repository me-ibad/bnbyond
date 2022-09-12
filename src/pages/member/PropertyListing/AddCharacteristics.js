import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import ListingColor from 'components/Cards/ListingColor';
import MultiSelect from 'components/Select/MultiSelect';
export default function AddCharacteristics() {
  const data = [
    { value: 'luxurious ', label: 'Luxurious' },
    { value: 'modern', label: 'Modern' },
    { value: 'spacious', label: 'Spacious' },
    { value: 'chill', label: 'Chill' },
    { value: 'central', label: 'Central' },
    { value: 'historic', label: 'Historic' },
    { value: 'designer', label: 'Designer' },
    { value: 'private', label: 'Private' },
    { value: 'queit', label: 'Queit' },
  ];

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-green'
            text='Add some descriptive word'
            color='text-[#709a70]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='grid grid-cols-3 gap-3 lg:mt-20 sm:4'>
            {data.map((item) => (
              <MultiSelect data={item} withImg={false} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
