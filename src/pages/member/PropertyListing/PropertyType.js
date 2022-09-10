import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectBox from 'components/Select/SelectBox';

export default function PropertyType() {
  const [option, setOption] = useState(null);
  const data = [
    { value: 'house', img: require('assets/img/house.jpg') },
    { value: 'apartment', img: require('assets/img/apartment.jpg') },
    { value: 'loft', img: require('assets/img/loft.jpg') },
    { value: 'camper', img: require('assets/img/camper.jpg') },
    { value: 'boat', img: require('assets/img/boat.jpg') },
    { value: 'unique', img: require('assets/img/unique.jpg') },
  ];

  console.log(option);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='bg-color-yellow p-10 grid center-styl rounded w-full h-96 relative'>
            <h1 className='text-5xl text-[#ead1a3] font-bold leading-tight'>
              What kind of property it is
            </h1>
            <div className='absolute right-0 bottom-0'>
              <img
                src={require('assets/img/icon.png')}
                alt='icon'
                className='w-20 h-20 rounded object-contain'
              />
            </div>
          </div>
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='mt-16'>
            <SelectBox data={data} onSelect={(value) => setOption(value)} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
