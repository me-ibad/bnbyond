import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { localStorageData, Logout } from 'services/auth/localStorageData';
import { useNavigate, Link } from 'react-router-dom';

const IndexDropdown = () => {
  let navigate = useNavigate();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <a onClick={handleClick}>
        {' '}
        <img
          className='w-10 h-10 rounded-full object-contain '
          src='https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1669454831~exp=1669455431~hmac=ada4c2f7d85ec940d03ed9ca295ddaf9adb993247cfa09865131a6f4c276f89f'
        />
      </a>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem
          onClick={() => {
            navigate('/profile');
          }}
        >
          Profile
        </MenuItem>
       {localStorageData('isAdmin')?"":null
       } 
        <MenuItem
          onClick={() => {
            navigate('auth/MemberForm');
          }}
        >
          Apply for member
        </MenuItem>
<MenuItem
          onClick={() => {
            navigate('/member');
          }}
        >
          My account
        </MenuItem>
        {/* <MenuItem
          onClick={() => {
            navigate('/member');
          }}
        >
          My account
        </MenuItem> */}
        <MenuItem
          onClick={() => {
            Logout();
            navigate('/');
          }}
        >
          Logout
        </MenuItem>
      </Menu>
    </>
  );
};

export default IndexDropdown;
