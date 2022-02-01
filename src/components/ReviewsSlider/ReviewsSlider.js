import React, { useState, useRef} from 'react'
import ReviewsSliderStyle from '../../styles/ReviewsSliderStyle/ReviewsSliderStyle'

import left from '../../assets/images/components/ReviewSlider/left.svg'
import right from '../../assets/images/components/ReviewSlider/right.svg'

import profile1 from '../../assets/images/components/ReviewCard/profile1.png'

import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css'
import 'swiper/swiper.min.css'


import SwiperCore, {
    Pagination,
    Navigation
} from 'swiper';
import ReviewCard from '../ReviewCard/ReviewCard';

  SwiperCore.use([Pagination, Navigation]);

function ReviewsSlider () {
    const [showSlider, setShowSlider] = useState(null)

    const prevRef = useRef(null);
    const nextRef = useRef(null);

    if (showSlider === null) {
        setTimeout(() => {
            setShowSlider(true)
        }, 1000);
      }

    return (
        <div className={ReviewsSliderStyle}>
        {
            showSlider
            ?
            <>
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
                className={`ReviewsSwiper`}
            >   
                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Enero' 
                            refName='Carla' 
                            footerColor='#FF6F5B'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Febrero' 
                            refName='Julio' 
                            footerColor='#B3F12D'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Marzo' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Abril' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Mayo' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Junio' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Julio' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Agosto' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Septiembre' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Octubre' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Noviembre' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>

                     <SwiperSlide>
                        <ReviewCard 
                            text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua' 
                            productName='Box Diciembre' 
                            refName='Kevin' 
                            footerColor='#FF4993'
                            refProfile={profile1}
                            >
                        </ReviewCard>
                    </SwiperSlide>
                    
                    
                     


                    <div className='navigations_buttons'>
                        <img src={left} className='prev' ref={prevRef}/>
                        <img src={right} className='next' ref={nextRef}/>
                    </div>
            </Swiper>
            </>
            : null
        }
        </div>
    )
}

export default ReviewsSlider