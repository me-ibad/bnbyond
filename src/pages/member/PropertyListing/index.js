import React from 'react';
import Container from '@mui/material/Container';
import { toast } from 'react-toastify';
import PropertyType from './PropertyType';
import SpaceType from './SpaceType';
import PropertyAddress from './PropertyAddress';
import AddAmenities from './AddAmenities';
import AddImages from './AddImages';

function PropertyListing() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };
  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const steps = [1, 2, 3, 4, 5];

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return <PropertyType />;
      case 1:
        return <SpaceType />;
      case 2:
        return <PropertyAddress />;
      case 3:
        return <AddAmenities />;
      case 4:
        return <AddImages />;
      default:
        return;
    }
  };

  const onSubmit = () => {};

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
              <div className='center-styl my-10'>
                <button
                  className='btn2-styl h-12 w-6/12 '
                  onClick={() => onSubmit()}
                >
                  Submit
                </button>
              </div>
            ) : null}

            <div className='center-styl my-6'>
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
                  className='bg-black rounded py-2 px-4 text-white'
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
