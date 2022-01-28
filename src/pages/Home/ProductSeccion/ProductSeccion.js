import React, {useRef, useEffect, useState, useContext} from 'react'
import mouse from '../../../assets/images/clicker-del-mouse 1.svg'
import Pointer from '../../../animation'
import ProductItem from '../../../components/ProductItem/ProductItem'
// import { MouseContext } from '../../../context/MouseContext'
import ProductSeccionStyle from '../../../styles/pages/Home/ProductSeccionStyle/ProductSeccionStyle'
import Cursor from '../../../cursor'

import wave from '../../../assets/images/Home/wave_dark_blue.svg'

function ProductSeccion() {

    const contain = useRef(null);

    const delay = 18;

    const dot = useRef(null);
    const dotOutline = useRef(null);
  
    const cursorVisible = useRef(true);
    const cursorEnlarged = useRef(false);
  
    const endX = useRef(window.innerWidth / 2);
    const endY = useRef(window.innerHeight / 2);
    const _x = useRef(0);
    const _y = useRef(0);
  
    const requestRef = useRef(null);
  
    useEffect(() => {
        const wrapper = contain.current

      wrapper.addEventListener('mousedown', mouseOverEvent);
      wrapper.addEventListener('mouseup', mouseOutEvent);
      wrapper.addEventListener('mousemove', mouseMoveEvent);
      wrapper.addEventListener('mouseenter', mouseEnterEvent);
      wrapper.addEventListener('mouseleave', mouseLeaveEvent);
  
      animateDotOutline();
  
      return () => {
        wrapper.removeEventListener('mousedown', mouseOverEvent);
        wrapper.removeEventListener('mouseup', mouseOutEvent);
        wrapper.removeEventListener('mousemove', mouseMoveEvent);
        wrapper.removeEventListener('mouseenter', mouseEnterEvent);
        wrapper.removeEventListener('mouseleave', mouseLeaveEvent);
  
        cancelAnimationFrame(requestRef.current);
      };
    }, []);
  
    const toggleCursorVisibility = () => {
      if (cursorVisible.current) {
        dot.current.style.opacity = 1;
        dotOutline.current.style.opacity = 1;
      } else {
        dot.current.style.opacity = 0;
        dotOutline.current.style.opacity = 0;
      }
    };
  
    const toggleCursorSize = () => {
      if (cursorEnlarged.current) {
        dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)';
        dotOutline.current.style.transform = 'translate(-50%, -50%) scale(3)';
      } else {
        dot.current.style.transform = 'translate(-50%, -50%) scale(1)';
        dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)';
      }
    };
  
    const mouseOverEvent = () => {
      cursorEnlarged.current = true;
      console.log('enter')
      toggleCursorSize();
  };
  
  const mouseOutEvent = () => {
        console.log('left')
      cursorEnlarged.current = false;
      toggleCursorSize();
    };
  
    const mouseEnterEvent = () => {
      cursorVisible.current = true;
      toggleCursorVisibility();
    };
  
    const mouseLeaveEvent = () => {
      cursorVisible.current = false;
      toggleCursorVisibility();
    };
  
    const mouseMoveEvent = e => {
      cursorVisible.current = true;
      toggleCursorVisibility();
  
      endX.current = e.pageX;
      endY.current = e.pageY;
  
      dot.current.style.top = endY.current + 'px';
      dot.current.style.left = endX.current + 'px';
    };
  
    const animateDotOutline = () => {
      _x.current += (endX.current - _x.current) / delay;
      _y.current += (endY.current - _y.current) / delay;
  
      dotOutline.current.style.top = _y.current + 'px';
      dotOutline.current.style.left = _x.current + 'px';
  
      requestRef.current = requestAnimationFrame(animateDotOutline);
    };
  

    return (
        <>
        <div ref={dotOutline} className="cursor-dot-outline"></div>
        <div ref={dot} className="cursor-dot"></div>
        <div ref={contain} className={`${ProductSeccionStyle}`}>
            <div data-cursor-type='wrap' className='products_container'>
                <h1 onMouseEnter={mouseOverEvent} onMouseLeave={mouseOutEvent} className='title'>BEST SELLERS</h1>
                <h5 onMouseEnter={mouseOverEvent} onMouseLeave={mouseOutEvent}  className='subtitle'>LOS PRODUCTOS MEJOR VALORADOS <br/> POR NUESTROS <span>BIURY</span>MEMBERS</h5>
                <div className='productsContain'>
                    <ProductItem title='Acerca de one' text='Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ' bgColor='#FF4993'></ProductItem>
                    <ProductItem title='Acerca de two' text='Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ' bgColor='#B3F12D'></ProductItem>
                    <ProductItem title='Acerca de three' text='Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ' bgColor='#BC49EA'></ProductItem>
                    <ProductItem title='Acerca de four' text='Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet, consectetur ' bgColor='#00CFBE'></ProductItem>
                </div>
            </div>
            <button>UNETE A <span>BIURY</span>CLUB</button>
            <img className='wave' src={wave}/>
        </div>
        </>
    )
}

export default ProductSeccion