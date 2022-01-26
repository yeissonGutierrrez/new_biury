import React from 'react'
import BenefitItemStyle from '../../styles/components/BenefitItemStyle/BenefitItemStyle'


function BenefitItem({image, banner, bannerColor, bannerText, text1, text2, text3}) {
    return(
        <div className={BenefitItemStyle}>
            <img src={image}/>
            <ul className='list_item__info'>
                <li>
                    <p>{text1}</p>
                </li>
                <li>
                    <p>{text2}</p>
                </li>
                <li>
                    <p>{text3}</p>
                </li>
            </ul>
            {
                banner === 'right'
                ? 
                <div style={{transform: 'rotate(-5deg)', backgroundColor: bannerColor}} className='banner'>
                    <span className='banner_text'>{bannerText}</span>
                </div>
                : null
            }
            {
                banner === 'center'
                ? 
                <div style={{transform: 'rotate(0deg)', top: 260, backgroundColor: bannerColor}} className='banner'>
                    <span className='banner_text'>{bannerText}</span>
                </div>
                : null
            }
            {
                banner === 'left'
                ? 
                <div style={{transform: 'rotate(5deg)', backgroundColor: bannerColor}} className='banner'>
                    <span className='banner_text'>{bannerText}</span>
                </div>
                : null
            }
        </div>
    )
}

export default BenefitItem