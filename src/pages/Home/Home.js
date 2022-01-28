import React from 'react'
import Footer from '../../components/layout/Footer/Footer'
import Navbar from '../../components/layout/Navbar/Navbar'
import BannerSeccion from './BannerSeccion/BannerSeccion'
import HomeMembershipSeccion from './HomeMembershipSeccion/HomeMembershipSeccion'
import HeroSeccion from './HeroSeccion/HeroSeccion'
import BenefitSeccion from './BenefitSeccion/BenefitSeccion'
import ProductSeccion from './ProductSeccion/ProductSeccion'
import HomeTestSeccion from './TestSeccion/TestSeccion'
import ReviewsSection from './ReviewsSection/ReviewsSection'
import BeautyMembersSeccion from './BeautyMembersSeccion/BeautyMembersSeccion'
import HowItWork from './HomeHowItWork/HowItWork'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import BiuryBox from './BiuryBox/BiuryBox'
import Cursor from '../../cursor'

function Home() {
    return(
        <>

            <Navbar></Navbar>
            <HeroSeccion></HeroSeccion>
            {/* <Cursor></Cursor> */}
            {/* <HomeTestSeccion></HomeTestSeccion> */}
            <HowItWork></HowItWork>
            <HeroBanner/>
            <BiuryBox></BiuryBox>
            {/* <BenefitSeccion></BenefitSeccion> */}
            {/* <HomeMembershipSeccion></HomeMembershipSeccion>
            <BannerSeccion></BannerSeccion> */}
            <ProductSeccion></ProductSeccion>
            <ReviewsSection></ReviewsSection>
            <BeautyMembersSeccion></BeautyMembersSeccion>
            <Footer></Footer> 
        </>
    )
}
export default Home