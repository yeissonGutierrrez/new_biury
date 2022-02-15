import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FooterStyle from '../../../styles/components/Layout/FooterStyle/FooterStyle';

import doodlesRigh from '../../../assets/images/components/layout/Footer/Doodles-04_36x 1.png';
import doodlesLeft from '../../../assets/images/components/layout/Footer/Doodles-04_36x 2.png';

import icon1 from '../../../assets/images/components/layout/Footer/whatsappLinkWhite.svg';
import icon2 from '../../../assets/images/components/layout/Footer/youtubeLinkWhite.svg';
import icon3 from '../../../assets/images/components/layout/Footer/instagramLinkWhite.svg';
import icon4 from '../../../assets/images/components/layout/Footer/telegramLinkWhite.svg';

import logo from '../../../assets/images/LogoBiuryWhite.svg';

import validationService from '../../../helpers/validationFields';

function Footer() {
  const [email, setEmail] = useState('');
  const [emailRequired, setEmailRequired] = useState(false);
  const [emailIncorretFormat, setEmailIncorretFormat] = useState(false);

  const handleChange = (e) => {
    const { value } = e.target;

    setEmail(value);
  };

  const setSubscription = () => {
    setEmailRequired(false);
    setEmailIncorretFormat(false);
    if (email == '') {
      setEmailRequired(true);
      return;
    }
    if (!validationService.validationEmail(email)) {
      setEmailIncorretFormat(true);
      return;
    }
  };
  return (
    <div className={FooterStyle}>
      <div className='input_container'>
        <img src={logo} className='footer_logo' />
        <input
          placeholder='Tu correo :D'
          type='email'
          handleChange={handleChange}
          value={email}
          name='setEmail'
          className='footer_input'
        ></input>
      </div>
      {emailIncorretFormat == true ? (
        <p className='danger-text'>El correo electronico es incorrecto</p>
      ) : null}

      {emailRequired == true ? (
        <p className='danger-text'>Debe ingresar un correo electronico</p>
      ) : null}

      <Link className='make_account__button'>QUIERO HACER PARTE DEL CLUB</Link>

      <h3 className='footer_title_one'>NUESTRO OBJETIVO</h3>
      <p>
        LOS MEJORES PRODUCTOS DE BELLEZA AL ALCANCE DE <br /> TODOS AQUÍ TODOS
        PODEMOS APRENDER Y SER EXPERTOS.
      </p>

      <div className='links_container'>
        <img className='links_icons' src={icon1} />
        <img className='links_icons' src={icon2} />
        <img className='links_icons' src={icon3} />
        <img className='links_icons' src={icon4} />
      </div>
    </div>
  );
}

export default Footer;
