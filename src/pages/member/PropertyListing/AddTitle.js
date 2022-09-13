import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import ListingColor from 'components/Cards/ListingColor';

export default function AddTitle({ state, setState }) {
  const [title, setTitle] = useState('');
  return (
    <div>
      <Grid container spacing={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-red'
            text='Give your property a catchy title'
            color='text-[#e7b5b0]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='my-6 '>
            <h3 className='text-2xl font-bold text-black mb-4'>
              Add your title here
            </h3>
            <textarea
              id='story'
              name='story'
              rows='5'
              cols='33'
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              placeholder='Island beach'
              className='input-styl placeholder:text-3xl text-3xl placeholder:text-color-grey'
            />
            <div className='text-sm mt-2'>{title.length}/50</div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
