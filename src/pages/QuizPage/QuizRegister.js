
import wave from '../../assets/images/Quiz/waveQuizGreen.svg'

function QuizRegister() {
    return (
        <>
        <div className="QuizRegister"> 
            <img className='wave' src={wave}/>
            <h3>¡ESTÁS A POCOS PASOS <br/> DE SER USUARIO DE BUIRYCLUB!</h3>
            <div className='info'>
                <div className='circle'>
                    <span className='num'>1</span>
                    <div className='circle_color'></div>
                    <div className='circle_border'></div>
                </div>
                <div className='text'>
                    <h1>REALIZA TU QUIZ GRATIS</h1>
                    <p>CON SOLO 8 PREGUNTAS NUESTROS EXPERTOS <br/> PERSONALIZARÁN TUS PRODUCTOS.</p>
                </div>
            </div>
            <div className='inputs_wrapper'>
                <div className='input'>
                    <label >¿DÓNDE QUIERES RECIBIR <br/> TUS RESULTADOS?</label>
                    <input  placeholder='Correo Electrónico' type='email' className='footer_input'></input>
                </div>
                <div className='input'>
                    <label >¿CÓMO TE DICEN TUS AMIGOS?</label>
                    <input  placeholder='' type='email' className='footer_input'></input>
                </div>
            </div>
            <button>SIGUIENTE</button>
        </div>
        </>
    )    
}

export default QuizRegister