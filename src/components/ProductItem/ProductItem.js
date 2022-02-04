import React, {useEffect, useRef, useState} from 'react'
import ProductItemStyle from '../../styles/components/ProductItemStyle/ProductItemStyle'

import Rating from '../../assets/images/components/Rating/Rating'
import gsap from 'gsap'

import stars from '../../assets/images/Home/ProductSeccion/starts.svg'



function ProductItem({data}) {
    const [show, setShow] = useState(false)
    const ref = useRef()


    useEffect(() => {
        const hover = gsap.to('.hover_contain', {
            scaleX:1.12, scaleY:1.12, scaleZ:1.5,
            color: "blue",
            duration: 1.5,
            paused: true,
            ease: "ease-in-out"
          });
          ref.current.addEventListener("mouseenter", () => hover.play());
    }, [])
    return (
        <div className={ProductItemStyle}>
            <div ref={ref} onMouseEnter={() => setShow(true)} onMouseLeave={() => setShow(false)} className='item_image'>
                <img src={data.image}/>
                {
                    show 
                    ?
                        <div style={{backgroundColor: data.bgColor}} className='hover_contain'>
                            <h4> {data.title}</h4>
                            <p>{data.text}</p>
                        </div>
                    : null
                }
            </div>
            <span className='item_title'>Lorem ipsum</span>
            <div className='stars'>
                {/* <Rating></Rating> */}
                <img src={stars}/>
            </div>
        </div>
    )
}

export default ProductItem