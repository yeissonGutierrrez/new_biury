import React, {useRef, useEffect} from 'react'

import HeroSeccionStyle from '../../../styles/pages/Home/HeroSeccionStyle/HeroSeccionStyle'

import gsap, {Power0} from 'gsap';

import whatsappButton from '../../../assets/images/Home/HeroSeccion/BotonWhatsapp.svg'
import wave from '../../../assets/images/Home/HeroSeccion/wave.svg'


 function HeroSeccion () {

    return(
        <div  className={HeroSeccionStyle}>
            <div className='hero_container'>
                <div className='info_container'>
                    <h1>RECIBE 4 PRODUCTOS <br/> DE BELLEZA PRÉMIUM, ESCOGIDOS ESPECIALMENTE PARA TI</h1>
                    <p>Productos valorados en <br/> $200.000 por solo $75.000 / mes.</p>
                    <button>¡Únete hoy a <span>BIURY</span>CLUB!</button>
                </div>
                <img className='whatsapp_button' src={whatsappButton}/>
            </div>
            <img className='wave' src={wave}/>
        </div>
    )
 }

 export default HeroSeccion;