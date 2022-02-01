
import QuizButton from './QuizButton'


function QuizStep4() {
    return (
        <div className="step4">
            <h4 className='question-title'>¿EN CUÁL DE ESTOS TONOS <br/> CLASIFICARÍAS TU TONO DE PIEL?</h4>
            <p className='paragraph1'>
            No es el color de la piel, es el brillo que irradias. <br/>
            Te lo preguntamos por que cada tono tiene necesidades <br/>
            y cuidados distintos.
            </p>
            <div className='answers-wrapper'>
                <QuizButton width={'200px'} bgColor='rgb(250,225,212)' borderColor='#F6CDB7' question='Seca'/>
                <QuizButton width={'200px'} bgColor='rgb(223,187,160)' borderColor='#CA8D61' question='Seca'/>
                <QuizButton width={'200px'} bgColor='rgb(162,126,105)' borderColor='#642805' question='Seca'/>
            </div>

            <div className='pagination-container'>
                <button className='pagination-button'>ANTERIOR</button>
                <button className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep4