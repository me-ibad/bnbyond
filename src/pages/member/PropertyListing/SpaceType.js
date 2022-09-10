import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectOption from 'components/Select/SelectOption';
export default function SpaceType() {
  const [option, setOption] = useState(null);
  const data = [
    { value: 'entire', label: 'Entire Space' },
    { value: 'private', label: 'Private Space' },
    { value: 'shared', label: 'Shared Space' },
  ];

  console.log(option);
  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='bg-color-blue p-10 grid center-styl rounded w-full h-96 relative'>
            <h1 className='text-5xl text-[#1e666f] font-bold leading-tight		'>
              What kind of space can your fellow members expert?
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
          <div className='mt-20'>
            <SelectOption data={data} onSelect={(value) => setOption(value)} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
