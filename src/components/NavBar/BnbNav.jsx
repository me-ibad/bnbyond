import React from "react";
import Grid from "@mui/material/Grid";
import { useNavigate, Link } from "react-router-dom";
import { localStorageData, Logout } from 'services/auth/localStorageData';


import IndexDropdown from "components/Dropdowns/IndexDropdown";


function BnbNav() {
  let navigate = useNavigate();
   
 const onClickProfile=() => {
        navigate('/profile');
      }
  const  onClickLogout=() => {
        Logout();
        navigate('/');
      }
 const   onClickMember=() => {
        navigate('/member');
      }
  return (
    <>
      <nav>
        <Grid
          container
          spaing={2}
          className="bnbNvar_wrapper  h-24 "
        >
          <Grid
            item
            xs={4}
            sm={3}
            className="flex justify-center items-center"
          >
            <div className="bnbLogo">
              <Link
                className="text-white text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                to="/"
              >
                <img
                  className="w-full h-12 object-cover "
                  src={require("assets/img/whitelogo.png")}
                  alt=''
                />
              </Link>
            </div>
          </Grid>
          <Grid item xs={8} sm={8} className=" ">
            <ul className="flex justify-end items-center h-full text-white bnbNav-items">
            {localStorageData('_id')?
              <li onClick={onClickProfile} className='cursor-pointer'>
                <p>My Profile</p>
              </li>:null
              }
              <li onClick={onClickMember} className='cursor-pointer'>
                <p>My Account</p>
              </li>
              
              <li>
               {localStorageData('_id') ? (
                     <IndexDropdown /> 
                 
                ) : (
                  <a
                    className='lg:text-white lg:hover:text-blueGray-200 text-blueGray-700 px-3 py-4 lg:py-2  items-center text-sm font-bold flex'
                    href='/auth/signin'
                  >
                    <img
                      className='w-6 h-6 object-contain '
                      src={require('assets/img/icon.png')}
                      alt="user icon"
                    />
                    <span className=' inline-block ml-2'>
                      Login/Become a member
                    </span>
                  </a>
                )}
            
              </li>
            </ul>
          </Grid>
        </Grid>
      </nav>
    </>
  );
}

export default BnbNav;
