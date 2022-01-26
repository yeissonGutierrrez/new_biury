import React from 'react'
import HeroCarrouselItemStyle from '../../styles/components/HeroCarrouselItem/HeroCarrouselItemStyle';
import CarrouselImage1 from '../../assets/images/Home/HeroSeccion/cheerful-young-female-model-has-pleasant-smile-covers-eye-with-cosmetic-sponge-enjoys-all-benefits-of-patches-reduces-wrinkles-wears-wrapped-towel-on-head-has-skincare-routine-after-awakening 1.png'
import promotionalImage from '../../assets/images/Home/HeroSeccion/break.png'

function HeroCarrouselItem(props) {
    return(
        <div className={HeroCarrouselItemStyle}>
            <div className='hero_carrousel_item__images'>
                <img className='principal_image' src={CarrouselImage1}/>
                <img className='promotional_image' src={promotionalImage}/>
            </div>
            <h2 className='item_title'>Descubre todos los meses nuevos productos</h2>
            <span className='item_subtitle'>Descubre todos los meses nuevos productos</span>
        </div>
    )
}

export default HeroCarrouselItem;