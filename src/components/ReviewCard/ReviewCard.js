import React from 'react'
import ReviewCardStyle from '../../styles/components/ReviewCardStyle/ReviewCardStyle'

import stars from '../../assets/images/components/ReviewCard/starts.svg'


import item1 from '../../assets/images/components/ReviewCard/product.png'

function ReviewCard ({footerColor, text, productName, refName, refProfile}) {
    return (
        <div className={ReviewCardStyle}>
            <img src={refProfile} className='review_photo'/>     
            <img src={stars}/>
            <p>{text}</p>
            <span className='review_nombre'>{refName}</span>
            <div style={{backgroundColor: footerColor}} className='footer'>
                <img src={item1} className='product_image'/>
                <span>{productName}</span>
            </div>
        </div>
    )
}

export default ReviewCard