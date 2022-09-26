import React from 'react';
// import { toast } from 'react-toastify';
import FacebookLogin from 'react-facebook-login';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useCreateFacebookAccount } from 'hooks/useCreateFacebookAccount';
// import { LOGIN } from 'reactStore/actions/Actions';
import { ImageEndPoint, facebookapi } from 'config/config';
function FacebookApi(props, { type = 'Signup', handleClose }) {
  const dispatch = useDispatch();
  const { mutateAsync: createFacebookAccount } = useCreateFacebookAccount();
  let navigate = useNavigate();
  async function FacebookLoginSuccessRequest(data) {
    let newdata = {
      email: data.email,
      fname: data.name,
      id: data.id,
      pic: data.picture.data.url,
    };

    const response = await createFacebookAccount(newdata);

    if (response.status) {
      let res = response.data;

      res['pic'] = ImageEndPoint + res.pic;

      // dispatch(LOGIN(res));

      navigate('/');
    }
  }
  return (
    <FacebookLogin
      appId={facebookapi}
      textButton={props.name}
      fields='name,email,picture'
      callback={FacebookLoginSuccessRequest}
      cssClass='bg-blue-600 text-white my-2 shadow-sm font-semibold  px-3 py-2 w-full items-center justify-center rounded outline-none focus:outline-none mr-2  hover:shadow-md ease-linear transition-all duration-150'
      icon={<i className='fab fa-facebook  text-white mr-2'></i>}
    />
  );
}

export default FacebookApi;
