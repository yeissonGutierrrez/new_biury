
import foto from '../../assets/images/Quiz/Biury_sus_Fotos-01 .png'
import circleLetter from '../../assets/images/Quiz/VectorB.svg'

function Suscribe() {
    return (
        <div className="suscribe">
            <div className='photo-container'>
                <img className='photo' src={foto}/>
                <div className='circle-container'>
                    <div className='circle'>
                        <img src={circleLetter}/>
                        <div className='circle_color'></div>
                        <div className='circle_border'></div>
                    </div>
                </div>
            </div>
            <div className='info-container'>
                <h1>LISTO</h1>
                <h2>ESTÁS A UN PASO DE SER <br/> PARTE DE NUESTRO <br/> BIURY <span>CLUB</span></h2>
                <h2>ACTIVA <br/> TU SUSCRIPCIÓN Y <br/> <span>RECIBE TUS PRODUCTOS.</span></h2>
                <div className='button-container'>
                    <button>
                    ACTIVAR SUSCRIPCIÓN
                    </button>
                    <div className='border'></div>
                </div>
            </div>

        </div>
    )
}

export default Suscribe