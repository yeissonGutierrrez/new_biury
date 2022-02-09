
import QuizButton from './QuizButton'


function QuizStep3({setStep}) {
    return (
        <div className="step3">
            <h4 className='question-title'>¿EN QUÉ RANGO DE EDAD ESTÁS?</h4>
            <p className='paragraph1'>La edad es solo un número, lo importante es la actitud <br/>
            que le pones a cada instante.</p>
            <div className='answers-wrapper'>
                <div className='answers-container'>
                    <QuizButton width={'200px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Menos de 25'/>
                    <QuizButton width={'200px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='25 a 30 años'/>
                    <QuizButton width={'200px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='30 a 38 años'/>
                </div>

                <div className='answers-container2'>
                    <QuizButton width={'200px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='38 a 60 años'/>
                    <QuizButton width={'200px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Más de 60 años'/>
                </div>

                <div className='answers-container-mobile'>
                    <div className='grid-wrapper'>
                        <QuizButton width={'130px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Menos de 25'/>
                        <QuizButton width={'130px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='25 a 30 años'/>
                        <QuizButton width={'130px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='30 a 38 años'/>
                        <QuizButton width={'130px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='38 a 60 años'/>
                    </div>
                    <QuizButton width={'130px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Más de 60 años'/>
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