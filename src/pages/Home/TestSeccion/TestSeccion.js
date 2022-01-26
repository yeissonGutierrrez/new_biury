import React, { useEffect, useRef } from 'react';
import HomeTestSeccionStyle from '../../../styles/pages/Home/TestSeccionStyle/TestSeccionStyle';
import HomeTestBgImage from '../../../assets/images/Home/HomeTestSeccion/HometestImage.png';
import { Link } from 'react-router-dom';
import gsap, {Power0} from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

import Animation from '../../../animation';

import star from '../../../assets/images/Home/HomeTestSeccion/star.svg';
import faceIcon from '../../../assets/images/Home/HomeTestSeccion/faceIcon.svg';



function TestSeccion() {
    gsap.registerPlugin(ScrollTrigger);
    const Ref = useRef(null);

        useEffect(() => {

            gsap.defaultEase = Power0.easeNone;
            gsap.set(".image_mask", { x:0, transitionDuration: 4 });
            gsap.to('.image_mask' ,
            {
                x:800, 
                transitionDuration: 1,
                scrollTrigger: {
                    trigger: ".home_test_title__container",
                    start: "top center",
                    end: "center center",
                    // scrub: true,
                    }
            }

            )

            gsap.set(".circle_animated", {
                transformOrigin: "center center",
            });
          
            gsap.fromTo(".circle_animated", {
                scale: 1
            }, {
                scale: 1.8,
                repeat: -1,
                yoyo: true,
                duration: 1,
            })

            gsap.set(".animated_text", { y: 875, yPercent: -50, yPercent: -50, opacity: 0 });
            gsap.to(".animated_text", {
                y: 0,
                duration: 2,
                opacity: 1,
                scrollTrigger: {
                trigger: ".home_test_title__container",
                start: "top center",
                end: "center center",
                scrub: true
                }
            });

            // gsap.set(".home_test_title__container", { y: 15, opacity: 0 });
            // gsap.to(".home_test_title__container", {
            //     y: 0,
            //     duration: 6,
            //     opacity: 1,
            //     scrollTrigger: {
            //     trigger: ".home_test_title__container",
            //     start: "top center",
            //     end: "center center",
            //     scrub: true
            //     }
            // });

        }, [])



    return(
        <div ref={Ref} className={HomeTestSeccionStyle}>
            <div className='home_test_title__container'>
                <h4 className='home_test_subtitle1 title animated_text' >EL TEST IDEAL</h4> 
                <h1 className='home_test_title animated_text'>Rapidos</h1>
                <h1 className='home_test_title animated_text'>DIVERTIDO.</h1>
                <h1 className='home_test_title animated_text'>fácil.</h1>
                <h4 className='home_test_subtitle2 animated_text'>Cúentanos lo que necesitas y <br/> <span>nosotros hacemos el resto </span> </h4>

                <Link className='home_test_button animated_text'>Haz nuestro test</Link>
                {/* <img className='star animated_text' src={star}/> */}
            </div>
                  {/* <Animation></Animation>  */}
            <div  className='home_test_image__container'>
                 <img className='bgImage' src={HomeTestBgImage}/>   
                
                <div className='faceIcon iconOne'>
                    <div className='circle'>
                        <img src={faceIcon}/>
                    </div>
                    <div className='circle_animated'></div>
                </div>
                <div className='faceIcon iconTwo'>
                    <div className='circle'>
                        <img src={faceIcon}/>
                    </div>
                    <div className='circle_animated'></div>
                </div>
                <div className='faceIcon iconTree'>
                    <div className='circle'>
                        <img src={faceIcon}/>
                    </div>
                    <div className='circle_animated'></div>
                </div>  
                <div className='image_mask'></div>
            </div>
        </div>
    )
}

export default TestSeccion;