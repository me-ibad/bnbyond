import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@mui/material/Container';

function Nofound() {
  let navigate = useNavigate();

  return (
    <Container maxWidth='md'>
      <div className='center-styl mt-20'>
        <div className='w-full m-auto py-4  flex items-center justify-center'>
          <div className='bg-white shadow overflow-hidden sm:rounded-lg pb-8'>
            <div className='border-t border-gray-200 text-center pt-2'>
              <h1 className='error-main-text font-bold text-color-primary'>
                404
              </h1>
              <h1 className='text-5xl font-medium py-4'>
                oops! Page not found
              </h1>
              <p className='text-xl pb-8 px-12 font-medium'>
                Oops! The page you are looking for does not exist. It might have
                been moved or deleted.
              </p>
              <div className='mx-20'>
                <button onClick={() => navigate('/')} className='btn-styl'>
                  HOME
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Nofound;
