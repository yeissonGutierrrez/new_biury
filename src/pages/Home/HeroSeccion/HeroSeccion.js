import React, {useRef, useEffect} from 'react'

import HeroSeccionStyle from '../../../styles/pages/Home/HeroSeccionStyle/HeroSeccionStyle'

import gsap, {Power0} from 'gsap';

import whatsappButton from '../../../assets/images/Home/HeroSeccion/BotonWhatsapp.svg'
import wave from '../../../assets/images/Home/HeroSeccion/wave.svg'


 function HeroSeccion () {
    // const boxRef = useRef();

    // gsap.registerEffect({
    //     name: "fade",
    //     effect: (targets, config) => {
    //         return gsap.to(targets, {duration: config.duration, opacity: 0});
    //     },
    //     defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
    //     extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    // });
    
    // // now we can use it like this:
    // // wait until DOM has been rendered
    // useEffect(() => {
    //     gsap.defaultEase = Power0.easeNone;
    //     gsap.fromTo('.mask' ,
    //     {x:-600, transitionDuration: 4},
    //     {x:600, transitionDuration: 4}
    //     )
        
    //     gsap.to('.mask2' , 1, {x:600, transitionDuration: 1})
    //     // gsap.to('.hero_image' , 1, {x:0, transitionDuration: 40})
    //     gsap.fromTo('.hero_title__container',
    //     {x:1600},
    //     {x:0, transitionDuration: 2}
    //     )
        
    //     setTimeout(() => {
    //         gsap.fromTo('.hero_title_wrapper',
    //         {y:10, alpha: 0},
    //         {y:0, visibility: 'visible', alpha: 1, transitionDuration: 1}
    //         )
    //     }, 3000);
        
        
    // });
    return(
        <div  className={HeroSeccionStyle}>
            <div className='hero_container'>
                <div className='info_container'>
                    <h1>RECIBE 4 PRODUCTOS <br/> DE BELLEZA PRÉMIUM, ESCOGIDOS ESPECIALMENTE PARA TI</h1>
                    <p>Productos valorados en <br/> $200.000 por solo $69.000. / mes.</p>
                    <button>¡Únete hoy a <span>BIURY</span>CLUB!</button>
                </div>
                <img className='whatsapp_button' src={whatsappButton}/>
            </div>
            <img className='wave' src={wave}/>
        </div>
    )
 }

 export default HeroSeccion;