

import CurrentProductItemStyle from "../../styles/components/CurrentProductItem/CurrentProductItemStyle"



import stars from '../../assets/images/stars.svg'
import moreIcon from '../../assets/images/moreIcon.png'

function CurrentProductItem({data}) {
    return (
        <div className={CurrentProductItemStyle}>
            <div className="image-contain">
                <img src={data.image}/>
                <div className="image-border"></div>
                <img src={moreIcon} className="moreIcon"/>
            </div>
            <div className="info">
                <h5>{data.name}</h5>
                <div className="rating">
                    <img src={stars}/>
                    <span>(1)</span>
                </div>
                <h6>Desde {data.price}</h6>
            </div>
        </div>
    )    
}

export default CurrentProductItem