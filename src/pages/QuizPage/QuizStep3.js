import QuizButton from './QuizButton';

function QuizStep3({ setStep, question }) {
  return (
    <div className='step3'>
      <h4 className='question-title'>{question.question.substring(0, 37)}</h4>
      <p className='paragraph1'>
        {question.question.substring(37, question.question.length)}
      </p>
      <div className='answers-wrapper'>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index <= 2 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,245,187)'
                borderColor='#00EF8E'
                question={item.value}
                key={index}
              />
            ) : null;
          })}
        </div>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index > 2 && index <= 5 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,245,187)'
                borderColor='#00EF8E'
                question={item.value}
                key={index}
              />
            ) : null;
          })}
        </div>
        <div className='answers-container'>
          {question.Answers.map((item, index) => {
            return index == 6 ? (
              <QuizButton
                width={'200px'}
                bgColor='rgb(102,245,187)'
                borderColor='#00EF8E'
                question={item.value}
                key={index}
              />
            ) : null;
          })}
        </div>

        <div className='answers-container-mobile'>
          <div className='grid-wrapper'>
            {question.Answers.map((item, index) => {
              return (
                <QuizButton
                  width={'200px'}
                  bgColor='rgb(102,245,187)'
                  borderColor='#00EF8E'
                  question={item.value}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>

      <div className='pagination-container'>
        <button
          onClick={() => {
            localStorage.setItem('step-quiz', 'step2');
            setStep('step2');
          }}
          className='pagination-button'
        >
          ANTERIOR
        </button>
        <button
          onClick={() => {
            setStep('step4');
            localStorage.setItem('step-quiz', 'step4');
          }}
          className='pagination-button'
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep3;
