import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import SelectOption from 'components/Select/SelectOption';
import ListingColor from 'components/Cards/ListingColor';
export default function SpaceType({ state, setState }) {
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
          <ListingColor
            bg='bg-color-blue'
            text='What kind of space can your fellow members expect?'
            color='text-[#1e666f]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='mt-20'>
            <SelectOption
              data={data}
              spaceType={state.spaceType}
              onSelect={(value) =>
                setState((prevState) => ({ ...prevState, spaceType: value }))
              }
            />
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
