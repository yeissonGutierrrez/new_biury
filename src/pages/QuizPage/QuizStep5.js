
import QuizButton from './QuizButton'


function QuizStep5() {
    return (
        <div className="step5">
            <h4 className='question-title'>¿CUÁL ES TU COLOR <br/> DE PELO?</h4>

            <div className='answers-wrapper'>
                <div className='answers-container'>
                    <QuizButton width={'170px'} bgColor='rgb(162,126,105)' borderColor='#642805' question='Seca'/>
                    <QuizButton width={'170px'} bgColor='rgb(246,255,125)' borderColor='#F0FF26' question='Seca'/>
                    <QuizButton width={'170px'} bgColor='rgb(202,102,249)' borderColor='#A600F5' question='Seca'/>
                </div>

                <div className='answers-container2'>
                    <QuizButton width={'170px'} bgColor='rgb(254,151,102)' borderColor='#FB5200' question='Seca'/>
                    <QuizButton width={'170px'} bgColor='rgb(102,245,187)' borderColor='#00EF8E' question='Seca'/>
                </div>
            </div>

            <div className='pagination-container'>
                <button className='pagination-button'>ANTERIOR</button>
                <button className='pagination-button'>CONTINUAR</button>
            </div>
        </div>
    )
}

export default QuizStep5