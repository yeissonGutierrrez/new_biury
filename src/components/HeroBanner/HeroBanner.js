

import React, { useState } from 'react';
import HeroBannerStyle from '../../styles/components/HeroBanner/HeroBannerStyle'
import Marquee from "react-fast-marquee";


import imagen from '../../assets/images/bannerImage1.png'
import imagen2 from '../../assets/images/heroBannerimage2.png'



function HeroBanner() {
  const [scrollValue, setScrollValue] = useState(1)
  const marks = [
    imagen,
    imagen2,
    imagen,
    imagen2,
    imagen,
    imagen2,
  ]


  return (
    <div className={HeroBannerStyle} style={{position: 'absolute', bottom: 0}} >

      <div>
        <Marquee
          speed={100}
          style={{ height: 150 }}
          
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