import React from 'react';
import Container from '@mui/material/Container';
import * as Yup from 'yup';
import { useFormik } from 'formik';

export default function VerificationPage() {
  const formik = useFormik({
    initialValues: {
      fname: '',
      email: '',
      username: '',
      pass: '',
      cpass: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, 'Must be more than 4 characters')
        .required('Required'),
      pass: Yup.string()
        .min(8, 'Must be more than 8 characters')
        .required('Required'),
      // .matches(
      //   /^.*(?=.{8,})((?=.*[!@#$%^&*()\-_=+{};:,<.>]){1})(?=.*\d)((?=.*[a-z]){1})((?=.*[A-Z]){1}).*$/,
      //   'Must Contain 8 Characters, One , One Lowercase, One Number and One Special Case Character'
      // ),
    }),
    onSubmit: async (values) => {},
  });
  return (
    <div className='mt-20'>
      <Container maxWidth='md'>
        <h1 className='text-3xl font-bold text-center mb-10'>
          Verification Page
        </h1>

        <div className='grid center-styl card-styl '>
          <h3 className='text-xl font-bold'>Verification info</h3>

          <form onSubmit={formik.handleSubmit}>
            <div className='relative w-full my-3'>
              <input
                id='fname'
                name='fname'
                type='text'
                className='input-styl'
                placeholder='Name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.fname}
              />
              {formik.touched.fname && formik.errors.fname ? (
                <div className='text-red-500 text-sm'>
                  {formik.errors.fname}
                </div>
              ) : null}
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}
