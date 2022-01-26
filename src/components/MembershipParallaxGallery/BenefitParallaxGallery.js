import React, { useEffect, useRef } from 'react';
import BenefitParallaxGalleryStyle from '../../styles/components/BenefitParallaxGalleryStyle/BenefitParallaxGalleryStyle'
import ParallaxGaleryItem from './ParallaxGaleryItem'

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

function BenefitParallaxGallery () {

    return (
            <div className={`${BenefitParallaxGalleryStyle}`}>
                    <div className='benefit_wrapper'>
                        <div className='item' >
                            <ParallaxGaleryItem position='right'></ParallaxGaleryItem>
                        </div>
                        <div className='item' >
                            <ParallaxGaleryItem position='right'></ParallaxGaleryItem>
                        </div>
                        <div className='item' >
                            <ParallaxGaleryItem position='right'></ParallaxGaleryItem>
                        </div>
                        <div className='item' >
                            <ParallaxGaleryItem position='right'></ParallaxGaleryItem>
                        </div>
                        <div className='item' >
                            <ParallaxGaleryItem position='right'></ParallaxGaleryItem>
                        </div>

                    </div>
            </div>
    )
}

export default BenefitParallaxGallery