import React, { useState } from 'react';

export default function SelectBox({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <div className='grid grid-cols-3 gap-3'>
      {data.map((item) => {
        return (
          <div
            className={` m-1  ${
              item.value === userOption
                ? `border-8 border-color-yellow `
                : 'border-0'
            }`}
          >
            <a onClick={() => selectHandler(item.value)}>
              <img
                src={item.img}
                alt='property type'
                className='w-full h-full  object-contain'
              />
            </a>
          </div>
        );
      })}
    </div>
  );
}
