
import QuizButton from './QuizButton'


function QuizStep3({setStep}) {
    return (
        <div className="step3">
            <h4 className='question-title'>¿EN QUÉ RANGO DE EDAD ESTÁS?</h4>
            <p className='paragraph1'>La edad es solo un número, lo importante es la actitud <br/>
            que le pones a cada instante.</p>
            <div className='answers-wrapper'>
                <div className='answers-container'>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Seca'/>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Seca'/>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Seca'/>
                </div>

                <div className='answers-container2'>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Seca'/>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Seca'/>
                </div>
            </div>

            <div className='pagination-container'>
                <button onClick={() => setStep('step2')} className='pagination-button'>ANTERIOR</button>
                <button onClick={() => setStep('step4')} className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep3