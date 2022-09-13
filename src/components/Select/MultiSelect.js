import React from 'react';

export default function MultiSelect({
  data,
  withImg,

  onSelect,
  allData,
}) {
  const [checked, onChange] = React.useState(data.status);
  function onCheckmarkPress() {
    onChange(!checked);

    console.log(checked);

    allData[data.id].status = !checked;
    let newdata = allData.map((item) => {
      return item;
    });
    onSelect(newdata);
    // setData(newdata);
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
