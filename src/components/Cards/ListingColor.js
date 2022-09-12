import React from 'react';

export default function ListingColor({ bg, text, color }) {
  return (
    <div className={`${bg} p-10 grid center-styl rounded w-full h-96 relative`}>
      <h1 className={`text-4xl ${color} font-bold leading-tight`}>{text}</h1>
      <div className='absolute right-0 bottom-0'>
        <img
          src={require('assets/img/icon.png')}
          alt='icon'
          className='w-20 h-20 rounded object-contain'
        />
      </div>
    </div>
  );
}
