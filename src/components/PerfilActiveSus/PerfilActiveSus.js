import React from 'react'
import PerfilActiveSusStyle from '../../styles/components/PerfilActiveSus/PerfilActiveSusStyle'
import ConfirmButton from '../ConfirmButton/ConfirmButton'

import image1 from '../../assets/images/imagen1.png'

function PerfilActiveSus() {
    return (
        <div className={PerfilActiveSusStyle}>
            <div className='container'>
                <h1 className='title'>Suscripciones</h1>
                <img className='imagen_container' src={image1}/>
                <h3 className='subtitle'>Beauty shine</h3>
                <span className='price'>$xxxx</span>
                <p className='description'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <ConfirmButton width='340px' type='button' text='Cambiar suscripción'></ConfirmButton>
                <span className='cancel_sus'>Cancelar suscripción</span>
            </div>

        </div>
    )
}

export default PerfilActiveSus