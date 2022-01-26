import React from 'react'
import ParallaxGaleryItemStyle from '../../styles/components/BenefitParallaxGalleryStyle/ParallaxGaleryItemStyle'

import img1 from '../../assets/images/components/ParallaxGaleryItemImages/01.png'

function ParallaxGaleryItem ({position}) {
    return (
        <>
            {
                position === 'left'
                ?
                <div style={{boxShadow: '-10px 9px 0px 0px #FFDBE9', padding: '12px 12px 20px 0',}} className={ParallaxGaleryItemStyle}>
                    <img src={img1}/>
                    <div className='text'>
                        <span className='text_light'>Obtienes productos de </span>
                        <span className='text_bold'>primera calidad.</span>
                    </div>
                </div>
                : null
            }
            {
                position === 'right'
                ?
                <div style={{boxShadow: '10px 9px 0px 0px #FFDBE9', padding: '12px 0 20px 12px',}} className={ParallaxGaleryItemStyle}>
                    <img src={img1}/>
                    <div className='text'>
                        <span className='text_bold'>primera calidad.</span> <br/>
                        <span className='text_light'>Obtienes productos de </span>
                    </div>
                </div>
                : null
            }
        </>
    )
}

export default ParallaxGaleryItem