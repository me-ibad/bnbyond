import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectBox from 'components/Select/SelectBox';
import ListingColor from 'components/Cards/ListingColor';
import MultiSelect from 'components/Select/MultiSelect';
import { AmenitiesData } from 'data/AmenitiesData';

export default function AddAmenities({ state, setState }) {
  const [data, setData] = useState(AmenitiesData);

  // console.log(data);
  // setState((prevState) => ({ ...prevState, amenities: data }));

  const onSelect = (values) => {
    setState((prevState) => ({ ...prevState, amenities: values }));
    console.log(values);
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-green'
            text='What Cool featuers or amenities should you fellow members know about'
            color='text-[#709a70]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='grid grid-cols-3 gap-3'>
            {data.map((item) => (
              <MultiSelect
                data={item}
                withImg={true}
                allData={data}
                onSelect={onSelect}
              />
            ))}
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
