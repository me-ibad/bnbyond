import React from 'react';
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

function PropertyListing() {
  const [state, setState] = React.useState({
    propertyType: '',
    spaceType: '',
    address: '',
    lat: '',
    long: '',
    amenities: [],
    photos: [],
    title: '',
    characteristics: [],
    price: '',
  });

  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
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
        return <AddAmenities state={state} setState={setState} />;
      case 4:
        return <AddImages state={state} setState={setState} />;
      case 5:
        return <AddTitle state={state} setState={setState} />;
      case 6:
        return <AddCharacteristics state={state} setState={setState} />;
      case 7:
        return <SetPricing state={state} setState={setState} />;
      case 8:
        return <Preview state={state} setState={setState} />;
      default:
        return;
    }
  };

  const onSubmit = () => {
    console.log(state);
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
              <button className='btn-styl ' type='btn'>
                Help
              </button>
              <button className='btn-styl mx-10' type='btn'>
                Exit
              </button>
            </div>

            {getStepContent(activeStep)}

            {activeStep === steps.length - 1 ? (
              <div className='flex center-styl my-10'>
                <button
                  className='bg-color-red rounded p-2 px-4 text-white shadow hover:shadow-lg mr-1 mb-1  ease-linear transition-all duration-150'
                  onClick={() => onSubmit()}
                >
                  Save Listing
                </button>
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
