
import QuizButton from './QuizButton'


function QuizStep5({setStep}) {
    return (
        <div className="step5">
            <h4 className='question-title'>¿QUÉ BUSCAS CUÁNDO CUIDAS TU PIEL?</h4>

            <div className='answers-wrapper'>
                <div className='answers-container'>
                
                    <QuizButton width={'200px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                    <QuizButton width={'200px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                    <QuizButton width={'200px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
               
                </div>

                <div className='answers-container2'>
                    <QuizButton width={'200px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                    <QuizButton width={'200px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                </div>

                <div className='answers-container-mobile'>
                    <div className='grid-wrapper'>
                        <QuizButton width={'130px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                        <QuizButton width={'130px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                        <QuizButton width={'130px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                        <QuizButton width={'130px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>
                   </div>
                        <QuizButton width={'130px'} bgColor='rgb(102,235,219)' borderColor='#00DDC3' question='Cuidado de los crespos'/>

                </div>
            </div>

            <div className='pagination-container'>
                <button onClick={() => setStep('step4')} className='pagination-button'>ANTERIOR</button>
                <button onClick={() => setStep('step6')} className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep5