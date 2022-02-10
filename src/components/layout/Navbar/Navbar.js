import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavbarStyle from '../../../styles/components/Layout/NavbarStyle/NavbarStyles';

import Logo from '../../../assets/images/LogoBiuryWhite.svg';

import menuIcon from '../../../assets/images/components/layout/Navbar/mobileAmburguerIcon.svg';

import userIcon from '../../../assets/images/components/layout/Navbar/userIconBorder.svg';
import shopIcon from '../../../assets/images/components/layout/Navbar/shopIcon.svg';
import instagramIcon from '../../../assets/images/components/layout/Navbar/InstagramIcon.svg';
import wspIcon from '../../../assets/images/components/layout/Navbar/wspIcon.svg';
import youtubeIcon from '../../../assets/images/components/layout/Navbar/youtubeIcon.svg';
import closeIcon from '../../../assets/images/components/layout/Navbar/closeIcon.svg';
import LogoutIcon from '@mui/icons-material/Logout';

import Auth from '../../../common/auth';

function Navbar({ bgColor }) {
  const [isOpen, setIsOpen] = useState('');

  const [userAuth, setUserAuth] = useState(Auth.isAuthenticated());
  const login = sessionStorage.getItem('login');
  const [userName, setUserName] = useState(
    localStorage.getItem('biury-user-name')
  );

  const logout = () => {
    Auth.LogOut();
  };

  useEffect(() => {
    setUserAuth(Auth.isAuthenticated());
    setUserName(localStorage.getItem('biury-user-name'));
  });

  return (
    <div style={{ backgroundColor: bgColor }} className={NavbarStyle}>
      <div className='list_menu'>
        <div className='list'>
          <Link to='/HowItWork'>Cómo funciona</Link>
          <hr />
          <Link to='/Quiz'>CREA TU PERFIL GRATIS</Link>
        </div>

        <Link className='logo' to={'/'}>
          <img src={Logo} />
        </Link>

        <div className='list'>
          {userAuth !== null ? (
            <Link to='/perfil'>
              <i className='userIcon'></i>
              {userName.toUpperCase()}
            </Link>
          ) : (
            <Link to='/perfil'>
              <i className='userIcon'></i> INGRESAR
            </Link>
          )}

          <Link className='shopIcon' to='/'>
            <img src={shopIcon} />
          </Link>

          <Link className='instagramIcon' to='/'>
            <img src={instagramIcon} />
          </Link>

          <Link className='youtubeIcon' to='/'>
            <img src={youtubeIcon} />
          </Link>

          <Link to='/'>
            <img src={wspIcon} />
          </Link>

          {userAuth !== null ? (
            <Link to='/HowItWork'>
              <LogoutIcon onClick={logout}></LogoutIcon>
            </Link>
          ) : null}
        </div>
      </div>

      <div className='list_menu_mobile'>
        <Link className='logo_mobile' to={'/'}>
          <img src={Logo} />
        </Link>

        <Link className='suscription' to='/Quiz'>
          Activar suscripcion
        </Link>

        <img onClick={() => setIsOpen('show')} src={menuIcon} />

        <div
          style={{ display: 'none', backgroundColor: bgColor }}
          className={`${
            isOpen === 'show'
              ? 'backdrop'
              : '' || isOpen === 'hidden'
              ? 'hidden'
              : ''
          }`}
        >
          <Link className='logo_mobile' to={'/'}>
            <img src={Logo} />
          </Link>

          <Link className='link-page' to={'/HowItWork'}>
            ¿CÓMO FUNCIONA?
          </Link>

          <Link className='link-page' to={'/'}>
            CREA TU PERFIL GRATIS
          </Link>

          <Link className='link-page' to={'/'}>
            ACTIVAR SUSCRIPCIÓN
          </Link>

          <div className='login'>
            {login === 'true' ? (
              <Link to='/perfil'>
                <img src={userIcon} /> {sessionStorage.getItem('userName')}
              </Link>
            ) : (
              <Link to='/perfil'>
                <img src={userIcon} /> INGRESAR
              </Link>
            )}
          </div>

          <div className='list'>
            <Link to='/'>
              <img src={shopIcon} />
            </Link>

            <Link to='/'>
              <img src={wspIcon} />
            </Link>

            <Link className='youtubeIcon' to='/'>
              <img src={youtubeIcon} />
            </Link>

            <Link to='/'>
              <img src={instagramIcon} />
            </Link>
          </div>

          <img onClick={() => setIsOpen('hidden')} src={closeIcon} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
