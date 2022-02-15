import QuizButton from './QuizButton';

function QuizStep5({ setStep, question }) {
  return (
    <div className='step5'>
      <h4 className='question-title'>{question.question}</h4>

      <div className='answers-wrapper'>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index <= 2 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,235,219)'
                borderColor='#00DDC3'
                question={item.value}
                key={index}
              />
            ) : null;
          })}
        </div>

        <div className='answers-container2'>
          {question.Answers.map((item, index) => {
            return index > 2 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,235,219)'
                borderColor='#00DDC3'
                question={item.value}
                key={index}
              />
            ) : null;
          })}
        </div>

        <div className='answers-container-mobile'>
          <div className='grid-wrapper'>
            {question.Answers.map((item, index) => {
              return index <= 3 ? (
                <QuizButton
                  width={'130px'}
                  bgColor='rgb(102,235,219)'
                  borderColor='#00DDC3'
                  question={item.value}
                  key={index}
                />
              ) : null;
            })}
          </div>
        </div>
      </div>

      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step4');
            setStep('step4');
          }}
          className='pagination-button'
        >
          ANTERIOR
        </button>
        <button
          onClick={() => {
            setStep('step6');
            localStorage.setItem('step-quiz', 'step6');
          }}
          className='pagination-button'
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep5;
