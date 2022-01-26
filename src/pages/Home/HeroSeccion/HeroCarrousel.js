import React from 'react'
import HeroCarrouselItem from '../../../components/HeroCarrouselItems/HeroCarrouselItem';
import HeroCarrouselStyle from '../../../styles/pages/Home/HeroSeccionStyle/HeroCarrouselStyle';

function HeroCarrousel () {
    return(
        <div className={HeroCarrouselStyle}>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
            <HeroCarrouselItem></HeroCarrouselItem>
        </div>
    )
}

export default HeroCarrousel;