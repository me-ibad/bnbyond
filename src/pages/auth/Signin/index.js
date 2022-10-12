import React from 'react';
import { useFormik } from 'formik';

import { useNavigate, Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import * as Yup from 'yup';
import { useLoginEmailAccount } from 'hooks';
import GoogleApi from 'components/SocialLogin/GoogleApi';
import FacebookApi from 'components/SocialLogin/FacebookApi';
import CircularProgress from '@mui/material/CircularProgress';

function Signin() {
  let navigate = useNavigate();
  const { mutateAsync: loginEmailAccount, isLoading } = useLoginEmailAccount();

  const formik = useFormik({
    initialValues: {
      pass: '',
      username: '',
    },
    validationSchema: Yup.object().shape({
      username: Yup.string()
        .min(3, 'Must be more than 4 characters')
        .required('Required'),
      pass: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      // eslint-disable-next-line
      const response = await loginEmailAccount(values);
      navigate('/propertylisting');
    },
  });
  return (
    <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
      <Grid container spacing={2}>
        <Grid item lg={5} md={5} sm={12} xs={12}>
          <div className='relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg bg-auth rounded-lg  border-0'>
            <div className='rounded-t mb-0 px-6 py-6'>
              <div className='text-center mb-3'>
                <h6 className='text-grey-500 text-sm font-bold'>Sign in</h6>
              </div>

              <hr className='mt-6 border-b-1 border-grey-300' />
            </div>
            <div className='flex-auto px-4 lg:px-10 py-10 pt-0'>
              <form onSubmit={formik.handleSubmit}>
                <div className='relative w-full mb-3'>
                  <label
                    className='block  text-grey-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Email/ UserName
                  </label>
                  <input
                    id='username'
                    name='username'
                    type='text'
                    className='input-styl'
                    placeholder='Email/ UserName'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.username}
                  />
                  {formik.touched.email && formik.errors.username ? (
                    <div className='text-red-500 text-sm'>
                      {formik.errors.username}
                    </div>
                  ) : null}
                </div>

                <div className='relative w-full mb-3'>
                  <label
                    className='block text-grey-600 text-xs font-bold mb-2'
                    htmlFor='grid-password'
                  >
                    Password
                  </label>
                  <input
                    name='pass'
                    id='pass'
                    type='password'
                    className='input-styl'
                    placeholder='Password'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.pass}
                  />
                  {formik.touched.pass && formik.errors.pass ? (
                    <div className='text-red-500 text-sm'>
                      {formik.errors.pass}
                    </div>
                  ) : null}
                </div>
                <a
                  href='/auth/forgotpassword'
                  className='flex float-right font-bold text my-2 underline'
                >
                  Forgot Password
                </a>

                <div className='text-center mt-6'>
                  {isLoading ? (
                    <CircularProgress />
                  ) : (
                    <>
                      <button className='btn-styl' type='submit'>
                        Sign In
                      </button>
                    </>
                  )}
                </div>
                <hr className='separator my-4' />

                <GoogleApi name='Continue with Google' />
                <FacebookApi name='Continue with Facebook' />
              </form>

              <a
                href='/auth/signup'
                className='flex float-right font-bold text mt-4 underline'
              >
                Register
              </a>
            </div>
          </div>
        </Grid>
        <Grid item lg={5} md={5} sm={10} xs={10}>
          <div className='desktopview absolute top-32 mx-auto'>
            <div className='mt-6 flex center-styl'>
              <img
                className='logo-landing object-contain '
                src={require('assets/img/whitelogo.png')}
              />
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Signin;
