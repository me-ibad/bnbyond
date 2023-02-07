import React, { useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import PropertyType from './PropertyType';
import SpaceType from './SpaceType';
import PropertyAddress from './PropertyAddress';
import AddAmenities from './AddAmenities';
import AddImages from './AddImages';
import AddCharacteristics from './AddCharacteristics';
import Preview from './Preview';
import AddTitle from './AddTitle';
import SetPricing from './SetPricing';
import Axios from 'axios';

import { localStorageData } from 'services/auth/localStorageData';
import { ImageEndPoint } from 'config/config';
import { useMutation } from 'react-query';
import { useLocation } from 'react-router-dom';
import userService from 'services/httpService/userAuth/userServices';
import ErrorService from 'services/formatError/ErrorService';
import { AmenitiesData } from 'data/AmenitiesData';
import { CharacteristicsData } from 'data/CharacteristicsData';
import { alertClasses } from '@mui/material';

function PropertyListing() {
  let navigate = useNavigate();
  const location = useLocation();
  // const {offerState}=location.state
  // console.log('state value is',offerState)
  console.log(location.state, 'location state value');

  const propertyData = location.state ? location.state.offerState : null;
  console.log(propertyData, 'property data is');
  //  if(location.state==null){
  //   location.state=null
  //  }
  //  else{
  //   const {offerState}=location.state

  //  }

  const toDataURL = (url) =>
    fetch(url)
      .then((response) => response.blob())
      .then(
        (blob) =>
          new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.onerror = reject;
            reader.readAsDataURL(blob);
          })
      );

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new File([u8arr], filename, { type: mime });
  }

  useEffect(() => {
    if (propertyData) {
      let arr = [];

      for (let i = 0; i < propertyData.pics.length; i++) {
        toDataURL(ImageEndPoint + propertyData.pics[i]).then((dataUrl) => {
          ////console.log('Here is Base64 Url', dataUrl)
          var fileData = dataURLtoFile(
            dataUrl,
            `any_name_${new Date().toJSON().slice(0, 10)}.jpg`
          );
          /////console.log("Here is JavaScript File Object",fileData)

          arr.push({ file: fileData, errors: [], id: i + 1, valid: true });

          console.log('-------------------------------', arr);
        });
      }

      setState((prevState) => ({ ...prevState, photos: arr }));

      // Axios.get(
      //   `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${state.userCurrency}.json`
      // ).then((res) => {
      //   // setInfo(res.data[value]);
      //   setState((prevState) => ({
      //     ...prevState,
      //     info:res.data[state.userCurrency],
      //   }));
      //   console.log(res.data[state.userCurrency],'my value--------------------------------------------');
      // });
    }
  }, []);

  console.log(
    'propertyData.pricepropertyData.pricepropertyData.pricepropertyData.price',
    propertyData ? propertyData.price : 0
  );

  const [state, setState] = React.useState({
    propertyType: propertyData ? propertyData.propertyType : '',
    spaceType: propertyData ? propertyData.spaceType : '',
    address: propertyData ? propertyData.address : '',
    lat: propertyData ? propertyData.loc.coordinates[1] : '',
    long: propertyData ? propertyData.loc.coordinates[0] : '',
    amenities: propertyData ? propertyData.amenities : [],
    photos: [],
    title: propertyData ? propertyData.title : '',
    characteristics: propertyData ? propertyData.characteristics : [],
    ////price:propertyData?propertyData.price: 0,
    points: propertyData ? propertyData.points : '',
    userCurrency: propertyData ? propertyData.userCurrency : '',
    info: [],
    input: propertyData ? propertyData.input : 0,
    from: propertyData ? propertyData.from : '',
    to: propertyData ? propertyData.to : 'usd',
    output: propertyData ? propertyData.price : 0,
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    if (activeStep === 0) {
      if (state.propertyType === '') {
        toast.error('Select Type');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 1) {
      if (state.spaceType === '') {
        toast.error('Select Space');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 2) {
      if (state.address === '') {
        toast.error('Enter Address');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 3) {
      if (state.amenities.length === 0) {
        toast.error('Select amenities');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 4) {
      if (state.photos.length === 0) {
        toast.error('Select photos');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 5) {
      if (state.title === '') {
        toast.error('Enter Title');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 6) {
      if (state.characteristics.length === 0) {
        toast.error('Select Characteristics');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    if (activeStep === 7) {
      if (state.userCurrency === '') {
        toast.error('Enter Price');
        return;
      }
      setActiveStep(activeStep + 1);
    }

    // setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PropertyType state={state} setState={setState} />;
      case 1:
        return <SpaceType state={state} setState={setState} />;
      case 2:
        return <PropertyAddress state={state} setState={setState} />;
      case 3:
        return (
          <AddAmenities
            state={state}
            setState={setState}
            AddAmenities={propertyData ? propertyData.amenities : AmenitiesData}
          />
        );
      case 4:
        return <AddImages state={state} setState={setState} />;
      case 5:
        return <AddTitle state={state} setState={setState} />;
      case 6:
        return (
          <AddCharacteristics
            state={state}
            setState={setState}
            AddCharacteristics={
              propertyData ? propertyData.characteristics : CharacteristicsData
            }
          />
        );
      case 7:
        return <SetPricing state={state} setState={setState} />;
      case 8:
        return <Preview state={state} setState={setState} />;
      default:
        return;
    }
  };

  const { mutate, isLoading } = useMutation(
    (token) => userService.commonPostService('/property/uploadProperty', token),
    {
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (data) => {
        toast.success('Uploded');

        navigate('/');
        /// console.log(result);
      },
    }
  );

  const onSubmit = () => {
    console.log(state);

    const formData = new FormData();

    state.amenities.forEach((item) =>
      formData.append('amenities', JSON.stringify(item))
    );
    state.photos.forEach((item) => {
      console.log('item================', item.file);

      formData.append('pics', item.file);
    });
    state.characteristics.forEach((item) =>
      formData.append('characteristics', JSON.stringify(item))
    );

    formData.append('address', state.address);
    formData.append('lat', state.lat);
    formData.append('long', state.long);
    formData.append('price', state.output);
    formData.append('propertyType', state.propertyType);
    formData.append('spaceType', state.spaceType);
    formData.append('title', state.title);
    formData.append('points', state.points);
    formData.append('userCurrency', state.userCurrency);

    formData.append('userId', localStorageData('_id'));

    if (propertyData) {
      formData.append('propertyId', propertyData._id);
    }

    mutate(formData);

    for (const value of formData.values()) {
      console.log(value);
    }
  };

  return (
    <div className='min-h-screen'>
      <Container maxWidth='lg'>
        <div className='py-20'>
          <h1 className='text-3xl center-styl text-black font-bold tracking-wider'>
            Property Listing
          </h1>

          <div className='bg-white w-full container-post  p-10 my-6 '>
            <div className='flex float-right'>
              <button className='btn-styl ' type='button'>
                Help
              </button>
              <button
                className='btn-styl mx-10'
                type='button'
                onClick={() => navigate('/')}
              >
                Exit
              </button>
            </div>

            {getStepContent(activeStep)}

            {activeStep === steps.length - 1 ? (
              <div className='flex center-styl my-10'>
                {isLoading ? (
                  <CircularProgress />
                ) : (
                  <button
                    className='bg-color-red rounded p-2 px-4 text-white shadow hover:shadow-lg mr-1 mb-1  ease-linear transition-all duration-150'
                    onClick={() => onSubmit()}
                  >
                    {propertyData ? 'Update Listing' : 'Save Listing'}
                  </button>
                )}
              </div>
            ) : null}

            <div className='flex center-styl my-6'>
              {activeStep !== 0 && (
                <button
                  className='text-black font-bold mx-20'
                  onClick={handleBack}
                >
                  Back
                </button>
              )}

              {activeStep === steps.length - 1 ? (
                ''
              ) : (
                <button
                  className='bg-black rounded py-2 px-4 text-white shadow hover:shadow-lg mr-1 mb-1  ease-linear transition-all duration-150'
                  onClick={handleNext}
                >
                  {activeStep === steps.length - 1 ? 'Next' : 'Next'}
                </button>
              )}
            </div>

            <div className='flex flex-row center-styl '>
              {steps.map((item) => (
                <>
                  {activeStep == item - 1 ? (
                    <div className='bg-color-primary h-1.5 w-7 rounded mx-1' />
                  ) : (
                    <div className='text-lg text-color-dotgrey mx-1'>
                      &#8226;
                    </div>
                  )}
                </>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default PropertyListing;
