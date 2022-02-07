import React, { useRef } from 'react'
import BeautyMembersSeccionStyle from '../../../styles/pages/Home/BeautyMembersSeccionStyle/BeautyMembersSeccionStyle'

import image1 from '../../../assets/images/Home/BeautyMembersSeccion/pexels-anna-shvets-3851915 1.png'
import image2 from '../../../assets/images/Home/BeautyMembersSeccion/Mimage2.png'
import image3 from '../../../assets/images/Home/BeautyMembersSeccion/Mimage3.png'
import image4 from '../../../assets/images/Home/BeautyMembersSeccion/Mimage4.png'

import heartIcon from '../../../assets/images/Home/BeautyMembersSeccion/micon4.svg'

import HoverImage from '../../../components/HoverImage/HoverImage'
import { Link } from 'react-router-dom'

import whatsappIcon from '../../../assets/images/Home/BeautyMembersSeccion/whatsappIconLink.svg'
import youtubeIcon from '../../../assets/images/Home/BeautyMembersSeccion/youtubeLink.svg'
import instagramIcon from '../../../assets/images/Home/BeautyMembersSeccion/instagramLink.svg'
import telegramIcon from '../../../assets/images/Home/BeautyMembersSeccion/telegramLink.svg'


import ReviewsSliderStyle from '../../../styles/ReviewsSliderStyle/ReviewsSliderStyle'

import left from '../../../assets/images/components/ReviewSlider/left.svg'
import right from '../../../assets/images/components/ReviewSlider/right.svg'

import profile1 from '../../../assets/images/components/ReviewCard/profile1.png'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper';




function BeautyMembersSeccion() {

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className={BeautyMembersSeccionStyle}>
            <div className='seccion1'>
                <div className='content'>
                    <div className='links'>
                        <Link to={'/'}>
                            <img src={whatsappIcon}/>
                        </Link>
                        <Link to={'/'}>
                            <img src={youtubeIcon}/>
                        </Link>
                        <Link to={'/'}>
                            <img src={instagramIcon}/>
                        </Link>
                        <Link to={'/'}>
                            <img src={telegramIcon}/>
                        </Link>
                    </div>


                    <h3 className='subtitle'>síguenos y accede a contenido exclusivo</h3>
                    <h3 className='hashtag'>#BIURY<span>members</span></h3>
                    <img className='heart_icon' src={heartIcon}/>
                    <div className='gallery'>
                       <HoverImage image={image1} likes={200}></HoverImage>
                       <HoverImage image={image2} likes={120}></HoverImage>
                       <HoverImage image={image3} likes={220}></HoverImage>
                       <HoverImage image={image4} likes={400}></HoverImage>
                    </div>  
                    <div className='gallery-mobile'>
                       <Swiper
                            onInit={(swiper) => {
                            swiper.params.navigation.prevEl = prevRef.current;
                            swiper.params.navigation.nextEl = nextRef.current;
                            }}
                            spaceBetween= {0}
                            slidesPerView= {'auto'}
                            centeredSlides= {true}
                            loop= {true}
                            loopAdditionalSlides= {30}
                            className={`SocialSwiperMobile`}
                        >   
                                <SwiperSlide>
                                    <HoverImage image={image1} likes={200}></HoverImage>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <HoverImage image={image2} likes={120}></HoverImage>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <HoverImage image={image3} likes={220}></HoverImage>
                                </SwiperSlide>

                                <SwiperSlide>
                                    <HoverImage image={image4} likes={400}></HoverImage>
                                </SwiperSlide>

                                
                                <div className='navigations_buttons'>
                                    <img src={left} className='prev' ref={prevRef}/>
                                    <img src={right} className='next' ref={nextRef}/>
                                </div>
                        </Swiper>
                    </div>
                </div>
            </div>
            <div className='seccion2'>
                
            </div>
        </div>
    )
}

export default BeautyMembersSeccion