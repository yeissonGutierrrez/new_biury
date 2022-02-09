
import QuizButton from './QuizButton'


function QuizStep7({setStep}) {
    return (
        <div className="step7">
            <p className='paragraph1'>Última pregunta. <br/> Puedes elegir varias opciones.</p>
            <h4 className='question-title'>¿CUÁLES SON TUS PRIORIDADES AL <br/> MOMENTO DE CUIDAR TU PELO.</h4>
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
                <button onClick={() => setStep('step5')} className='pagination-button'>ANTERIOR</button>
                <button onClick={() => setStep('suscribe')} className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep7