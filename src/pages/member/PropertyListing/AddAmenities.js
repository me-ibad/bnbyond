import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectBox from 'components/Select/SelectBox';
import ListingColor from 'components/Cards/ListingColor';
import MultiSelect from 'components/Select/MultiSelect';

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
          <ListingColor
            bg='bg-color-green'
            text='  What Cool featuers or amenities should you fellow members know
            about'
            color='text-[#709a70]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='grid grid-cols-3 gap-3'>
            {data.map((item) => (
              <MultiSelect data={item} withImg={true} />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
