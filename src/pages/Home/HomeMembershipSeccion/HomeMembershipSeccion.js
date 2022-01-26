import React, { useEffect, useRef, useState } from 'react';
import HomeMembershipSeccionStyle from '../../../styles/pages/Home/HomeMembershipSeccionStyle/HomeMembershipSeccionStyle'



import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import LocomotiveScroll from 'locomotive-scroll';

import ray from '../../../assets/images/Home/HomeMembershipSeccion/ray.svg'
import centerImage from '../../../assets/images/Home/HomeMembershipSeccion/MbgImage.png'
import MembershipCard from '../../../components/MembershipCard/MembershipCard';


import shineImage from '../../../assets/images/components/MembershipCard/Shine.svg'
import im1 from '../../../assets/images/components/MembershipCard/im1.png'

import vibesImage from '../../../assets/images/components/MembershipCard/Vibes.svg'
import im2 from '../../../assets/images/components/MembershipCard/im2.png'

import beautyImage from '../../../assets/images/components/MembershipCard/Beauty.svg'
import im3 from '../../../assets/images/components/MembershipCard/im3.png'

import choiseImage from '../../../assets/images/components/MembershipCard/Choise.svg'
import im4 from '../../../assets/images/components/MembershipCard/im4.png'



function HomeMembershipSeccion() {


    gsap.registerPlugin(ScrollTrigger);

    const scrollRef = useRef(null);
    
    const tl = gsap.timeline()

    const addAnim = () => {
        const slider = scrollRef.current;
        const totalScroll = slider.scrollWidth - slider.offsetWidth


        tl.add(gsap.to(slider, {
            x: () => -totalScroll,
            ease: 'none',
            scrollTrigger: {
                id: 'membershipSlide',
                trigger: '.seccion1_wrapper',
                pin: true,
                scrub: 0,
                start: 'center center',
                end: () => "+=" + totalScroll
            }
        }));

        ScrollTrigger.refresh()
    }

    const removeAnim = () => {
        tl.kill(true)
    }


    useEffect(() => {

        addAnim()
        return removeAnim

      });

    return (
        <div  className={`${HomeMembershipSeccionStyle}`}>
            <div className=' part seccion1_wrapper'>
                <div className='title_seccion'>
                    {/* <img className='ray' src={ray}/> */}
                    <h1>
                        Sube <br/> el <br/> nivel <br/> a tu <br/> rutina
                    </h1>
                </div>

                <div  ref={scrollRef}  className='info_seccion'>
                    <h1 className='info_title'>Sumérgete en el mundo <br/> <span>BIURY BOX</span></h1>
                    <h4 className='info_subtitle'>Cinco productos <br/> <span> seleccionados para ti. </span></h4>
                    <img className='center_image' src={centerImage}/>
                    <ul>
                        <li>1 Full size + 4 Complementarios </li>
                        <li>Productos recomendados de las mejores marcas </li>
                        <li>Nuestros especialistas seleccionan los productos especialmente para ti </li>
                        <li>Recibes al menos 60% más de lo que pagas en cada box  </li>
                    </ul>

                    <button className='membership_button'>MEMBRESIAS</button>
                    <div className='membership_seccion'>
                        <div className='membership_seccion_wrapper'>
                            <MembershipCard planText='Shine' titleText='Beauty' titleImage={shineImage} producImage={im1} price='$xxxx' promoText='Sorpresas para ti con x% de ahorro.' line={true}></MembershipCard>
                            <MembershipCard planText='Vibes' titleText='Beauty' titleImage={vibesImage} producImage={im2} price='$xxxx' promoText='Dos son pareja, Tres diversión con x% de descuento' line={true}></MembershipCard>
                            <MembershipCard planText='Beauty' titleText='Beauty' titleImage={beautyImage} producImage={im3} price='$xxxx' promoText='Mucho amor en una pequeña caja con x% de descuento' line={true}></MembershipCard>
                            <MembershipCard planText='Choise' titleText='Beauty' titleImage={choiseImage} producImage={im4} price='$xxxx' promoText='Más beneficios para nuestros miembros Deluxe.'></MembershipCard>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMembershipSeccion