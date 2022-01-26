import React from 'react'
import HowItWorkStyle from '../../styles/pages/HowItWork/HowItWorkStyle'


import Navbar from '../../components/layout/Navbar/Navbar'
import Footer from '../../components/layout/Footer/Footer'

import imagen1 from '../../assets/images/HowItWork/imagen1.png'
import imagen2 from '../../assets/images/HowItWork/imagen2.png'
import imagen3 from '../../assets/images/HowItWork/imagen3.png'
import { Link } from 'react-router-dom'

function HowItWork () {
    return (
        <>
        <Navbar></Navbar>
        <div className={HowItWorkStyle}>
            <h1 className='title'>Cómo funciona <span>BEAUTY CLUB</span></h1>

            <div className='steps_container'>
                <div className='step_imageLeft image1'>
                    <img src={imagen1}/>
                </div>
                <div className='step_text text1'>
                    <h1 className='step_number'>1</h1>
                    <h3 className='step'>Haz el quiz <br/> más rápido.</h3>
                    <h5 className='step_subtitle'>Queremos conocer tus <br/> preferencias</h5>
                    <hr/>
                </div>
                
                <div className='step_imageRight image2'>
                    <img src={imagen2}/>
                </div>
                <div className='step_text text2'>
                    <h1 className='step_number'>2</h1>
                    <h1 className='step'>Sé parte del club.</h1>
                    <h5 className='step_subtitle'>y recibe todo lo que te hace <br/> sentir Bella.</h5>
                    <hr/>
                </div>

                <div className='step_imageLeft image3'>
                    <img src={imagen3}/>
                </div>
                <div className='step_text text3'>
                    <h1 className='step_number'>3</h1>
                    <h1 className='step'>Dinos cuando <br/> y donde.</h1>
                    <h5 className='step_subtitle'>Y te enviaremos el BeautyBox con <br/> productos seleccionados para ti</h5>
                    <hr/>
                </div>

            </div>

            <Link to='/' className='start_button'>Empezar</Link>
        </div>
        <Footer></Footer>
        </>
    )
}

export default HowItWork