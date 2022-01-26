import React from 'react'
import BeautyMembersSeccionStyle from '../../../styles/pages/Home/BeautyMembersSeccionStyle/BeautyMembersSeccionStyle'

import image1 from '../../../assets/images/Home/BeautyMembersSeccion/pexels-anna-shvets-3851915 1.png'
import image2 from '../../../assets/images/Home/BeautyMembersSeccion/Mimage2.png'
import image3 from '../../../assets/images/Home/BeautyMembersSeccion/Mimage3.png'
import image4 from '../../../assets/images/Home/BeautyMembersSeccion/Mimage4.png'

import heartIcon from '../../../assets/images/Home/BeautyMembersSeccion/micon4.svg'

import HoverImage from '../../../components/HoverImage/HoverImage'

function BeautyMembersSeccion() {
    return (
        <div className={BeautyMembersSeccionStyle}>
            <div className='seccion1'>
                <div className='content'>
                    <h3 className='subtitle'>Inspirate y siguenos en instagram </h3>
                    <h3 className='hashtag'>#Beauty members</h3>
                    <img className='heart_icon' src={heartIcon}/>
                    <div className='gallery'>
                       <HoverImage image={image1} likes={200}></HoverImage>
                       <HoverImage image={image2} likes={120}></HoverImage>
                       <HoverImage image={image3} likes={220}></HoverImage>
                       <HoverImage image={image4} likes={400}></HoverImage>
                    </div>  
                </div>
            </div>
            <div className='seccion2'>
                
            </div>
        </div>
    )
}

export default BeautyMembersSeccion