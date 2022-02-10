import React, { useState } from 'react';
import Footer from '../../components/layout/Footer/Footer';
import Navbar from '../../components/layout/Navbar/Navbar';

import PerfilStyle from '../../styles/pages/Profile/ProfileStyle';
import Register from './Register';

import UserProfile from './UserProfile';

import Auth from '../../common/auth';

function Perfil() {
  const [state, setState] = useState('');
  const [userAuth, setUserAuth] = useState(Auth.isAuthenticated());
  const user = sessionStorage.getItem('userName');
  return (
    <>
      <Navbar></Navbar>
      <div className={PerfilStyle}>
        {userAuth != null ? <UserProfile /> : <Register setState={setState} />}
        {/* {state === 'logined' ? (
          <UserProfile />
        ) : (
          <Register setState={setState} />
        )} */}
      </div>
      <Footer></Footer>
    </>
  );
}

export default Perfil;
