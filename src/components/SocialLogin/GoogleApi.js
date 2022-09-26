import React from 'react';
// import { toast } from 'react-toastify';
import GoogleLogin from 'react-google-login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

// import { LOGIN } from 'reactStore/actions/Actions';
import { ImageEndPoint, googleapi } from 'config/config';
import { useCreateGoogleAccount } from 'hooks/useCreateGoogleAccount';
function GoogleApi(props, { type = 'Signup', handleClose }) {
  const dispatch = useDispatch();
  /////// const dispatch = useDispatch();
  let navigate = useNavigate();
  const { mutateAsync: createGoogleAccount } = useCreateGoogleAccount();

  async function GoogleSuccessRequest(data) {
    // alert('kkkkk');
    let newdata = {
      email: data.profileObj.email,
      fname: data.profileObj.name,
      id: data.googleId,
      pic: data.profileObj.imageUrl,
    };

    console.log('new data-----------');

    console.log(newdata);

    const response = await createGoogleAccount(newdata);

    if (response.status) {
      let res = response.data;

      res['pic'] = ImageEndPoint + res.pic;

      // dispatch(LOGIN(res));
      navigate('/');
    }

    ///// dispatch(GOOGLE_API_SIGN_UP(data.profileObj));
  }

  // async function GoogleLoginSuccessRequest(data) {
  //   console.log(data);
  //   dispatch(
  //     GOOGLE_LOGIN({ email: data.profileObj.email }, () => {
  //       handleClose();
  //     })
  //   );
  // }

  async function GoogleFailureRequest(data) {
    // toast.error('Sorry!! Request Failed With Google');
    console.log(data);
  }

  return (
    <GoogleLogin
      clientId={
        '583809256929-ma7eqq59p16nnc36q3q7dbvtv7hsa0l1.apps.googleusercontent.com'
      }
      render={(renderProps) => (
        <button
          className='bg-white text-gray-900 my-2 shadow-sm font-semibold  px-3 py-2 w-full items-center justify-center rounded outline-none focus:outline-none mr-2  hover:shadow-md ease-linear transition-all duration-150'
          onClick={renderProps.onClick}
        >
          <i className='fab fa-google'></i>
          <span className='ml-4'> {props.name}</span>
        </button>
      )}
      onSuccess={GoogleSuccessRequest}
      onFailure={GoogleFailureRequest}
      cookiePolicy={'single_host_origin'}
    ></GoogleLogin>
  );
}

export default GoogleApi;
