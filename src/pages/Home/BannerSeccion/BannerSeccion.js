import React from 'react'
import { Link } from 'react-router-dom'
import BannerSeccionStyle from '../../../styles/pages/Home/BannerSeccionStyle/BannerSeccionStyle'

import phoneImage from '../../../assets/images/Home/BannerSeccion/phone2.png'
import logoBanner from '../../../assets/images/Home/BannerSeccion/bannerIcono.svg'

import video from '../../../assets/RPReplay_Final1635533419.mp4'

function BannerSeccion() {
    return (
        <div className={BannerSeccionStyle}>
            <div className='banner_titles_seccion'>
                <span className='hashtag_title'>#NoMasFiltros</span>
                <h3 className='title'>Beauty Club se <br/> hace tendencia</h3>
                <h3 className='decorated_subtitle'>BE A BIURY MEMBER</h3>
                <Link to='/'>Empezar</Link>
            </div>
            <div className='banner_images_seccion'>
                <img src={phoneImage}/>
                <video className='video' loop autoPlay muted>
                    <source src={video} type="video/mp4" />
                </video>
                {/* <img className='logo_banner' src={logoBanner}/> */}
            </div>

        </div>
    )
}

export default BannerSeccion