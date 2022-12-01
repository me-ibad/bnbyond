import React from 'react';
import { ImageEndPoint } from 'config/config';
import GoogleMapReact from 'google-map-react';

export default function SearchCard({ data }) {
  return (
    <div className='flex w-full my-3 relative' key={data._id}>
      <div>
        <img
          src={ImageEndPoint + data.pics[0]}
          className='w-60 h-40 object-cover rounded'
          alt='review card'
        />
      </div>
      <div className='mx-3'>
        <h2 className='text-lg font-semibold'>{data.title}</h2>
        <div className='my-2 text-sm font-semibold'>
          4 guest- 2 bedroom- 3 bath
        </div>
        <div className='my-2 text-sm font-semibold'>{data.address}</div>

        <div className='my-2 text-sm absolute bottom-0 right-2 font-semibold'>
          200 points/night
        </div>
      </div>
    </div>
  );
}
