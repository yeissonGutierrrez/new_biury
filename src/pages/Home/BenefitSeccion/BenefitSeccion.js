import React, { useEffect, useRef } from 'react';
import HomeMembershipSeccionStyle from '../../../styles/pages/Home/BenefitSeccionStyle/BenefitSeccionStyle'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import BenefitParallaxGallery from '../../../components/MembershipParallaxGallery/BenefitParallaxGallery';

import icon1 from '../../../assets/images/Home/BenefitSeccion/micon2.svg';
import icon2 from '../../../assets/images/Home/BenefitSeccion/mIcon1.svg';
import icon3 from '../../../assets/images/Home/BenefitSeccion/micon3.svg';
import icon4 from '../../../assets/images/Home/BenefitSeccion/micon4.svg';
import Hero_banner from '../../../components/HeroBanner/HeroBanner';

function BenefitSeccion() {
    gsap.registerPlugin(ScrollTrigger);
    const Ref = useRef(null);

    useEffect(() => {
        // I set opacity: 0 in the CSS to avoid the flash of unstyled content. Also, it's always best to set your transforms directly via GSAP instead of just in the CSS. Faster performance and more accurate.




    // gsap.set(".benefit_wrapper", { display: 'none',y: 175, yPercent: -50, yPercent: -50, opacity: 0.7 });
    // gsap.to(".benefit_wrapper", {
    //     y: 0,
    //     display: 'flex',
    //     opacity: 1,
    //     scrollTrigger: {
    //       trigger: ".membership_wrapper",
    //       markers: true,
    //       start: "top top",
    //     }
    //   });

    //   gsap.set(".benefit_wrapper", { x: -75, xPercent: -50, y: 0, yPercent: -50 });
        gsap.to(".benefit_wrapper", {
        y: 140,
        opacity: 0,
        display: 'none'
        
    });

        gsap.to(".benefit_wrapper", {
        y: 0,
        opacity: 1,
        display: 'flex',
        duration: 1,
        immediateRender: false, // otherwise scrollTrigger will force the render right away and the starting values that get locked in would be affected by the from() above
        scrollTrigger: {
            trigger: ".membership_wrapper",
            start: "top",
        }
        });

    }, [])


    return(
        <div ref={Ref} className={`${HomeMembershipSeccionStyle} membership_wrapper`}>
            <div className='membership_title_container' style={{position: 'absolute'}}>
                <img className='position1' src={icon1}/>
                <img className='position2' src={icon2}/>
                <div className='position3'>
                    <h1 className='text'>
                    Por qué unirse <br/>
                        <span>
                            al club?
                        </span>
                    </h1> 
                </div>
                <img className='position4' src={icon3}/>
                <img className='position5' src={icon4}/>
            </div>
                <BenefitParallaxGallery></BenefitParallaxGallery> 
                {/* <img src={bannerLogo1}/> */}

            <Hero_banner></Hero_banner>
        </div>
    )
}

export default BenefitSeccion