import React from 'react'
import MembershipCardStyle from '../../styles/components/MembershipCard/MembershipCardStyle'
import ConfirmButton from '../../components/ConfirmButton/ConfirmButton'

function MembershipCard({titleImage, titleText, producImage, price, promoText, line , planText}) {
    return (
        <div className={MembershipCardStyle}>
            <h1 className='title'>{titleText}</h1>
            <h1 class="outlined">{planText}</h1>
            {/* <div style={{backgroundImage: `url(${titleImage})`}} className='decorated_title'></div> */}
            <img className='product' src={producImage}/>
            <span className='price'>{price}</span>
            <p className='promo_text'>{promoText}</p>
            <button>
                Lo Quiero
            </button>
            {
                line
                ? 
                <hr/>
                : null
            }
        </div>
    )
}

export default MembershipCard