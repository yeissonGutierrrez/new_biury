import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'
import HeroSeccion from './HeroSeccion/HeroSeccion'
import ProductSeccion from './ProductSeccion/ProductSeccion'
import ReviewsSection from './ReviewsSection/ReviewsSection'
import BeautyMembersSeccion from './BeautyMembersSeccion/BeautyMembersSeccion'
import HowItWork from './HomeHowItWork/HowItWork'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import BiuryBox from './BiuryBox/BiuryBox'

function Home() {
    return(
        <>
            <Navbar bgColor={'#9926F7'}></Navbar>
            <HeroSeccion></HeroSeccion>
            <HowItWork></HowItWork>
            <HeroBanner/>
            <BiuryBox></BiuryBox>
            <ProductSeccion></ProductSeccion>
            <ReviewsSection></ReviewsSection>
            <BeautyMembersSeccion></BeautyMembersSeccion>
            <Footer></Footer> 
        </>
    )
}
export default Home