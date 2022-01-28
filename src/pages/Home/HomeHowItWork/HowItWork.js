import React from 'react';
import HomeHowItWorkStyle from '../../../styles/pages/Home/HomeHowItWorkStyle/HomeHowItWorkStyle';

function HowItWork() {
    return (
        <div className={HomeHowItWorkStyle}>
            <h1 className='title'>
                ¿CÓMO FUNCIONA BIURY <span>BOX</span>? 
            </h1>

            <div className='steps_container'>
                <div className='steps'>
                    <div className='circle'>
                        <span className='num'>1</span>
                        <div className='circle_color'></div>
                    </div>
                    <h1 className='step_title'>VIVE LA EXPERIENCIA <span>BIURY</span></h1>
                    <p>Nuestros expertos te acompañan en el proceso y personalizarán tu caja</p>
                </div>

                <div className='steps'>
                    <div className='circle'>
                        <span className='num'>2</span>
                        <div className='circle_color'></div>
                    </div>
                    <h1 className='step_title'>ACTIVA TU MEMBRESÍA</h1>
                    <p>Realiza el pago sin cláusulas de permanecia</p>
                </div>

                <div className='steps'>
                    <div className='circle'>
                        <span className='num'>3</span>
                        <div className='circle_color'></div>
                    </div>
                    <h1 className='step_title'>RECIBE <br/> DONDE QUIERAS</h1>
                    <p>Envío gratis</p>
                </div>
            </div>

            <button>QUIERO SABER MÁS</button>

            <h1 className='subtitle'>¡Solo perteneces a BIURY<span>CLUB</span> cuando activas tu suscripción!</h1>
        </div>
    )
}

export default HowItWork