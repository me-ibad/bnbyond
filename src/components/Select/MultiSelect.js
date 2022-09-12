import React from 'react';

export default function MultiSelect({ data, withImg }) {
  const [checked, onChange] = React.useState(false);
  function onCheckmarkPress() {
    onChange(!checked);
  }
  return (
    <div
      className={` bg-color-grey m-1   ${
        checked ? `border-4 border-color-yellow ` : 'border-0'
      }`}
    >
      <a onClick={onCheckmarkPress}>
        {/* {checked && <Ionicons name="checkmark" size={24} color="white" />} */}
        {withImg ? (
          <img
            src={data.img}
            alt='property type'
            className='w-full h-full  object-contain'
          />
        ) : (
          <div className='text-center py-2'>{data.label}</div>
        )}
      </a>
    </div>
  );
}
