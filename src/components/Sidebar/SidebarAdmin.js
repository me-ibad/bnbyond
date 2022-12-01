import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import { EMPTYSOTRE } from 'reactStore/actions/Actions';
import { useDispatch, useSelector } from 'react-redux';
function SidebarAdmin() {
  let navigate = useNavigate();
  const style = ({ isActive }) => {
    return {
      color: isActive ? '#0066b2' : 'black',
    };
  };
  const [collapseShow, setCollapseShow] = React.useState('hidden');

  const dispatch = useDispatch();
  return (
    <>
      <nav className='md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
        <div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
          {/* Toggler */}
          <button
            className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
            type='button'
            onClick={() => setCollapseShow('bg-white m-2 py-3 px-6')}
          >
            <i className='fas fa-bars'></i>
          </button>
          {/* Brand */}
          <Link
            className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
            to='/'
          >
            Admin Bnbyond
          </Link>
          {/* User */}
          <ul className='md:hidden items-center flex flex-wrap list-none'>
            {/* <li className='inline-block relative'>
              <NotificationDropdown />
            </li>
            <li className='inline-block relative'>
              <UserDropdown />
            </li> */}
          </ul>
          {/* Collapse */}
          <div
            className={
              'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
              <div className='flex flex-wrap'>
                <div className='w-6/12'>
                  <Link
                    className='md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
                    to='/'
                  >
                    BESCHDULED
                  </Link>
                </div>
                <div className='w-6/12 flex justify-end'>
                  <button
                    type='button'
                    className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
                    onClick={() => setCollapseShow('hidden')}
                  >
                    <i className='fas fa-times'></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Form */}

            {/* Divider */}
            <hr className='my-4 md:min-w-full' />
            {/* Heading */}
            <h6 className='md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline'>
              Admin Layout
            </h6>
            {/* Navigation */}

            <ul className='md:flex-col md:min-w-full flex flex-col list-none'>
              <li className='items-center'>
                <NavLink
                  className='text-xs uppercase py-3 font-bold block '
                  style={style}
                  to='/admin/viewuser'
                >
                  <i className='fas fa-users mr-2 text-sm '></i> View Users
                </NavLink>
              </li>

              {/* <li className='items-center'>
                <NavLink
                  className='text-xs uppercase py-3 font-bold block '
                  style={style}
                  to='/member/viewproperty'
                >
                  <i className='fas fa-location-arrow mr-2 text-sm '></i> View
                  Property
                </NavLink>
              </li>

              <li className='items-center'>
                <NavLink
                  className='text-xs uppercase py-3 font-bold block '
                  style={style}
                  to='/admin/addannouncement'
                >
                  <i className='fas fa-location-arrow mr-2 text-sm '></i> Add
                  Announcement
                </NavLink>
              </li> */}
            </ul>

            <ul className='md:flex-col md:min-w-full mt-6 flex flex-col list-none'>
              <li className='items-center'>
                <button
                  type='button'
                  className='btn-styl'
                  // onClick={() => {
                  //   dispatch(EMPTYSOTRE());

                  //   navigate('/');
                  // }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default SidebarAdmin;
