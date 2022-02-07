import React from 'react';
import { Link } from 'react-router-dom';

import BiuryBoxStyle from '../../../styles/pages/Home/BiuryBoxStyle/BiuryBoxStyle';


function BiuryBox() {
    return (
        <div className={BiuryBoxStyle}>
            <div className='biuryBox_image'>
            </div>

            <div className='biuryBox_info'>
                <h1 className='biuryBox_title'>BIURY<span>BOX</span></h1>
                
                <div className='info'>
                    <h3>¿Cuántos productos recibes? <br/> <span> 4 Productos Premium Personalizados. </span> </h3>
                </div>
                
                <div className='info'>
                    <h3> ¿Cuándo recibes? <br/> <span> Todos los meses </span></h3>
                </div>


                <div className='info'>
                    <h3>¿En cuánto están valorados? <br/> <span> $200.000 Aprox. </span></h3>
                </div>
                
                <div className='info'>
                    <h3>¿Cuánto pagas? $75.000</h3>
                </div>

                <div className='info'>
                    <h3>¿Hay clausulas de permanencia? <br/> <span> ¡No! Cancela cuando quieras. </span></h3>
                </div>

                <h3 className='biuryBox_big_title'>Y MUCHO Más</h3>
                <p>encunetra descuentos permanentes en</p>
                <Link to={'/'}>www.lineaestetica.co</Link>

                <h3 className='biuryBox_subtitle'>descubre: acceso exclusivo <br/> A regalos, descuentos <br/> E Información.</h3>

                <button>UNETE A <span>BIURY</span>CLUB</button>
                
            </div>
        </div>
    )
}
export default BiuryBox