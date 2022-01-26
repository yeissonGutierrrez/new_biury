import React, {useRef, useEffect} from 'react'
import { Link } from 'react-router-dom';
import HeroSeccionStyle from '../../../styles/pages/Home/HeroSeccionStyle/HeroSeccionStyle'
import bannerLogo1 from '../../../assets/images/Home/HeroSeccion/banner/maybelline.png'
import HeroImage from '../../../assets/images/Home/HeroSeccion/heroImage.png';
import HeroTitleImage from '../../../assets/images/Home/HeroSeccion/heroTitleIcon.svg';

import gsap, {Power0} from 'gsap';



 function HeroSeccion () {
    const boxRef = useRef();

    gsap.registerEffect({
        name: "fade",
        effect: (targets, config) => {
            return gsap.to(targets, {duration: config.duration, opacity: 0});
        },
        defaults: {duration: 2}, //defaults get applied to any "config" object passed to the effect
        extendTimeline: true, //now you can call the effect directly on any GSAP timeline to have the result immediately inserted in the position you define (default is sequenced at the end)
    });
    
    // now we can use it like this:
    // wait until DOM has been rendered
    useEffect(() => {
        gsap.defaultEase = Power0.easeNone;
        gsap.fromTo('.mask' ,
        {x:-600, transitionDuration: 4},
        {x:600, transitionDuration: 4}
        )
        
        gsap.to('.mask2' , 1, {x:600, transitionDuration: 1})
        // gsap.to('.hero_image' , 1, {x:0, transitionDuration: 40})
        gsap.fromTo('.hero_title__container',
        {x:1600},
        {x:0, transitionDuration: 2}
        )
        
        setTimeout(() => {
            gsap.fromTo('.hero_title_wrapper',
            {y:10, alpha: 0},
            {y:0, visibility: 'visible', alpha: 1, transitionDuration: 1}
            )
        }, 3000);
        
        
    });
    return(
        <div  className={HeroSeccionStyle}>
            <div className='hero_image_container'>
                <div className='hero_image_wrapper'>
                    <img className='hero_image' src={HeroImage}/>
                    <div className='mask'> </div>
                    <div className='mask2'> </div>
                </div>
            </div>
            <div className='hero_title__container'>
                <div className='hero_title_wrapper'>
                    <img src={HeroTitleImage}/>
                    <h1 className='hero_title'>Conoce la forma más rápida de </h1>
                    <h1 className='hero_subtitle'>fortalecer tu Beauty routine</h1>
                    <Link className='hero_suscribe__button' to='/'>Explorar</Link>
                </div>
                
            </div>

            {/* <div className='hero_carrousel__container'>
                <HeroCarrousel></HeroCarrousel>
            </div> */}
        </div>
    )
 }

 export default HeroSeccion;