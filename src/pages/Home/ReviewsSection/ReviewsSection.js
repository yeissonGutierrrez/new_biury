import React from 'react'
import ReviewsSlider from '../../../components/ReviewsSlider/ReviewsSlider'
import Cursor from '../../../cursor'
import ReviewsSectionStyle from '../../../styles/pages/Home/ReviewsSectionStyle/ReviewsSection'


function ReviewsSection() {
    return (
        <div className={ReviewsSectionStyle}>
            <h1 className='title'>Vivimos por los <span>aplausos</span></h1>
            <h3 className='subtitle'><span>¡Es broma!</span> En cambio, vivimos por las miles de rutinas que hemos creado, <br/> la satisfacción de las Beauty members y las historias que han compartido.</h3>
            <ReviewsSlider></ReviewsSlider>
            <Cursor></Cursor>
        </div>
    )
}

export default ReviewsSection