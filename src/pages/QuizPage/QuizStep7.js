import QuizButton from './QuizButton';

function QuizStep7({ setStep, question }) {
  return (
    <div className='step7'>
      <p className='paragraph1'>
        Última pregunta. <br /> Puedes elegir varias opciones.
      </p>
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
          {question.Answers.map((item, index) => {
            return index == 4 ? (
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

      <div className='pagination-container'>
        <button onClick={() => setStep('step5')} className='pagination-button'>
          ANTERIOR
        </button>
        <button
          onClick={() => setStep('suscribe')}
          className='pagination-button'
        >
          CONTINUAR
        </button>
      </div>
    </div>
  );
}

export default QuizStep7;
