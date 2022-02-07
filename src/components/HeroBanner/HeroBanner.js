

import React, { useState } from 'react';
import HeroBannerStyle from '../../styles/components/HeroBanner/HeroBannerStyle'
import Marquee from "react-fast-marquee";


import imagen from '../../assets/images/brands/isdinLogo.svg'
import imagen2 from '../../assets/images/brands/uriageLogo.svg'
import imagen3 from '../../assets/images/brands/heliocareLogo.svg'
import imagen4 from '../../assets/images/brands/sesdesmaLogo.svg'
import imagen5 from '../../assets/images/brands/larocheposayLogo.svg'
import imagen6 from '../../assets/images/brands/eucelinLogo.svg'
import imagen7 from '../../assets/images/brands/almayLogo.svg'



function HeroBanner() {
  const [scrollValue, setScrollValue] = useState(1)
  const marks = [
    imagen,
    imagen2,
    imagen3,
    imagen4,
    imagen5,
    imagen6,
    imagen7,
  ]


  return (
    <div className={HeroBannerStyle}>

      <div className='desktop-banner'>
        <Marquee
          speed={100}
          style={{ height: 150, width: '100vw' }}
          gradient={false}
          
        >
          {
            marks.map((mark, index) => {
              return (
                <img  key={index} src={mark} alt="mark" style={{ width: `${100 / marks.length}%`, margin: '20px' }} />
              )
            })
          }
          {
            marks.map((mark, index) => {
              return (
                <img key={index} src={mark} alt="mark" style={{ width: `${100 / marks.length}%`, margin: '20px' }} />
              )
            })
          }
        </Marquee>

      </div>

      <div className='mobile-banner'>
        <Marquee
          speed={50}
          style={{ height: 150, width: '100vw' }}
          gradient={false}
          
        >
          {
            marks.map((mark, index) => {
              return (
                <img  key={index} src={mark} alt="mark" style={{ width: `${100 / marks.length}%`, margin: '20px' }} />
              )
            })
          }
          {
            marks.map((mark, index) => {
              return (
                <img key={index} src={mark} alt="mark" style={{ width: `${100 / marks.length}%`, margin: '20px' }} />
              )
            })
          }
        </Marquee>

      </div>
    </div>
  );
}



export default HeroBanner