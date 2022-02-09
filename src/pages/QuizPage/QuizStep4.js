
import QuizButton from './QuizButton'


function QuizStep4({ setStep }) {
    return (
        <div className="step4">
            <h4 className='question-title'>¿EN CUÁL DE ESTOS TONOS <br/> CLASIFICARÍAS TU TONO DE PIEL?</h4>
            <p className='paragraph1'>
            No es el color de la piel, es el brillo que irradias. <br/>
            Te lo preguntamos por que cada tono tiene necesidades <br/>
            y cuidados distintos.
            </p>

            <div className='answers-wrapper'>
                <div className='buttons'>  
                    <div className='two'>
                        <div className='1'>
                            <QuizButton width={'200px'} bgColor='rgb(250,225,212)' borderColor='#F6CDB7' question='Clara'/>
                        </div>

                        <div className='2'>
                            <QuizButton width={'200px'} bgColor='rgb(223,187,160)' borderColor='#CA8D61' question='Media'/>
                        </div>
                    </div>

                    <div className='3'>
                        <QuizButton width={'200px'} bgColor='rgb(162,126,105)' borderColor='#642805' question='Oscura'/>
                    </div>
                </div>
            </div>

            <div className='pagination-container'>
                <button onClick={() => setStep('step3')} className='pagination-button'>ANTERIOR</button>
                <button onClick={() => setStep('step5')} className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep4