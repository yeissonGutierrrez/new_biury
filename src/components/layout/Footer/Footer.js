import React from 'react'
import { Link } from 'react-router-dom'
import FooterStyle from '../../../styles/components/Layout/FooterStyle/FooterStyle'

import doodlesRigh from '../../../assets/images/components/layout/Footer/Doodles-04_36x 1.png'
import doodlesLeft from '../../../assets/images/components/layout/Footer/Doodles-04_36x 2.png'

import icon1 from '../../../assets/images/components/layout/Footer/icon1.svg'
import icon2 from '../../../assets/images/components/layout/Footer/instagram.svg'
import icon3 from '../../../assets/images/components/layout/Footer/ci_mail-open.svg'
import icon4 from '../../../assets/images/components/layout/Footer/facebook.svg'

import logo from '../../../assets/images/LogoBiuryBlack.svg'

function Footer() {
    return (
        <div className={FooterStyle}>
            <img src={logo} className='footer_logo'/>
            <h3 className='footer_title_one'>
                Un poco sobre <strong>Beauty Club.</strong>
            </h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>

            <div className='suscribe_content'>
                <img src={doodlesLeft}/>
                <Link className='suscribe_button'>Suscribete</Link>
                <img src={doodlesRigh}/>
            </div>

            <h3 className='footer_title_two'>¿ te gustaria seguir conectado con nosotras?</h3>
            <h5 className='footer_subtitle'>Crea una cuenta, es gratis :)</h5>
            <div className='input_container'>
                <input  placeholder='Tu correo :D' type='email' className='footer_input'></input>
                <Link className='make_account__button'>Crear cuenta</Link>
            </div>

            <div className='links_container'>
                <span><Link className='links_text'>SOBRE NOSOTROS</Link>   |    <Link className='links_text'>POLITICAS DE PRIVACIDAD</Link>   |    <Link className='links_text'>FAQ</Link>  </span>
                <img className='links_icons' src={icon1}/>
                <img className='links_icons' src={icon2}/>
                <img className='links_icons' src={icon3}/>
                <img className='links_icons' src={icon4}/>
                
            </div>
        </div>
    )
}

export default Footer