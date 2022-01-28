import React from 'react'
import ReviewsSlider from '../../../components/ReviewsSlider/ReviewsSlider'
import Cursor from '../../../cursor'
import ReviewsSectionStyle from '../../../styles/pages/Home/ReviewsSectionStyle/ReviewsSection'


function ReviewsSection() {
    return (
        <div className={ReviewsSectionStyle}>
            <h1 className='title'>TU OPINIÓN ES LO MÁS IMPORTANTE</h1>
            <ReviewsSlider></ReviewsSlider>
            <button>UNETE A <span>BIURY</span>CLUB</button>
        </div>
    )
}

export default ReviewsSection