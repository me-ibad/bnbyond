import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectBox from 'components/Select/SelectBox';

export default function AddAmenities() {
  const [option, setOption] = useState(null);
  const data = [
    { value: 'fireplace', img: require('assets/img/fireplace.jpg') },
    { value: 'exercise', img: require('assets/img/exercise.jpg') },
    { value: 'pool', img: require('assets/img/pool.jpg') },
    { value: 'outdoordining', img: require('assets/img/outdoordining.jpg') },
    { value: 'bbq', img: require('assets/img/bbq.jpg') },
    { value: 'firepit', img: require('assets/img/firepit.jpg') },
    { value: 'hottub', img: require('assets/img/hottub.jpg') },
    { value: 'kid', img: require('assets/img/kid.jpg') },
    { value: 'patio', img: require('assets/img/patio.jpg') },
  ];

  console.log(option);

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='bg-color-green p-10 grid center-styl rounded w-full h-96 relative'>
            <h1 className='text-4xl text-[#709a70] font-bold leading-tight'>
              What Cool featuers or amenities should you fellow members know
              about
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
          <div className=''>
            <SelectBox data={data} onSelect={(value) => setOption(value)} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
