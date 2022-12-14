import React from 'react';
import { useEffect } from 'react';

import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';

function AutoAddress(props) {
  // const [address, setaddress] = useState(localStorageData('address'));

  // const { label, onChange, setaddress, address } = props;
  useEffect(() => {
    setValue(props.address);
  }, []);
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {},
  });

  const handleInput = (e) => {
    setValue(e.target.value);
  };

  const handleSelect =
    ({ description }) =>
    () => {
      // When user selects a place, we can replace the keyword without request data from API
      // by setting the second parameter as "false"

      // console.log('value=', description);
      setValue(description, false);

      clearSuggestions();

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          props.changeaddress(description, lat, lng);

          // console.log('📍 Coordinates: ', { lat, lng });
        })
        .catch((error) => {
          console.log('😱 Error: ', error);
        });
    };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className='cursor-pointer text-center hover:text-color-primary '
          key={id}
          onClick={handleSelect(suggestion)}
        >
          <strong className='text-lg '>{main_text}</strong> {secondary_text}
        </li>
      );
    });

  return (
    <>
      <input
        className={props.className}
        placeholder={props.label}
        value={value}
        onChange={handleInput}
        disabled={!ready}
        {...props}
      />

      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      <div className='ml-3 w-64 absolute z-40 flex center-styl'>
        {status === 'OK' && (
          <ul className='bg-white p-2 w-full shadow-lg '>
            {renderSuggestions()}
          </ul>
        )}
      </div>
    </>
  );
}

export default AutoAddress;
