
import arrow from '../../assets/images/Quiz/BottomSemiArrow.svg'
import QuizButton from './QuizButton'

function QuizStep1({setStep}) {
    return (
        <div className="step1">
            <h1 className="user_name">Susi</h1>
            <h2>CUÉNTANOS SOBRE TI.</h2>
            <h3>100% CONFIDENCIAL</h3>
            <p className="paragraph1">Mientras más honestas sean tus respuestas, <br/> más acertada será la personalización de tus productos. </p>
            <img src={arrow}/>
            <h4 className='question-title'>¿CUÁL ES TU GÉNERO?</h4>
            <p className="paragraph2">No importa cuál sea tu identidad de genero, para <br/> nosotros lo único importante es tu felicidad. </p>
            <div className='answers-wrapper'>
                <QuizButton bgColor='rgb(202,102,249)' borderColor='#A600F5' question='Hombre'/>
                <QuizButton bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Mujer'/>
                <QuizButton bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Prefiero no decirlo'/>
            </div>
            <button onClick={() => setStep('step2')} className='pagination-button'>CONTINUAR</button>
        </div>
    )
}

export default QuizStep1