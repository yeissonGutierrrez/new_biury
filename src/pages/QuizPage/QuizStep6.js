
import QuizButton from './QuizButton'


function QuizStep6({setStep}) {
    return (
        <div className="step5">
            <h4 className='question-title'>¿CUÁL ES TU COLOR <br/> DE PELO?</h4>

            <div className='answers-wrapper'>
                <div className='answers-container'>
                    <QuizButton width={'170px'} bgColor='rgb(162,126,105)' borderColor='#642805' question='Café/Castaño'/>
                    <QuizButton width={'170px'} bgColor='rgb(246,255,125)' borderColor='#F0FF26' question='Rubio Natural'/>
                    <QuizButton width={'170px'} bgColor='rgb(202,102,249)' borderColor='#A600F5' question='Decolorado'/>
                </div>

                <div className='answers-container2'>
                    <QuizButton width={'170px'} bgColor='rgb(254,151,102)' borderColor='#FB5200' question='Rojo/Naranja'/>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Negro'/>
                </div>

                <div className='answers-container-mobile'>
                    <div className='grid-wrapper'>
                        <QuizButton width={'130px'} bgColor='rgb(162,126,105)' borderColor='#642805' question='Café/Castaño'/>
                        <QuizButton width={'130px'} bgColor='rgb(246,255,125)' borderColor='#F0FF26' question='Rubio Natural'/>
                        <QuizButton width={'130px'} bgColor='rgb(202,102,249)' borderColor='#A600F5' question='Decolorado'/>
                        <QuizButton width={'130px'} bgColor='rgb(254,151,102)' borderColor='#FB5200' question='Rojo/Naranja'/>
                    </div>
                    <QuizButton width={'130px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Negro'/>
                
                </div>
            </div>

            <div className='pagination-container'>
                <button onClick={() => setStep('step5')} className='pagination-button'>ANTERIOR</button>
                <button onClick={() => setStep('step7')} className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep6