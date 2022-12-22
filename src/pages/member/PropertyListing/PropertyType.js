import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectBox from 'components/Select/SelectBox';
import ListingColor from 'components/Cards/ListingColor';

export default function PropertyType({ state, setState }) {
  const [option, setOption] = useState(null);
  const data = [
    { value: 'house', img: require('assets/img/house.jpg') },
    { value: 'apartment', img: require('assets/img/apartment.jpg') },
    { value: 'loft', img: require('assets/img/loft.jpg') },
    { value: 'camper', img: require('assets/img/camper.jpg') },
    { value: 'boat', img: require('assets/img/boat.jpg') },
    { value: 'unique', img: require('assets/img/unique.jpg') },
  ];

  // setState((prevState) => ({ ...prevState, propertyType: option }));

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-yellow'
            text='What type of property is it?'
            color='text-[#ead1a3]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='mt-16'>
            <SelectBox
              data={data}
              propertyType={state.propertyType}
              onSelect={(value) =>
                setState((prevState) => ({ ...prevState, propertyType: value }))
              }
             
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
