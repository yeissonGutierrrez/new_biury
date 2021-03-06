
import QuizButton from './QuizButton'

import face1 from '../../assets/images/Quiz/face1.svg'
import face2 from '../../assets/images/Quiz/face2.svg'
import face3 from '../../assets/images/Quiz/face3.svg'
import face4 from '../../assets/images/Quiz/face4.svg'
import face5 from '../../assets/images/Quiz/face5.svg'

function  QuizStep2({setStep}) {
    return (
        <div className="step2">
            <h4 className='question-title'>¿CON CUÁL DE ESTOS TIPOS <br/> DE PIEL TE IDENTIFICAS?</h4>
            <div className='answers-wrapper'>

                <div className='two'>
                    <div className='answer'>
                        <img src={face1}/>
                        <div className='button'>
                            <QuizButton width={'150px'} bgColor='rgb(215,247,229)' borderColor='#BCF1D3' question='Normal'/>
                        </div>
                        <p>
                            · Suave y uniforme. <br/>
                            · Luminosa <br/>
                            · Apariencia fresca. <br/>
                            · Saludable <br/>
                        </p>
                    </div>

                    <div className='answer'>
                        <img src={face2}/>
                        <div className='button'>
                            <QuizButton width={'150px'} bgColor='rgb(253,219,212)' borderColor='#FBC3B8' question='Grasa'/>
                        </div>
                        <p>
                            · Producción <br/>
                            excesiva de grasa. <br/>
                            · Acne y puntos negros <br/>
                            visibles. <br/>
                            · Poros abiertos. <br/>
                            · Poca duración de <br/>
                            maquillaje.
                        </p>
                    </div>
                    
                    <div className='answer'>
                        <img src={face3}/>
                        <div className='button'>
                            <QuizButton width={'150px'} bgColor='rgb(251,227,169)' borderColor='#F7D06F' question='Mixta'/>
                        </div>
                        <p>
                            · Combinación <br/>
                            de zona T grasa <br/>
                            (mentón, nariz y mentón). <br/>
                            · zona de mejillas <br/>
                            secas.
                        </p>
                    </div>

                    <div className='answer'>
                        <img src={face4}/>
                        <div className='button'>
                            <QuizButton width={'150px'} bgColor='rgb(247,197,182)' borderColor='#F19E85' question='Seca'/>
                        </div>
                        <p>
                        Tirante y seca. <br/>
                        · Alta duración del maquillaje. <br/>
                        · Poros poco visibles. <br/>
                        · Lineas de expresión marcadas. <br/>
                        · Tono apagado. <br/>
                        </p>
                    </div>
                </div>

                <div className='one'>
                    <div className='answer'>
                        <img src={face5}/>
                        <div className='button'>
                            <QuizButton width={'150px'} bgColor='rgb(202,102,249)' borderColor='#A600F5' question='Sensible'/>
                        </div>
                        <p>
                        Tendencia a <br/>
                        ponerse roja. <br/>
                        · Presenta fácilmente <br/>
                        irritación.
                        </p>
                    </div>
                </div>


            </div>

            <button onClick={() => setStep('step3')} className='pagination-button'>CONTINUAR</button>
        </div>
    )
}

export default QuizStep2