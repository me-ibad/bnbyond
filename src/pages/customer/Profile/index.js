import React, { useState } from 'react';
import Container from '@mui/material/Container';

import { useNavigate, useLocation } from 'react-router-dom';
import { ImageEndPoint } from 'config/config';
import { toast } from 'react-toastify';
import { useMutation, useQuery } from 'react-query';
import ErrorService from 'services/formatError/ErrorService';
import userService from 'services/httpService/userAuth/userServices';

import CircularProgress from '@mui/material/CircularProgress';
import {
  getLocalUserdata,
  localStorageData,
} from 'services/auth/localStorageData';
import * as Yup from 'yup';
import { useFormik } from 'formik';

function Profile() {
  let navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      userId: localStorageData('_id'),
      pics: '',
      fname: localStorageData('fname'),
      phoneNumber: '',
      address: '',
    },
    validationSchema: Yup.object().shape({}),
    onSubmit: async (values) => {
      // eslint-disable-next-line
      const formData = new FormData();
      formData.append('pics', values.pics);
      formData.append('userId', values.userId);
      formData.append('fname', values.fname);
      formData.append('lname', values.fname);
      formData.append('phoneNumber', values.phoneNumber);
      formData.append('address', values.address);
      mutate(formData);

      console.log(values);
    },
  });

  const { mutate, isLoading } = useMutation(
    (token) => userService.commonPostService('/property/updateuserinfo', token),
    {
      onError: (error) => {
        toast.error(ErrorService.uniformError(error));
      },
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
  const onChangeHandler = async (e) => {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById('serviceimg');
      output.src = reader.result;
    };
    if (e.target.files[0]) {
      const file = e.target.files[0];
      reader.readAsDataURL(file);
      formik.setFieldValue('pics', file);
    }
  };
  return (
    <div className='mt-20'>
      <Container maxWidth='md'>
        <h1 className='text-3xl font-bold text-center mb-10'>Profile</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className='card-styl '>
            <div className='grid center-styl'>
              <img
                className='w-24 h-24 rounded-full mx-auto object-cover'
                src={
                  localStorageData('pic') != 'sample.png'
                    ? ImageEndPoint + localStorageData('pic')
                    : 'https://ui-avatars.com/api/?name=NA'
                }
                alt='profile img'
                id='serviceimg'
              />

              <label
                className='btn-styl mt-4 flex center-styl'
                htmlFor='contained-button-file'
              >
                <input
                  type='file'
                  onChange={onChangeHandler}
                  accept='image/*'
                  id='contained-button-file'
                />
                Upload
              </label>

              {formik.touched.pics && formik.errors.pics ? (
                <div className='text-red-500 text-sm'>{formik.errors.pics}</div>
              ) : null}
              {/* <div className='my-4 flex center-styl'></div> */}

              <h2 className='text-2xl font-bold text-center center-styl my-2'>
                {/* <input type='text' placeholder='Name' className='input-hidden' /> */}

                {localStorageData('fname')}
              </h2>
              <h3 className='text-lg font-semibold text-center '>
                {localStorageData('email')}
              </h3>
            </div>
          </div>
          <div className='card-styl '>
            <h3 className='text-xl font-bold'>Personal info</h3>

            <div className='my-2'>
              <label className='my-2 text-sm block font-bold'>
                Phone Number
              </label>
              <input
                type='number'
                placeholder='Phone Number'
                id='phoneNumber'
                name='phoneNumber'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.phoneNumber}
                className='input-hidden focus:bg-slate-100 p-2 placeholder:text-black'
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.phoneNumber}
                </div>
              ) : null}
            </div>

            <div className='my-2'>
              <label className='my-2 text-sm font-bold block'>Address</label>
              <input
                type='text'
                placeholder='Address'
                id='address'
                name='address'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.address}
                className='input-hidden focus:bg-slate-100 p-2 placeholder:text-black w-2/4'
              />
              {formik.touched.address && formik.errors.address ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.address}
                </div>
              ) : null}
            </div>
          </div>

          <div className='card-styl '>
            <h3 className='text-xl font-bold'>Verification</h3>

            <button
              onClick={() => navigate('/verification')}
              className='bg-color-red text-white text-sm font-bold w-40 px-6 py-3 rounded shadow hover:shadow-lg mr-1 mb-1  ease-linear transition-all duration-150 my-2'
            >
              Start Verification
            </button>
          </div>
          <div className='text-center mt-6'>
            {isLoading ? (
              <CircularProgress />
            ) : (
              <>
                <button className='btn-styl' type='submit'>
                  Update
                </button>
              </>
            )}
          </div>
        </form>
      </Container>
    </div>
  );
}

export default Profile;
