import React, {useState} from 'react'
import HoverImageStyle from '../../styles/components/HoverImageStyle/HoverImageStyle'

import roseHeartIcon from '../../assets/images/Home/BeautyMembersSeccion/rose_heart.svg'

function HoverImage({image, likes}) {
    const [show, setshow] = useState(false)
    return (
        
        <div onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)} className={HoverImageStyle}>
            <img src={image}/>
            {
                show
                ?
                <div className='image_hover'>
                    <img src={roseHeartIcon}/>
                    <h1>{likes} likes</h1>
                </div>
                : null
            }
        </div>
    )
}

export default HoverImage