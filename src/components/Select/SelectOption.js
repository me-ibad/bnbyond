import React, { useState } from 'react';

export default function SelectOption({ data, onSelect }) {
  const [userOption, setUserOption] = useState(null);
  const [checked, onChange] = React.useState(false);

  const selectHandler = (value) => {
    onSelect(value);
    setUserOption(value);
  };
  return (
    <div className='grid grid-cols-3 gap-3'>
      {data.map((item) => {
        return (
          <a
            onClick={() => selectHandler(item.value)}
            className={` w-40 h-40 flex center-styl bg-color-grey p-4  ${
              item.value === userOption
                ? `border-8 border-color-yellow `
                : 'border-0'
            }`}
          >
            <div className='text-2xl uppercase text-center font-bold text-[#848484]'>
              {item.label}
            </div>
          </a>
        );
      })}
    </div>
  );
}
