import React from 'react';
import Rating from '@mui/material/Rating';
import { ImageEndPoint } from 'config/config';
export default function HomeCard({ data }) {
  return (
    <div className=''>
      <div
        className=' w-60 h-60 bg-center bg-cover rounded'
        style={{
          backgroundImage: ImageEndPoint + data.pics[0],
        }}
      >
        <div className='float-right mr-2 mt-2'>
          <div className='flex bg-white rounded-xl text-black p-2 '>
            <i class='far fa-heart text-sm '></i>
            <span className='text-sm mx-1 -mt-1'>Save</span>
          </div>
        </div>
      </div>

      <div className='my-1 w-60'>
        <h3 className='font-bold truncate'>{data.address}</h3>
        <h5 className='text-sm'>{data.title}</h5>

        <Rating name='size-small' readOnly defaultValue={2} size='small' />
      </div>
    </div>
  );
}
