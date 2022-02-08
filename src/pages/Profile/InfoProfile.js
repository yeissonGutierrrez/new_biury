import InfoProfileStyle from '../../styles/pages/Profile/InfoProfileStyle';
import ProfilePhoto from '../../assets/images/Profile/profilePhoto.png';
import { useState } from 'react';

function InfoProfile() {
  const [userName, setUserName] = useState(
    localStorage.getItem('biury-user-name')
  );

  return (
    <div className={InfoProfileStyle}>
      <div className='image-container'>
        <img className='ProfilePhoto' src={ProfilePhoto} />
      </div>
      <div className='info'>
        <h1>HOLA {userName}.</h1>
        <p>
          Para nosotros es un placer que hagas parte de <span>BIURY</span>CLUB.{' '}
          <br /> Desde ya puedes hacer uso de todos tus beneficios, revisa{' '}
          <br /> tu correo, allí encontrarás información sobre:   · Descuentos.{' '}
          <br />
          · Regalos. <br />
          · Consejos exclusivos. <br />
          · Invitaciones a nuestros eventos. <br />
          · Guía para convertirte en experta en productos, <br />
          marcas cosméticas y mucho más. <br /> <br />
          Cuéntanos sobre tu experiencia <span>BIURY</span> en <br />
          Info@biury.co
        </p>
      </div>
    </div>
  );
}

export default InfoProfile;
