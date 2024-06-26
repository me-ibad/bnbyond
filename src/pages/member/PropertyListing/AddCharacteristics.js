import React, { useState } from 'react';
import Grid from '@mui/material/Grid';

import ListingColor from 'components/Cards/ListingColor';
import MultiSelect from 'components/Select/MultiSelect';
// import { CharacteristicsData } from 'data/CharacteristicsData';
export default function AddCharacteristics({ state, setState,AddCharacteristics}) {
  const [data, setData] = useState(AddCharacteristics);

  const onSelect = (values) => {
    setState((prevState) => ({ ...prevState, characteristics: values }));
    console.log(values);
  };

  return (
    <div>
      <Grid container spacing={5}>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <ListingColor
            bg='bg-color-green'
            text='Keywords to highlight your spot'
            color='text-[#709a70]'
          />
        </Grid>
        <Grid item lg={6} md={6} sm={12} xs={12}>
          <div className='grid grid-cols-3 gap-3 lg:mt-20 sm:4'>
            {data.map((item) => (
              <MultiSelect
                data={item}
                withImg={false}
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
