import React from 'react';
import history from '../history';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './Main';
import Auth from './Auth';
import Nofound from 'pages/StaticPages/Nofound';
import { useNavigate, useLocation } from 'react-router-dom';

function Root() {
  // let location = useLocation();
  // let navigate = useNavigate();

  // React.useEffect(() => {
  //   if (window.location.href == 'http://localhost:3001/auth') {
  //     navigate('/auth/signin');
  //   }
  // }, [location, navigate]);
  return (
    <Router history={history}>
      <Routes>
        <Route path='/*' element={<Main />} />
        <Route path='auth/*' element={<Auth />} />
      </Routes>
    </Router>
  );
}

export default Root;
